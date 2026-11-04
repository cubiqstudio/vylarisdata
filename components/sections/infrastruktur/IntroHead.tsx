type IntroHeadProps = {
  eyebrow: string;
  id: string;
  title: string;
  /** mehrere Lead-Absätze */
  leads: readonly string[];
};

/** Abschnittskopf mit mehreren Lead-Absätzen. */
export function IntroHead({ eyebrow, id, title, leads }: IntroHeadProps) {
  return (
    <div className="max-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
      {leads.map((l) => (
        <p key={l} className="lead">
          {l}
        </p>
      ))}
    </div>
  );
}
