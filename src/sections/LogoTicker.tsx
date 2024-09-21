import acmelogo from "@/assets/logo-acme.png";
import quantumlogo from "@/assets/logo-quantum.png";
import echologo from "@/assets/logo-echo.png";
import celestiallogo from "@/assets/logo-celestial.png";
import puslelogo from "@/assets/logo-pulse.png";
import apexlogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <>
      <div className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className="flex gap-14 flex-none">
              <Image
                src={acmelogo}
                alt="acmelogo"
                className="logo-ticker-image"
              />
              <Image
                src={quantumlogo}
                alt="quantumlogo"
                className="logo-ticker-image"
              />
              <Image
                src={echologo}
                alt="echologo"
                className="logo-ticker-image"
              />
              <Image
                src={celestiallogo}
                alt="celestiallogo"
                className="logo-ticker-image"
              />
              <Image
                src={puslelogo}
                alt="puslelogo"
                className="logo-ticker-image"
              />
              <Image
                src={apexlogo}
                alt="apexlogo"
                className="logo-ticker-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
