import PlanetContent from "@/components/PlanetContent";
import planets from "@/lib/data.json";

export default function Planet({ params }: { params: { slug: string } }) {
  // use route parameter to find planet data
  const [planet] = planets.filter(
    (planet) => planet.name.toLowerCase() === params.slug
  );

  return (
    <div>
      <PlanetContent planet={planet} />
      <dl className="grid grid-cols-1 gap-2 md:grid-cols-4">
        <div className="border p-2">
          <dt className="text-xs uppercase md:text-sm">rotation time</dt>
          <dd className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
            {planet.rotation}
          </dd>
        </div>
        <div className="border p-2">
          <dt className="text-xs uppercase md:text-sm">revolution time</dt>
          <dd className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
            {planet.revolution}
          </dd>
        </div>
        <div className="border p-2">
          <dt className="text-xs uppercase md:text-sm">radius</dt>
          <dd className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
            {planet.radius}
          </dd>
        </div>
        <div className="border p-2">
          <dt className="text-xs uppercase md:text-sm">average temp.</dt>
          <dd className="text-xl font-bold uppercase md:text-2xl lg:text-3xl">
            {planet.temperature}
          </dd>
        </div>
      </dl>
    </div>
  );
}
