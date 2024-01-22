import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BannerCard1 from "./components/BannerCard1";
// import Slider from "./components/Slider";
import Card2 from "./components/Card2";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("./components/Slider"), { ssr: false })
import { Quicksand } from "next/font/google";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Footer from "./components/Footer";
const quicksand = Quicksand({ subsets: ["latin"], weight: "500" })
const quicksand300 = Quicksand({ subsets: ["latin"], weight: "300" })


export default function Home() {
  return (
    <div>

      <div className="w-8/12 mx-auto mt-36">
        <BannerCard1 />
      </div>

      <div className="px-4 mt-36">
        <Slider
          title={<p className="text-inherit fill-inherit">
            why you should choose&nbsp;
            <Image
              alt=""
              width={90}
              height={90}
              src="/ProPiy..png"
              className="w-20 h-auto inline"
            />
          </p>}
          dontOverrideTitle={true}
        >
          <div className="keen-slider__slide grid ml-28">
            <div className="w-[22rem]">
              <Card2 img="/flash.png" title="Analyse your Challenge (Real-Time)" />
            </div>
          </div>

          <div className="keen-slider__slide grid ">
            <div className="w-[22rem]">
              <Card2 img="/verify.png" title="trusted in community" />
            </div>
          </div>

          <div className="keen-slider__slide grid">
            <div className="w-[22rem]">
              <Card2 img="/verify.png" title="Profit Withdrawal" />
            </div>
          </div>

          <div className="keen-slider__slide grid">
            <div className="w-[22rem]">
              <Card2 img="/flash.png" title="we're the best prop-trading platform you ever gonna see" />
            </div>
          </div>
        </Slider>
      </div>


      <div className="px-4 mt-36 relative z-10">
        <div className="pl-28">
          <p className={`${quicksand.className} text-white text-2xl`}>
            <Image
              alt=""
              width={90}
              height={90}
              src="/ProPiy..png"
              className="w-20 h-auto inline"
            /> Challenges
          </p>

          <div className="bg-clip-text bg-gradient-to-r from-[#02FF67] to-[#F00090] to-40% mt-3">
            <p className={`${quicksand.className} text-transparent text-xs uppercase`}>
              Based on your skilles, choose your challenhge
            </p>
          </div>

        </div>

        <div className="flex items-center gap-x-3 justify-center mt-8">
          <Button size="sm" className="text-xs" variant="propibtn">
            5000
          </Button>
          <Button size="sm" className="text-xs" variant="propibtn">
            10000
          </Button>
          <Button size="sm" className="text-xs" variant="propibtn">
            25000
          </Button>
          <Button size="sm" className="text-xs" variant="propibtn">
            50000
          </Button>
        </div>

        <Image
          alt=""
          width={628}
          height={526}
          src="/ellipse-2.png"
          className="absolute -top-12 right-0 w-80 h-auto -z-10"
        />

        <div className="relative p-2">
          <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
          <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
          <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
          <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>
          <Table className="mt-6">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-80"></TableHead>
                <TableHead>Phase One</TableHead>
                <TableHead>Phase Two</TableHead>
                <TableHead>Real Account</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody
              className="[&_tr:nth-child(odd)]:bg-secondary [&_tr:nth-child(odd)]:bg-gradient-to-r
            [&_tr:nth-child(odd)]:from-[#02FF6780] [&_tr:nth-child(odd)]:to-[#F0009080]
            [&_tr:nth-child(even)]:hover:bg-transparent
            [&_tr_td:nth-child(1)]:rounded-l-xl [&_tr_td:last-child]:rounded-r-xl
            [&_tr]:border-none"
            >
              <TableRow>
                <TableCell className="text-xs tracking-wide">Traiding Period</TableCell>
                <TableCell className="text-xs tracking-wide">Unlimited</TableCell>
                <TableCell className="text-xs tracking-wide">Unlimited</TableCell>
                <TableCell className="text-xs tracking-wide">Unlimited</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Daily Drawdown</TableCell>
                <TableCell className="text-xs tracking-wide">5%</TableCell>
                <TableCell className="text-xs tracking-wide">5%</TableCell>
                <TableCell className="text-xs tracking-wide">5%</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Max Drawdown</TableCell>
                <TableCell className="text-xs tracking-wide">12%</TableCell>
                <TableCell className="text-xs tracking-wide">12%</TableCell>
                <TableCell className="text-xs tracking-wide">12%</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Profit Target</TableCell>
                <TableCell className="text-xs tracking-wide">8%</TableCell>
                <TableCell className="text-xs tracking-wide">4%</TableCell>
                <TableCell className="text-xs tracking-wide">-</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Maximum Trading Days</TableCell>
                <TableCell className="text-xs tracking-wide">5 Day</TableCell>
                <TableCell className="text-xs tracking-wide">5 Day</TableCell>
                <TableCell className="text-xs tracking-wide">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="px-4 mt-36 relative z-10">

        <div className="pl-28">
          <div className="bg-clip-text bg-gradient-to-r from-[#02FF67] from-50% to-60% to-[#FC0298] flex items-center justify-center">
            <p className={`${quicksand.className} text-white text-2xl uppercase`}>
              Jet Jump :
            </p>&nbsp;
            <p className={`${quicksand.className} text-transparent text-2xl uppercase`}>
              fast track
            </p>
          </div>
        </div>

        <Image
          alt=""
          width={628}
          height={526}
          src="/ellipse-3.png"
          className="absolute -top-36 left-0 w-80 h-auto -z-10"
        />

        <div className="relative p-2">
          <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
          <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
          <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
          <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>
          <Table className="mt-6">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-80"></TableHead>
                <TableHead>Phase One</TableHead>
                <TableHead>Phase Two</TableHead>
                <TableHead>Real Account</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody
              className="[&_tr:nth-child(odd)]:bg-secondary [&_tr:nth-child(odd)]:bg-gradient-to-r
            [&_tr:nth-child(odd)]:from-[#02FF6780] [&_tr:nth-child(odd)]:to-[#F0009080]
            [&_tr:nth-child(even)]:hover:bg-transparent
            [&_tr_td:nth-child(1)]:rounded-l-xl [&_tr_td:last-child]:rounded-r-xl
            [&_tr]:border-none"
            >
              <TableRow>
                <TableCell className="text-xs tracking-wide">Traiding Period</TableCell>
                <TableCell className="text-xs tracking-wide">Unlimited</TableCell>
                <TableCell className="text-xs tracking-wide">Unlimited</TableCell>
                <TableCell className="text-xs tracking-wide">Unlimited</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Daily Drawdown</TableCell>
                <TableCell className="text-xs tracking-wide">5%</TableCell>
                <TableCell className="text-xs tracking-wide">5%</TableCell>
                <TableCell className="text-xs tracking-wide">5%</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Max Drawdown</TableCell>
                <TableCell className="text-xs tracking-wide">12%</TableCell>
                <TableCell className="text-xs tracking-wide">12%</TableCell>
                <TableCell className="text-xs tracking-wide">12%</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Profit Target</TableCell>
                <TableCell className="text-xs tracking-wide">8%</TableCell>
                <TableCell className="text-xs tracking-wide">4%</TableCell>
                <TableCell className="text-xs tracking-wide">-</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-xs tracking-wide">Maximum Trading Days</TableCell>
                <TableCell className="text-xs tracking-wide">5 Day</TableCell>
                <TableCell className="text-xs tracking-wide">5 Day</TableCell>
                <TableCell className="text-xs tracking-wide">-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="px-4 mt-36">

        <Slider
          title={<p className="text-inherit fill-inherit">
            <Image
              alt=""
              width={90}
              height={90}
              src="/ProPiy..png"
              className="w-20 h-auto inline"
            /> News
            <div className="mt-3 bg-clip-text bg-gradient-to-r from-[#02FF67] to-[#F00090]">
              <p className="text-transparent text-sm uppercase tracking-wider">what we bring to you ?</p>
            </div>
          </p>}
          dontOverrideTitle={true}
        >
          <div className="keen-slider__slide grid ml-28">
            <div className="w-[22rem]">
              <Card3
                id="102"
                title="What is Propiy’s Free Challenge and How to Request One?"
                img="/blog-post-thumbnail-1.png"
                comments={302}
                date="2023/04/07"
              />
            </div>
          </div>

          <div className="keen-slider__slide grid ">
            <div className="w-[22rem]">
              <Card3
                id="102"
                title="Everything You Need to Know About Prop Trading"
                img="/blog-post-thumbnail-2.png"
                comments={302}
                date="2023/04/07"
              />
            </div>
          </div>

          <div className="keen-slider__slide grid">
            <div className="w-[22rem]">
              <Card3
                id="102"
                title="What is Propiy’s Free Challenge and How to Request One?"
                img="/blog-post-thumbnail-1.png"
                comments={302}
                date="2023/04/07"
              />
            </div>
          </div>

          <div className="keen-slider__slide grid">
            <div className="w-[22rem]">
              <Card3
                id="102"
                title="Everything You Need to Know About Prop Trading"
                img="/blog-post-thumbnail-2.png"
                comments={302}
                date="2023/04/07"
              />
            </div>
          </div>
        </Slider>

      </div>

      <div className="mt-36 px-4 w-full place-items-center py-10">

        <div className="grid grid-cols-2 gap-4 place-items-center relative z-10">

          <Image
            alt=""
            width={628}
            height={526}
            src="/ellipse-3.png"
            className="absolute -top-10 left-0 w-72 h-auto -z-10"
          />

          <div className="w-full">

            <div className="p-3 grid place-items-center h-full">

              <div className="relative p-3">
                <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
                <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
                <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
                <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>

                <p className={`${quicksand300.className} text-white text-center leading-6 tracking-wide max-w-[40ch] uppercase`}>
                  Receive a capital of up to one million dollars and start trading! If you intend to engage in financial markets and do not have the required capital or prefer not to risk your own funds, Propy provides you with this capital opportunity.
                </p>
              </div>
            </div>

          </div>

          <div className="w-full max-w-xs">
            <Card4
              img="/dollars.png"
              title="Upto"
              value="1 million"
              subTitle="dollar"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 place-items-center mt-20 relative z-10">

          <Image
            alt=""
            width={628}
            height={526}
            src="/ellipse-2.png"
            className="absolute -top-4 right-0 w-52 h-auto -z-10"
          />

          <div className="w-full max-w-xs">
            <Card4
              img="/fllowers.png"
              title="Upto"
              value="90%"
              subTitle="profit share"
            />
          </div>

          <div className="w-full">
            <div className="p-3 grid place-items-center h-full">

              <div className="relative p-3">
                <div className="absolute top-0 left-0 w-7 aspect-square border-t-2 border-l-2 border-white/90 rounded-tl"></div>
                <div className="absolute bottom-0 left-0 w-7 aspect-square border-b-2 border-l-2 border-white/90 rounded-bl"></div>
                <div className="absolute top-0 right-0 w-7 aspect-square border-r-2 border-t-2 border-white/90 rounded-tr"></div>
                <div className="absolute bottom-0 right-0 w-7 aspect-square border-r-2 border-b-2 border-white/90 rounded-br"></div>

                <p className={`${quicksand300.className} text-white text-center leading-6 tracking-wide max-w-[40ch] uppercase`}>
                  All you need to do is prove your skills in two steps, and after that, for any profits you earn in the account, you can receive up to 90% of the profit amount!
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="mt-36">
        <Footer />
      </div>

    </div>
  )
}
