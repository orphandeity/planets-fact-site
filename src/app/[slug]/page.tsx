import Container from "@/components/Container";
import PlanetContent from "@/components/PlanetContent";
import planets from "@/lib/data.json";

export default function Planet({ params }: { params: { slug: string } }) {
  // use route parameter to find planet data
  const [planet] = planets.filter(
    (planet) => planet.name.toLowerCase() === params.slug
  );

  return (
    <div className="mx-auto md:max-w-[768px] md:px-10 lg:max-w-[1440px] lg:px-40">
      <PlanetContent planet={planet} />
      <dl className="grid grid-cols-1 gap-2 md:mt-[27px] md:grid-cols-4 lg:mt-0">
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
