import assert from 'node:assert/strict';
import { test } from 'node:test';

const L = new URL('../lib/server/', import.meta.url).href;
const { STATUS_VERSION, defaultComponents, currentStored, mergeStatus } = await import(L + 'status-shared.ts');

const override = { state: 'operational', note: 'alt', updatedAt: '2026-01-01T00:00:00.000Z' };

test('Standardkomponenten: nichts ist im Betrieb, keine Zahlen, kein "Wartung"', () => {
  assert.ok(defaultComponents.length > 0);
  for (const c of defaultComponents) {
    assert.equal(c.state, 'building', c.id);
    assert.doesNotMatch(c.detail + c.name, /\d/, `${c.id}: keine Zahlen`);
    assert.doesNotMatch(c.detail, /Wartung/i);
  }
});

test('Überschreibungen ohne Version (aus der Zeit vor der Änderung) werden ignoriert', () => {
  const old = { overrides: { server: override }, updatedAt: override.updatedAt };
  const board = mergeStatus(defaultComponents, currentStored(old));
  assert.equal(board.updatedAt, undefined);
  for (const c of board.components) assert.equal(c.state, 'building');
});

test('Überschreibungen mit falscher Version, kaputte oder fremde Daten werden ignoriert', () => {
  for (const raw of [{ version: 1, overrides: { server: override } }, { version: STATUS_VERSION + 1, overrides: { server: override } },
    { version: STATUS_VERSION }, { version: STATUS_VERSION, overrides: 'x' }, null, undefined, 'text', 42, []]) {
    const board = mergeStatus(defaultComponents, currentStored(raw));
    assert.ok(board.components.every((c) => c.state === 'building'), JSON.stringify(raw));
  }
});

test('Neu gespeicherte Überschreibungen (aktuelle Version) gelten', () => {
  const fresh = { version: STATUS_VERSION, overrides: { server: { state: 'operational', updatedAt: override.updatedAt } }, updatedAt: override.updatedAt };
  const board = mergeStatus(defaultComponents, currentStored(fresh));
  assert.equal(board.components.find((c) => c.id === 'server').state, 'operational');
  assert.equal(board.components.find((c) => c.id === 'storage').state, 'building');
  assert.equal(board.updatedAt, override.updatedAt);
});

test('currentStored schreibt immer die aktuelle Version; unbekannte Komponenten-IDs und Prototyp-Schlüssel stören nicht', () => {
  assert.equal(currentStored(null).version, STATUS_VERSION);
  const board = mergeStatus(defaultComponents, currentStored({ version: STATUS_VERSION, overrides: { gibtesnicht: override } }));
  assert.equal(board.components.length, defaultComponents.length);
  assert.ok(board.components.every((c) => c.state === 'building'));
  const proto = mergeStatus([{ id: 'constructor', name: 'x', group: 'compute', detail: 'x', state: 'building' }], currentStored({ version: STATUS_VERSION, overrides: {} }));
  assert.equal(proto.components[0].state, 'building');
});
