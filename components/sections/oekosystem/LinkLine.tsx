import { A } from "@/components/ui";

/** Absatz mit einem einzelnen Link. */
export function LinkLine({ href, label }: { href: string; label: string }) {
  return (
    <p className="mt-6">
      <A className="link" href={href}>
        {label}
      </A>
    </p>
  );
}
