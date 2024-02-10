import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

export default function Challenges() {
  return (
    <>
      {" "}
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
    </>
  );
}
