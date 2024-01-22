
'use client'

import Section from "./Section"
import dynamic from "next/dynamic"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToggleGroup } from "@ark-ui/react"
import { Button } from "./button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table"
// import TermsAndConditions from "./TermsAndConditions"
const TermsAndConditions = dynamic(() => import("./TermsAndConditions"))
import { Checkbox } from "./checkbox"
import { Input } from "./input"

function StartNewChallenge() {
    return (
        <Section
            title="Start a new challenge"
            showViewAllBtn={false}
        >
            <Tabs defaultValue="two-step-challenge" className="w-full">
                <TabsList className="px-2 mx-auto w-max flex">
                    <TabsTrigger
                        value="two-step-challenge"
                        className="[&[data-state='active']]:!bg-primary [&[data-state='active']]:!text-white text-xs font-normal"
                    >
                        2 Step Challenge
                    </TabsTrigger>

                    <TabsTrigger
                        value="jest-jump-fast-track"
                        className="[&[data-state='active']]:!bg-primary [&[data-state='active']]:!text-white text-xs font-normal"
                    >
                        Jet Jump: Fats Track
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="two-step-challenge">
                    <div className="flex flex-col gap-y-10">

                        <div>
                            <p className="text-sm text-foreground font-normal mb-3">Account Balance</p>
                            <ToggleGroup.Root defaultValue={["a"]} className="flex items-center gap-x-1 bg-secondary dark:bg-emptyBg w-max rounded-lg p-1.5">

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="a"
                                >
                                    5000
                                </ToggleGroup.Item>

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="b"
                                >
                                    10000
                                </ToggleGroup.Item>

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="c"
                                >
                                    25000
                                </ToggleGroup.Item>

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="d"
                                >
                                    50000
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>

                        <div>
                            <p className="text-sm text-foreground font-normal mb-3">Select Server</p>
                            <ToggleGroup.Root defaultValue={["a"]} className="flex max-md:flex-col items-center gap-x-1 bg-secondary dark:bg-emptyBg w-max rounded-lg p-1.5">

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="a"
                                >
                                    OrbyxridgeCapitalMarket
                                </ToggleGroup.Item>

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="b"
                                >
                                    RoboForex
                                </ToggleGroup.Item>

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="c"
                                >
                                    ForexTimeFXTM
                                </ToggleGroup.Item>

                                <ToggleGroup.Item
                                    className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                    value="d"
                                >
                                    ForexTime
                                </ToggleGroup.Item>
                            </ToggleGroup.Root>
                        </div>

                        <div>
                            <p className="text-sm text-foreground font-normal mb-3">Platform Leverage</p>
                            <div className="flex items-center gap-x-2">
                                <Button size="sm" className="text-xs">
                                    MT5
                                </Button>

                                <Button size="sm" className="text-xs">
                                    100
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Table>
                                <TableHeader>
                                    <TableRow className="hover:bg-transparent">
                                        <TableHead className="w-48"></TableHead>
                                        <TableHead>Phase One</TableHead>
                                        <TableHead>Phase Two</TableHead>
                                        <TableHead>Real Account</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody
                                    className="[&_tr:nth-child(odd)]:bg-secondary [&_tr:nth-child(odd)]:dark:bg-emptyBg [&_tr:nth-child(even)]:hover:bg-transparent
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
                </TabsContent>

                <TabsContent value="jest-jump-fast-track">
                    <div>
                        <p className="text-sm text-foreground font-normal mb-3">Account Balance</p>
                        <ToggleGroup.Root defaultValue={["a"]} className="flex items-center gap-x-1 bg-secondary dark:bg-emptyBg w-max rounded-lg p-1.5">
                            <ToggleGroup.Item
                                className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                value="a"
                            >
                                2000
                            </ToggleGroup.Item>

                            <ToggleGroup.Item
                                className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                value="b"
                            >
                                5000
                            </ToggleGroup.Item>

                            <ToggleGroup.Item
                                className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                value="c"
                            >
                                10000
                            </ToggleGroup.Item>

                            <ToggleGroup.Item
                                className="text-xs text-foreground/75 font-normal
                            [&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                                value="d"
                            >
                                20000
                            </ToggleGroup.Item>
                        </ToggleGroup.Root>
                    </div>
                </TabsContent>
            </Tabs>

            <div className="flex flex-col gap-y-10 mt-10">
                <div>
                    <TermsAndConditions />
                </div>

                <div className="flex items-center gap-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="cursor-pointer text-xs text-foreground font-normal">I accept the terms and conditions</label>
                </div>

                <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4">
                    <p className="text-sm text-foreground font-medium p-2">Specifications of the Challenge</p>

                    <p className="text-xs text-foreground/80 font-normal mt-3">
                        Server :&nbsp;
                        <span className="text-xs text-foreground font-medium">Orbyxridge</span>
                    </p>
                    <p className="text-xs text-foreground/80 font-normal mt-1.5">
                        Balance :&nbsp;
                        <span className="text-xs text-foreground font-medium">5000</span>
                    </p>
                    <p className="text-xs text-foreground/80 font-normal mt-1.5">
                        Platform :&nbsp;
                        <span className="text-xs text-foreground font-medium">MT5</span>
                    </p>
                    <p className="text-xs text-foreground/80 font-normal mt-1.5">
                        Leverage :&nbsp;
                        <span className="text-xs text-foreground font-medium">100</span>
                    </p>
                </div>

                <div>
                    <p className="text-sm text-foreground font-normal mb-3">Method of Payment</p>

                    <div className="flex items-center gap-x-3 justify-center">
                        <p className="border border-dashed border-primary p-4 text-xs text-foreground font-normal rounded-xl leading-5">
                            <span className="text-xs text-primary font-normal">5% Discount</span>
                            &nbsp;
                            with chooding<br />Orbyxridge Capital Markets Server.
                        </p>

                        <p className="border text-center border-primary p-4 text-xs text-foreground font-normal rounded-xl leading-5">
                            <span className="text-sm text-sky-500 font-normal">Now</span><br />
                            Payments
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-2 gap-y-3 max-sm:flex-col">
                        <Input className="w-full max-w-xs text-xs" placeholder="Enter Discount Code" />
                        <Button size="sm">Apply Discount Code</Button>
                    </div>

                    <div className="flex flex-col gap-y-3 mt-10 items-center justify-center">
                        <p className="text-sm text-primary font-medium">56$</p>
                        <Button size="sm">
                            Payment
                        </Button>
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default StartNewChallenge