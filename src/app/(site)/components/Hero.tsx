import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex justify-center items-center w-5/6 mx-auto overflow-hidden">
      <div className="flex flex-col justify-center items-start gap-10 py-2">
        <h1 className="scroll-m-20 text-7xl font-bold w-4/6">
          We are here for you
        </h1>

        <span className="text-[#000000] text-4xl opacity-50 tracking-wide">
          Our fund , Your trade
        </span>

        <div className="flex gap-10">
          <Button className="text-white border border-[#E4622E] bg-[#FF521D] rounded-3xl transition-all duration-300 hover:text-[#FF521D] hover:bg-white px-6">
            contact us
          </Button>

          <Button className="text-[#E4622E] bg-white rounded-3xl transition-all duration-300 hover:text-white px-6">
            Learn more
          </Button>
        </div>
      </div>

      <img src="/images/chain.svg" alt="chain" />
    </div>
  );
}

export default Hero;
