import { BrandCard, Button, Cards, Dots } from "@/components/ui";
import type { KontaktBrand } from "./types";

/** Markenkarten der Gruppe: gemeinsame BrandCard mit Stichpunkten und Button, als Kartenliste. */
export function PartnerBrands({ brands }: { brands: readonly KontaktBrand[] }) {
  return (
    <Cards cols={2}>
      {brands.map(({ name, sub, icon, text, points, current, action }) => (
        <li key={name}>
          <BrandCard
            name={name}
            sub={sub}
            icon={icon}
            current={current}
            action={
              <>
                <Dots items={points} />
                <Button href={action.href} variant="secondary" icon={action.icon}>
                  {action.label}
                </Button>
              </>
            }
          >
            {text}
          </BrandCard>
        </li>
      ))}
    </Cards>
  );
}
