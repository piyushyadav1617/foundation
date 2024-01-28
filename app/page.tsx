import { DotBackgroundDemo } from "./dotBg";
import Spotlight from "@/components/ui/Spotlight";
import SparklesCore from "@/components/ui/Sparkles";
export default function Home() {
  return (
    <main>
      <SpotlightPreview />
    </main>
  );
}

function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full flex justify-start md:items-center md:justify-center bg-white/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <DotBackgroundDemo>
        <Spotlight
          className="-top-40 left-0 md:left-40 xl:left-60 md:-top-20 big:left-[30vw]"
          fill="green"
        />
        <div className="mt-[-200px] md:mt-0 max-w-7xl  mx-auto relative z-10  w-full flex flex-col justify-center items-center">
          <h1 className="animate-text text-5xl md:text-7xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%bg-opacity-50">
            Ali foundation
          </h1>

          <div className="w-3/4 sm:w-1/3 h-40 relative">
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={400}
              className="w-full h-full"
              particleColor="#0acc00"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </DotBackgroundDemo>
    </div>
  );
}
