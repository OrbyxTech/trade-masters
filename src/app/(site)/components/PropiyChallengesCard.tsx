export default function propiyChallengesCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <div className="bg-[#F9F0FF] flex flex-col p-4 rounded-sm relative mt-28">
      <div className="mt-[-5rem]">
        <img src={img} alt="tradePhoto" />
        <div className="bg-[#FF521D] p-2 rounded-sm shadow-md text-center text-sm flex justify-center items-center w-5/6 h-12 mx-auto absolute top-[20%] left-1/2 transform -translate-x-1/2">
          {title}
        </div>

        <div className="bg-white p-6">
          <div className="bg-[#8989A2] w-[95%] h-[1px] text-center mx-auto mt-10"></div>

          <div className="flex flex-col justify-start items-start gap-4 w-full pt-5">
            <div className="flex justify-center items-center gap-2">
              <img
                src="/images/main/propiyChallenge/timeline.svg"
                alt="timeLine icon"
              />
              <p className="text-[#E4622E]">
                25 December <span className="text-[#8989A2]">2023</span>
              </p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <img
                src="/images/main/propiyChallenge/timeline.svg"
                alt="timeLine icon"
              />
              <p className="text-[#E4622E]">
                0 <span className="text-[#8989A2]">comments</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
