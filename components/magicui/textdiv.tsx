import { cn } from "@/@";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export function Textdiv() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-white rounded-full" style={{backgroundColor:"white"}}/>{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#ffaa40] to-[#ffaa40] bg-clip-text text-transparent`,
          )}
        >
          Testnet is live now
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}
