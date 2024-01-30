import FeaturesItem from "./FeaturesItem";

export default function Features() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 font-semibold">
        <div className="flex gap-2 bg-[#F7F1FF] rounded-3xl p-2 px-4">
          <img src="/images/mainIcons/eyeIcon.svg" alt="eyeIcon" />
          <span className="text-[#FF521D]">Why ProPiy.</span>
        </div>

        <h2 className="text-[#160637] text-2xl">
          why you should choose <span className="text-[#FF521D]">P</span>ro
          <span className="text-[#FF521D]">P</span>iy. ?{" "}
        </h2>

        <span className="text-[#8989A2] font-normal">
          if you are a new trader, we are more than happy to help you in your
          journey
        </span>

        <div className="flex justify-center items-center gap-6">
          <FeaturesItem
            icon="/images/mainIcons/chart.svg"
            title="Trusted in community"
            desc="more than 15000 Challneges"
          />
          <FeaturesItem
            icon="/images/mainIcons/timeline.svg"
            title="Free Trial"
            desc="Create a 5 days free trial challenge"
          />
          <FeaturesItem
            icon="/images/mainIcons/shapes.svg"
            title="Analyse your Challenge (Real-Time)"
            desc="All Details in Real-Time"
          />
          <FeaturesItem
            icon="/images/mainIcons/care.svg"
            title="Profit Withdrawal"
            desc="After the required period of time has passed from the account, you can submit a withdrawal request. Withdrawal requests and new account creation will be completed quickly."
          />
        </div>
      </div>
    </>
  );
}
