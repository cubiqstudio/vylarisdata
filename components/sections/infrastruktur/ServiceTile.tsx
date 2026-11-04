import { A, Icon, Status, type IconName, type Tone } from "@/components/ui";

export type ServiceBadge = { kind: "status"; tone: Tone; label: string } | { kind: "tag"; label: string };

export type ServiceItem = {
  icon: IconName;
  title: string;
  badge: ServiceBadge;
  text: string;
  link: { href: string; label: string; icon: IconName };
  /** weicher Hintergrund */
  soft?: boolean;
};

/** Dienste-Kachel (li) mit Badge-Zeile und Pfeil-/Extern-Link am Fuß. */
export function ServiceTile({ item }: { item: ServiceItem }) {
  const { icon, title, badge, text, link, soft } = item;
  return (
    <li>
      <div className={soft ? "tile feature soft" : "tile feature"}>
        <span className="icon">
          <Icon name={icon} />
        </span>
        <h3>{title}</h3>
        <div className="chips">
          {badge.kind === "status" ? <Status tone={badge.tone}>{badge.label}</Status> : <span className="tag">{badge.label}</span>}
        </div>
        <p>{text}</p>
        <A href={link.href} className="more">
          {link.label}
          <Icon name={link.icon} />
        </A>
      </div>
    </li>
  );
}
