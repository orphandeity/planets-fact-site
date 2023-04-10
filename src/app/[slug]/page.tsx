import PlanetContent from "@/components/PlanetContent";
import planets from "@/lib/data.json";

export default function Planet({ params }: { params: { slug: string } }) {
  // use route parameter to find planet data
  const [planet] = planets.filter(
    (planet) => planet.name.toLowerCase() === params.slug
  );

  return (
    <div className="mx-auto flex flex-col gap-7 md:max-w-[768px] md:px-10 lg:max-w-[1440px] lg:gap-0 lg:px-40">
      <PlanetContent planet={planet} />
      <dl className="mb-14 grid grid-cols-1 gap-2 px-6 md:grid-cols-4 md:gap-3 md:px-0 lg:gap-8">
        <div className="flex items-center justify-between border border-white/10 p-2 px-6 py-3 md:flex-col md:items-start md:px-4 md:pb-5 md:pt-4 lg:px-6 lg:pb-7 lg:pt-5">
          <dt className="text-[8px] font-bold uppercase leading-[16px] tracking-[0.73px] text-grayLight lg:text-[11px] lg:leading-[25px] lg:tracking-[1px]">
            rotation time
          </dt>
          <dd className="font-antonio text-[20px] font-medium uppercase tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px]">
            {planet.rotation}
          </dd>
        </div>
        <div className="flex items-center justify-between border border-white/10 p-2 px-6 py-3 md:flex-col md:items-start md:px-4 md:pb-5 md:pt-4 lg:px-6 lg:pb-7 lg:pt-5">
          <dt className="text-[8px] font-bold uppercase leading-[16px] tracking-[0.73px] text-grayLight lg:text-[11px] lg:leading-[25px] lg:tracking-[1px]">
            revolution time
          </dt>
          <dd className="font-antonio text-[20px] font-medium uppercase tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px]">
            {planet.revolution}
          </dd>
        </div>
        <div className="flex items-center justify-between border border-white/10 p-2 px-6 py-3 md:flex-col md:items-start md:px-4 md:pb-5 md:pt-4 lg:px-6 lg:pb-7 lg:pt-5">
          <dt className="text-[8px] font-bold uppercase leading-[16px] tracking-[0.73px] text-grayLight lg:text-[11px] lg:leading-[25px] lg:tracking-[1px]">
            radius
          </dt>
          <dd className="font-antonio text-[20px] font-medium uppercase tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px]">
            {planet.radius}
          </dd>
        </div>
        <div className="flex items-center justify-between border border-white/10 p-2 px-6 py-3 md:flex-col md:items-start md:px-4 md:pb-5 md:pt-4 lg:px-6 lg:pb-7 lg:pt-5">
          <dt className="text-[8px] font-bold uppercase leading-[16px] tracking-[0.73px] text-grayLight lg:text-[11px] lg:leading-[25px] lg:tracking-[1px]">
            average temp.
          </dt>
          <dd className="font-antonio text-[20px] font-medium uppercase tracking-[-0.75px] md:text-[24px] md:tracking-[-0.9px] lg:text-[40px] lg:tracking-[-1.5px]">
            {planet.temperature}
          </dd>
        </div>
      </dl>
    </div>
  );
}
