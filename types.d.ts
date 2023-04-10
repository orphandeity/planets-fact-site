type TPlanetContent = Record<string, string>;

interface IPlanet {
  name: string;
  overview: TPlanetContent;
  structure: TPlanetContent;
  geology: TPlanetContent;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: TPlanetContent;
  imageSize: TPlanetContent;
  color: string;
}
