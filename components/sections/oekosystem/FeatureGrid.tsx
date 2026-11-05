import { Cards, Tile, type IconName } from "@/components/ui";

export type FeatureTileData = { icon: IconName; title: string; text: string };

/** Vier Feature-Kacheln nebeneinander. */
export function FeatureGrid({ items }: { items: readonly FeatureTileData[] }) {
  return (
    <Cards cols={4}>
      {items.map((item) => (
        <Tile key={item.title} icon={item.icon} title={item.title} variant="feature">
          {item.text}
        </Tile>
      ))}
    </Cards>
  );
}
