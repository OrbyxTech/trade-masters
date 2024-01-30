export default function ProfitShare() {
  return (
    <>
      <div className="flex justify-center items-center w-full gap-20 mt-28">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#160637] text-2xl font-semibold tracking-wider">
            up to <span className="text-[#FF521D] font-bold text-4xl">90%</span>{" "}
            profit share
          </h1>

          <p className="text-[#8989A2] w-[458px]">
            All you need to do is prove your skills in two steps, and after
            that, for any profits you earn in the account, you can receive up to
            90% of the profit amount!
          </p>
        </div>
        <img src="/images/main/profitShare.svg" alt="radial" />
      </div>
    </>
  );
}
