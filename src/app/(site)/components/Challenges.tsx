import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PropiyChallengesCard from "./propiyChallengesCard";

const Rows1 = [
  {
    title: "Trading Period",
    phase1: {
      name: "30 Days",
      color: "#1563FF",
    },
    phase2: {
      name: "60 Days",
      color: "#1563FF",
    },
    realAccount: {
      name: "Unlimited",
      color: "#1563FF",
    },
  },
  {
    title: "Daily Drawdown",
    phase1: {
      name: "5%",
      color: "#E4622E",
    },
    phase2: {
      name: "5%",
      color: "#E4622E",
    },
    realAccount: {
      name: "5%",
      color: "#E4622E",
    },
  },
  {
    title: "Max Drawdown",
    phase1: {
      name: "12%",
      color: "#E4622E",
    },
    phase2: {
      name: "12%",
      color: "#E4622E",
    },
    realAccount: {
      name: "12%",
      color: "#E4622E",
    },
  },
  {
    title: "Profit Target",
    phase1: {
      name: "8%",
      color: "#E4622E",
    },
    phase2: {
      name: "4%",
      color: "#E4622E",
    },
    realAccount: {
      name: "-",
      color: "#E4622E",
    },
  },
  {
    title: "Minimum Trading Days",
    phase1: {
      name: "5 Days",
      color: "#1563FF",
    },
    phase2: {
      name: "5 Days",
      color: "#1563FF",
    },
    realAccount: {
      name: "-",
      color: "#E4622E",
    },
  },
  {
    title: "100% Refund with first profit Withdrawal",
    phase1: {
      name: "",
      color: "",
    },
    phase2: {
      name: "59 56",
      color: "#1563FF",
    },
    realAccount: {
      name: "",
      color: "",
    },
  },
];
const Rows2 = [
  {
    title: "Trading Period",
    phase1: {
      name: "",
      color: "",
    },
    phaseOne: {
      name: "",
      color: "",
    },
    phase2: {
      name: "10% profit until the next phase",
      color: "#E4622E",
    },
    realAccount: {
      name: "",
      color: "",
    },
  },
  {
    title: "Daily Drawdown",
    phase1: {
      name: "",
      color: "",
    },
    phaseOne: {
      name: "",
      color: "",
    },
    phase2: {
      name: "",
      color: "",
    },
    realAccount: {
      name: "",
      color: "",
    },
  },
  {
    title: "Max Drawdown",
    phase1: {
      name: "5% of the initial balance of the account",
      color: "#E4622E",
    },
    phaseOne: {
      name: "",
      color: "",
    },
    phase2: {
      name: "",
      color: "#E4622E",
    },
    realAccount: {
      name: "",
      color: "",
    },
  },
  {
    title: "Profit Target",
    phase1: {
      name: "162,000$",
      color: "#1563FF",
    },
    phaseOne: {
      name: "405,000$",
      color: "#1563FF",
    },
    phase2: {
      name: "540,000$",
      color: "#1563FF",
    },
    realAccount: {
      name: "1,080,000$",
      color: "#1563FF",
    },
  },
  {
    title: "Minimum Trading Days",
    phase1: {
      name: "99$",
      color: "#1563FF",
    },
    phaseOne: {
      name: "245$",
      color: "#E4622E",
    },
    phase2: {
      name: "485$",
      color: "#1563FF",
    },
    realAccount: {
      name: "970$",
      color: "#E4622E",
    },
  },
  {
    title: "100% Refund with first profit Withdrawal",
    phase1: {
      name: "",
      color: "",
    },
    phaseOne: {
      name: "",
      color: "",
    },
    phase2: {
      name: "59 56",
      color: "#1563FF",
    },
    realAccount: {
      name: "",
      color: "",
    },
  },
];

export default function Challenges() {
  return (
    <>
      {/* first table propiy challenge */}
      <div className="flex flex-col w-full justify-center items-center gap-6 mt-32">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#160637] font-semibold text-xl">
            <span className="text-[#FF521D]">P</span>ro
            <span className="text-[#FF521D]">P</span>iy. Challenges
          </h1>

          <span className="text-[#8989A2] text-sm ">
            Based on your skills, choose your challnege
          </span>
        </div>

        <div className="flex gap-2">
          <button className="text-[#E4622E] border border-[#E4622E] px-6 p-1 rounded-lg text-sm">
            5000
          </button>
          <button className="text-white border border-[#E4622E] bg-[#FF521D] px-6 p-1 rounded-lg text-sm">
            10000
          </button>
          <button className="text-[#E4622E] border border-[#E4622E] px-6 p-1 rounded-lg text-sm">
            25000
          </button>
          <button className="text-[#E4622E] border border-[#E4622E] px-6 p-1 rounded-lg text-sm">
            50000
          </button>
        </div>

        <div className="w-4/6 p-2">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="hover:bg-gray-100">
                <TableHead className="text-[#1563FF]"></TableHead>
                <TableHead className="text-[#1563FF] text-lg tracking-widest">
                  phase 1
                </TableHead>
                <TableHead className="text-[#1563FF] text-lg tracking-widest">
                  phase 2
                </TableHead>
                <TableHead className="text-[#1563FF] text-lg w-20 text-center tracking-widest">
                  Real Account
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Rows1.map((item) => (
                <TableRow key={item.title} className="hover:bg-gray-100">
                  <TableCell className="font-medium text-[#1563FF] w-[350px]">
                    {item.title}
                  </TableCell>

                  <TableCell className={`text-[${item.phase1.color}]`}>
                    {item.phase1.name}
                  </TableCell>

                  <TableCell className={`text-[${item.phase2.color}]`}>
                    {item.phase2.name}
                  </TableCell>

                  <TableCell className={`text-[${item.realAccount.color}]`}>
                    {item.realAccount.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* second table JET JUMP : FAST TRACK */}
      <div className="flex flex-col w-full justify-center items-center gap-6 mt-40">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#160637] font-semibold text-xl">
            JET JUMP <span className="text-[#E4622E]">:</span> FAST TRACK
          </h1>
        </div>

        <div className="w-4/6 p-2">
          <Table className="w-full">
            <TableHeader className="w-full">
              <TableRow className="hover:bg-gray-100 w-full">
                <TableHead className="text-[#1563FF]"></TableHead>
                <TableHead className="text-[#1563FF] text-lg tracking-widest">
                  phase 1
                </TableHead>

                <TableHead className="text-[#1563FF] text-lg tracking-widest">
                  phase 1
                </TableHead>

                <TableHead className="text-[#1563FF] text-lg tracking-widest w-36">
                  phase 2
                </TableHead>

                <TableHead className="text-[#1563FF] text-lg w-20 text-center tracking-widest">
                  Real Account
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="w-full">
              {Rows2.map((item) => (
                <TableRow key={item.title} className="hover:bg-gray-100 w-full">
                  <TableCell className="font-medium text-[#1563FF] text-center w-[300px]">
                    {item.title}
                  </TableCell>

                  <TableCell className={`text-[${item.phase1.color}]`}>
                    {item.phase1.name}
                  </TableCell>

                  <TableCell className={`text-[${item.phaseOne.color}] w-36`}>
                    {item.phaseOne.name}
                  </TableCell>

                  <TableCell className={`text-[${item.phase2.color}]`}>
                    {item.phase2.name}
                  </TableCell>

                  <TableCell className={`text-[${item.realAccount.color}]`}>
                    {item.realAccount.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* challenges cards */}
      <div className="flex flex-col justify-center items-center mt-32 gap-4">
        <div className="flex gap-2 bg-[#F7F1FF] rounded-3xl p-2 px-4">
          <img src="/images/mainIcons/eyeIcon.svg" alt="eyeIcon" />
          <span className="text-[#FF521D]">What’s up ? </span>
        </div>

        <h2 className="text-[#160637] font-semibold text-2xl">
          <span className="text-[#FF521D]">P</span>ro
          <span className="text-[#FF521D]">P</span>iy. Challenges
        </h2>

        <p className="text-[#8989A2]">What we bring to you?</p>

        <div className="flex justify-center items-center gap-16 pt-10 w-full">
          <PropiyChallengesCard
            title="How profitable is Prop Trading"
            img="/images/main/propiyChallenge/tradePhoto1.svg"
          />
          <PropiyChallengesCard
            title="What is Propiy’s Free Challenge and How to Request One?"
            img="/images/main/propiyChallenge/tradePhoto2.svg"
          />
          <PropiyChallengesCard
            title="Everything You Need to Know About Prop Trading"
            img="/images/main/propiyChallenge/tradePhoto3.svg"
          />
        </div>
      </div>
    </>
  );
}
