import Link from "next/link";
import Image from "next/image";
import chevron from "@/assets/icon-chevron.svg";

const MobileLinks = () => (
  <>
    <Link
      href={"/mercury"}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-mercury" />
        <span>Mercury</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
    <Link
      href={"/venus"}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-venus" />
        <span>Venus</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
    <Link
      href={"/earth"}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-earth" />
        <span>Earth</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
    <Link
      href={"/mars"}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-mars" />
        <span>Mars</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
    <Link
      href={"/jupiter"}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-jupiter" />
        <span>Jupiter</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
    <Link
      href={"/saturn"}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-saturn" />
        <span>Saturn</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
    <Link
      href={"/uranus"}
      className="mx-6 flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-uranus" />
        <span>Uranus</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
    <Link
      href={"/neptune"}
      className="mx-6 flex items-center justify-between py-5"
    >
      <div className="flex items-center gap-6 text-[15px] font-bold uppercase leading-[25px] tracking-[1.36px]">
        <div className="h-4 w-4 rounded-full bg-neptune" />
        <span>Neptune</span>
      </div>
      <div>
        <Image src={chevron} alt="" width={6} height={8} />
      </div>
    </Link>
  </>
);

export default MobileLinks;