import { Icon, Status, type LayerItem } from "@/components/ui";

type InfraLayersProps = {
  label: string;
  statusLabel: string;
  ariaLabel: string;
  layers: readonly LayerItem[];
};

/** Schichtenübersicht ohne Pfeile, mit Kopfzeile (Status + Titel). */
export function InfraLayers({ label, statusLabel, ariaLabel, layers }: InfraLayersProps) {
  return (
    <>
      <p className="stack-label">
        <Status tone="info">{statusLabel}</Status>
        <span className="h4">{label}</span>
      </p>
      <div className="stack" aria-label={ariaLabel}>
        {layers.map((l) => (
          <div key={l.name} className={l.highlight ? "layer hi" : "layer"}>
            <div className="lname">
              <span className="icon">
                <Icon name={l.icon} />
              </span>
              {l.name}
            </div>
            <p className="ldesc">{l.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
