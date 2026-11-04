import { Icon, type IconName } from "@/components/ui";

type NoteCalloutProps = {
  icon?: IconName;
  /** id der fetten Überschrift (für aria-labelledby der Section) */
  headingId: string;
  title: string;
  text: string;
};

/** Hinweisbox (warn) mit role="note", fetter Titelzeile und Fließtext. */
export function NoteCallout({ icon = "info", headingId, title, text }: NoteCalloutProps) {
  return (
    <div className="callout warn" role="note">
      <span className="icon">
        <Icon name={icon} />
      </span>
      <div>
        <p>
          <strong id={headingId}>{title}</strong>
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
}
