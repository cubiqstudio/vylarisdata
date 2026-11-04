import { Faq, Icon, type FaqItem, type IconName } from "@/components/ui";

export type FaqAside = { icon: IconName; title: string; text: string };

type FaqSplitProps = {
  eyebrow: string;
  id: string;
  title: string;
  items: readonly FaqItem[];
  aside: FaqAside;
};

/** FAQ-Liste links, Hinweiskarte rechts. */
export function FaqSplit({ eyebrow, id, title, items, aside }: FaqSplitProps) {
  return (
    <div className="split">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2" id={id}>
          {title}
        </h2>
        <Faq items={items} />
      </div>
      <div className="tile feature">
        <span className="icon">
          <Icon name={aside.icon} />
        </span>
        <h3>{aside.title}</h3>
        <p>{aside.text}</p>
      </div>
    </div>
  );
}
