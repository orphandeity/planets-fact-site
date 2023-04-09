"use client";

import { useState, useEffect } from "react";
import { useWindow } from "@/lib/useWindow";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";
import Image from "next/image";

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
      <div className="flex flex-col-reverse md:flex-row lg:flex-col">
        <Tabs.Content value="overview" asChild>
          <div>
            <h1 className="text-5xl font-bold">{planet.name}</h1>
            <p>{planet.overview.content}</p>
            <p>
              <span>source : </span>
              <a href={planet.overview.source}>Wikipedia</a>
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value="structure" asChild>
          <div>
            <h1 className="text-5xl font-bold">{planet.name}</h1>
            <p>{planet.structure.content}</p>
            <p>
              <span>source : </span>
              <a href={planet.structure.source}>Wikipedia</a>
            </p>
          </div>
        </Tabs.Content>
        <Tabs.Content value="geology" asChild>
          <div>
            <h1 className="text-5xl font-bold">{planet.name}</h1>
            <p>{planet.geology.content}</p>
            <p>
              <span>source : </span>
              <a href={planet.geology.source}>Wikipedia</a>
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

        <Tabs.List className="flex flex-row justify-between md:flex-col md:gap-2">
          <div className="relative">
            <Tabs.Trigger
              value="overview"
              className={clsx([
                "peer flex items-center justify-center p-2 data-[state=inactive]:bg-transparent md:gap-4 md:border",
                width >= 768 && planet.color,
              ])}
            >
              <span className="hidden md:inline">01</span>
              <span>overview</span>
            </Tabs.Trigger>
            <div
              className={clsx([
                planet.color,
                "absolute bottom-0 h-1 w-full peer-data-[state=inactive]:bg-transparent md:hidden",
              ])}
            />
          </div>

          <div className="relative">
            <Tabs.Trigger
              value="structure"
              className={clsx([
                "peer flex items-center justify-center p-2 data-[state=inactive]:bg-transparent md:gap-4 md:border",
                width >= 768 && planet.color,
              ])}
            >
              <span className="hidden md:inline">02</span>
              <span>structure</span>
            </Tabs.Trigger>
            <div
              className={clsx([
                planet.color,
                "absolute bottom-0 h-1 w-full peer-data-[state=inactive]:bg-transparent md:hidden",
              ])}
            />
          </div>

          <div className="relative">
            <Tabs.Trigger
              value="geology"
              className={clsx([
                "peer flex items-center justify-center p-2 data-[state=inactive]:bg-transparent md:gap-4 md:border",
                width >= 768 && planet.color,
              ])}
            >
              <span className="hidden md:inline">03</span>
              <span>geology</span>
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
