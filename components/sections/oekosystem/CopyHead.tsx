/** Eyebrow und h2 für Split-Abschnitte (Text neben Visual). */
export function CopyHead({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2" id={id}>
        {title}
      </h2>
    </>
  );
}
