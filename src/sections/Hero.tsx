import ArrowIcon from "@/assets/arrow-right.svg";
import cog from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
        <div className="container">
          <div>
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b  from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              mollitia minus magni autem quo doloribus tempora fuga beatae
              repellat incidunt voluptates, enim asperiores unde reiciendis
              libero neque obcaecati doloremque eos!
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-20">
            <Image src={cog} alt="cog" />
          </div>
        </div>
      </section>
    </>
  );
};
