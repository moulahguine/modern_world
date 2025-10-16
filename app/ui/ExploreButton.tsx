import Link from "next/link";

export default function ExploreButton() {
  return (
    <Link href="#architectures">
      <div className="group mx-auto w-fit relative rounded-sm text-lg border border-black px-9 py-3 font-semibold text-white shadow-sm transition-colors bg-black hover:text-white overflow-hidden cursor-pointer">
        <div className="arrowDown absolute left-1/2 -top-[35px] w-[2px] h-[30px] translate-x-[-50%] transition-all duration-300 group-hover:top-[10px] bg-white"></div>
        <p className="relative top-[0px] transition-all duration-300 group-hover:top-[40px]">
          Explore
        </p>
      </div>
    </Link>
  );
}
