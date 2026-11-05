import { Cards, Tile, type IconName } from "@/components/ui";

export type SoftwareTile = { icon: IconName; title: string; text: string };

/** Vier Kacheln zur Softwareentwicklung. */
export function SoftwareTiles({ items }: { items: readonly SoftwareTile[] }) {
  return (
    <Cards cols={4}>
      {items.map((t) => (
        <Tile key={t.title} icon={t.icon} title={t.title}>
          {t.text}
        </Tile>
      ))}
    </Cards>
  );
}
