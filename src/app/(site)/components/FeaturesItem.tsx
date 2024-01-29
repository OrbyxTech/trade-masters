export default function FeaturesItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full">
      <img src={icon} alt="featureIcon" />
      <h2 className="text-[#160637]">{title}</h2>
      <span className="text-[#8989A2] w-[95%] text-center">{desc}</span>
    </div>
  );
}
