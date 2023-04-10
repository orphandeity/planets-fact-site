import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MobileLinks = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <>
    <Link
      href={"/mercury"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-mercury" />
        <span>Mercury</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
    <Link
      href={"/venus"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-venus" />
        <span>Venus</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
    <Link
      href={"/earth"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-earth" />
        <span>Earth</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
    <Link
      href={"/mars"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-mars" />
        <span>Mars</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
    <Link
      href={"/jupiter"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-jupiter" />
        <span>Jupiter</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
    <Link
      href={"/saturn"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-saturn" />
        <span>Saturn</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
    <Link
      href={"/uranus"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-uranus" />
        <span>Uranus</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
    <Link
      href={"/neptune"}
      onClick={() => setIsOpen(false)}
      className="mx-6 flex items-center justify-between py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-neptune" />
        <span>Neptune</span>
      </div>
      <ChevronRight size={16} color="#838391" opacity={0.6} />
    </Link>
  </>
);

export default MobileLinks;
