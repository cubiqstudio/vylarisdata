import { Button, Checks, Section, Split, type IconName } from "@/components/ui";
import { TopicVisual, type TopicVisualContent } from "./TopicVisual";

/** Listenpunkt mit fettem Anfang (inklusive Doppelpunkt). */
export type TopicPoint = { lead: string; text: string };

export type TopicContent = {
  /** Anker-ID; die Überschrift bekommt `${id}-h` */
  id: string;
  band?: boolean;
  reverse?: boolean;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  points: readonly TopicPoint[];
  action?: { href: string; label: string; icon: IconName };
  visual: TopicVisualContent;
};

/** Abschnitt mit Text links (oder rechts) und Begleitgrafik daneben. */
export function TopicSection({ topic }: { topic: TopicContent }) {
  const headId = `${topic.id}-h`;
  return (
    <Section id={topic.id} labelledBy={headId} band={topic.band}>
      <Split
        reverse={topic.reverse}
        copy={
          <>
            <p className="eyebrow">{topic.eyebrow}</p>
            <h2 className="h2" id={headId}>
              {topic.title}
            </h2>
            {topic.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <Checks
              items={topic.points.map((pt) => (
                <>
                  <strong>{pt.lead}</strong> {pt.text}
                </>
              ))}
            />
            {topic.action && (
              <p>
                <Button href={topic.action.href} variant="secondary" icon={topic.action.icon}>
                  {topic.action.label}
                </Button>
              </p>
            )}
          </>
        }
        visual={<TopicVisual visual={topic.visual} />}
      />
    </Section>
  );
}
