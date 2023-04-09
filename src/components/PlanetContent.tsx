"use client";

import { useWindow } from "@/lib/useWindow";
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx";

export default function PlanetContent({ planet }: { planet: IPlanet }) {
  const width = useWindow();

  if (!width) return <p>there was an error</p>;

  return (
    <Tabs.Root
      defaultValue="overview"
      className="flex flex-col-reverse md:flex-row lg:flex-col"
    >
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
    </Tabs.Root>
  );
}
