"use client";

import { useState, useEffect } from "react";
import { useWindow } from "@/lib/useWindow";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import Image from "next/image";
import source from "@/assets/icon-source.svg";

export default function PlanetContent({ planet }: { planet: IPlanet }) {
  // selected content
  const [content, setContent] = useState<string>("overview");

  // image associated with selected content
  const [image, setImage] = useState<string>(planet.images.planet);

  // update image to reflect content
  useEffect(() => {
    if (content === "overview") setImage(planet.images.planet);
    if (content === "structure") setImage(planet.images.internal);
    if (content === "geology") setImage(planet.images.planet);
  }, [content, planet]);

  // get browser window size to determine layout
  const width = useWindow();
  // return null if not in the browser
  if (!width) return null;
  // image size multiplier value
  const multiplier = width < 768 ? 0.44 : width < 1440 ? 0.65 : 1;

  return (
    <Tabs.Root
      defaultValue="overview"
      value={content}
      onValueChange={(value) => setContent(value)}
      className="md:flex md:flex-col lg:flex-row"
    >
      {width >= 768 && (
        <div className="grid h-[304px] place-content-center md:h-[460px] lg:aspect-square lg:h-[754px]">
          <Image
            src={image}
            alt={planet.name}
            width={Number(planet.images.size) * multiplier}
            height={Number(planet.images.size) * multiplier}
          />
        </div>
      )}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-[69px] lg:mt-[126px] lg:flex-col lg:gap-10">
        <Tabs.Content value="overview" asChild>
          <div className="flex flex-col gap-4 px-6 md:max-w-[339px] md:px-0 lg:max-w-[350px]">
            <h1 className="font-antonio text-[40px] font-medium uppercase md:text-[48px] lg:text-[80px]">
              {planet.name}
            </h1>
            <p className="text-[11px] leading-[22px] lg:text-[14px] lg:leading-[25px]">
              {planet.overview.content}
            </p>
            <p className="mt-4 flex gap-1 text-xs leading-[25px] text-grayLight lg:mt-0 lg:text-sm">
              <span>source : </span>
              <a
                href={planet.overview.source}
                className="flex items-center gap-1 font-semibold underline"
              >
                Wikipedia
                <Image src={source} alt="" width={12} height={12} />
              </a>
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value="structure" asChild>
          <div className="flex flex-col gap-4 px-6 md:max-w-[339px] md:px-0 lg:max-w-[350px]">
            <h1 className="font-antonio text-[40px] font-medium uppercase md:text-[48px] lg:text-[80px]">
              {planet.name}
            </h1>
            <p className="text-[11px] leading-[22px] lg:text-[14px] lg:leading-[25px]">
              {planet.structure.content}
            </p>
            <p className="mt-4 flex gap-1 text-xs leading-[25px] text-grayLight lg:mt-0 lg:text-sm">
              <span>source : </span>
              <a
                href={planet.structure.source}
                className="flex items-center gap-1 font-semibold underline"
              >
                Wikipedia
                <Image src={source} alt="" width={12} height={12} />
              </a>
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value="geology" asChild>
          <div className="flex flex-col gap-4 px-6 md:max-w-[339px] md:px-0 lg:max-w-[350px]">
            <h1 className="font-antonio text-[40px] font-medium uppercase md:text-[48px] lg:text-[80px]">
              {planet.name}
            </h1>
            <p className="text-[11px] leading-[22px] lg:text-[14px] lg:leading-[25px]">
              {planet.geology.content}
            </p>
            <p className="mt-4 flex gap-1 text-xs leading-[25px] text-grayLight lg:mt-0 lg:text-sm">
              <span>source : </span>
              <a
                href={planet.geology.source}
                className="flex items-center gap-1 font-semibold underline"
              >
                Wikipedia
                <Image src={source} alt="" width={12} height={12} />
              </a>
            </p>
          </div>
        </Tabs.Content>

        {width < 768 && (
          <div className="grid h-[304px] place-content-center">
            <Image
              src={image}
              alt={planet.name}
              width={Number(planet.images.size) * multiplier}
              height={Number(planet.images.size) * multiplier}
            />
          </div>
        )}

        <Tabs.List className="flex h-[50px] flex-row justify-between border-b border-white/10 px-6 text-[9px] md:h-fit md:w-full md:flex-col md:justify-center md:gap-4 md:border-none md:px-0">
          <div className="relative flex items-center">
            <Tabs.Trigger
              value="overview"
              className={clsx([
                "group peer flex items-center justify-center data-[state=inactive]:bg-transparent md:w-full md:justify-start md:gap-4 md:border md:px-5 md:py-2 data-[state=inactive]:lg:hover:bg-grayDark",
                width >= 768 && planet.color,
              ])}
            >
              <span className="hidden text-grayLight group-data-[state=active]:text-white md:inline">
                01
              </span>
              <span className="t md:text-whiteext-grayLight font-bold uppercase tracking-[1.93px] group-data-[state=active]:text-white md:leading-[25px]">
                overview
              </span>
            </Tabs.Trigger>
            <div
              className={clsx([
                planet.color,
                "absolute bottom-0 h-1 w-full peer-data-[state=inactive]:bg-transparent md:hidden",
              ])}
            />
          </div>

          <div className="relative flex items-center">
            <Tabs.Trigger
              value="structure"
              className={clsx([
                "group peer flex items-center justify-center data-[state=inactive]:bg-transparent md:w-full md:justify-start md:gap-4 md:border md:px-5 md:py-2 data-[state=inactive]:lg:hover:bg-grayDark",
                width >= 768 && planet.color,
              ])}
            >
              <span className="hidden text-grayLight group-data-[state=active]:text-white md:inline">
                02
              </span>
              <span className="font-bold uppercase tracking-[1.93px] text-grayLight group-data-[state=active]:text-white md:leading-[25px] md:text-white">
                structure
              </span>
            </Tabs.Trigger>
            <div
              className={clsx([
                planet.color,
                "absolute bottom-0 h-1 w-full peer-data-[state=inactive]:bg-transparent md:hidden",
              ])}
            />
          </div>

          <div className="relative flex items-center">
            <Tabs.Trigger
              value="geology"
              className={clsx([
                "group peer flex items-center justify-center data-[state=inactive]:bg-transparent md:w-full md:justify-start md:gap-4 md:border md:px-5 md:py-2 data-[state=inactive]:lg:hover:bg-grayDark",
                width >= 768 && planet.color,
              ])}
            >
              <span className="hidden text-grayLight group-data-[state=active]:text-white md:inline">
                03
              </span>
              <span className="font-bold uppercase tracking-[1.93px] text-grayLight group-data-[state=active]:text-white md:leading-[25px] md:text-white">
                geology
              </span>
            </Tabs.Trigger>
            <div
              className={clsx([
                planet.color,
                "absolute bottom-0 h-1 w-full peer-data-[state=inactive]:bg-transparent md:hidden",
              ])}
            />
          </div>
        </Tabs.List>
      </div>
    </Tabs.Root>
  );
}

// const [color, setColor] = useState<string>(planet.color);

// useEffect(() => {
//   function updateColor() {
//     switch (planet.name) {
//       case "Mercury":
//       default:
//         setColor("bg-mercury");
//       case "Venus":
//         setColor("bg-venus");
//       case "Earth":
//         setColor("bg-earth");
//       case "Mars":
//         setColor("bg-mars");
//       case "Jupiter":
//         setColor("bg-jupiter");
//       case "Saturn":
//         setColor("bg-saturn");
//       case "Uranus":
//         setColor("bg-uranus");
//       case "Neptune":
//         setColor("bg-neptune");
//     }
//   }
//   updateColor();
// }, [planet]);
