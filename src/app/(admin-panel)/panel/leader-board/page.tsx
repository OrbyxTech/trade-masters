import Card4 from "@/components/ui/Card4"
import Section from "@/components/ui/Section"
import { Table, TableHeader, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table"
import Image from "next/image"

function page() {
    return (
        <div className="flex flex-col gap-y-3">
            <Section
                title="Leaderboard"
                subTitle="Get familiar with the with the most successful Prop-Traders"
                showViewAllBtn={false}
            >

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card4
                        img1="/iran.png"
                        img2="/number-1.svg"
                        title="Erfan"
                        text1="Profit"
                        text2="$7,936.00"
                        text3="Equity"
                        text4="$5,987,9273.00"
                    />

                    <Card4
                        img1="/iran.png"
                        img2="/number-2.svg"
                        title="Ali"
                        text1="Profit"
                        text2="$7,936.00"
                        text3="Equity"
                        text4="$5,987,9273.00"
                    />

                    <Card4
                        img1="/iran.png"
                        img2="/number-3.svg"
                        title="Reza"
                        text1="Profit"
                        text2="$7,936.00"
                        text3="Equity"
                        text4="$5,987,9273.00"
                    />
                </div>

                <div className="mt-6 bg-secondary dark:bg-emptyBg rounded-xl">
                    <Table>

                        <TableHeader>
                            <TableRow>

                                <TableHead>Tank</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Profit</TableHead>
                                <TableHead>Equity</TableHead>
                                <TableHead>Country</TableHead>

                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow className="text-xs">
                                <TableCell>4</TableCell>
                                <TableCell>Hassan</TableCell>
                                <TableCell>$4,229.00</TableCell>
                                <TableCell>$ 28,000.00</TableCell>
                                <TableCell>
                                    <div className="w-7 relative aspect-square">
                                        <Image alt="" src="/iran.png" fill />
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>20</TableCell>
                                <TableCell>Reza</TableCell>
                                <TableCell>$4,229.00</TableCell>
                                <TableCell>$ 28,000.00</TableCell>
                                <TableCell>
                                    <div className="w-7 relative aspect-square">
                                        <Image alt="" src="/iran.png" fill />
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>109</TableCell>
                                <TableCell>Ali</TableCell>
                                <TableCell>$4,229.00</TableCell>
                                <TableCell>$ 28,000.00</TableCell>
                                <TableCell>
                                    <div className="w-7 relative aspect-square">
                                        <Image alt="" src="/iran.png" fill />
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>52</TableCell>
                                <TableCell>Mohammad</TableCell>
                                <TableCell>$4,229.00</TableCell>
                                <TableCell>$ 28,000.00</TableCell>
                                <TableCell>
                                    <div className="w-7 relative aspect-square">
                                        <Image alt="" src="/iran.png" fill />
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>31</TableCell>
                                <TableCell>Fateme</TableCell>
                                <TableCell>$4,229.00</TableCell>
                                <TableCell>$ 28,000.00</TableCell>
                                <TableCell>
                                    <div className="w-7 relative aspect-square">
                                        <Image alt="" src="/iran.png" fill />
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>49</TableCell>
                                <TableCell>Pooria</TableCell>
                                <TableCell>$4,229.00</TableCell>
                                <TableCell>$ 28,000.00</TableCell>
                                <TableCell>
                                    <div className="w-7 relative aspect-square">
                                        <Image alt="" src="/iran.png" fill />
                                    </div>
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>41</TableCell>
                                <TableCell>Sara</TableCell>
                                <TableCell>$4,229.00</TableCell>
                                <TableCell>$ 28,000.00</TableCell>
                                <TableCell>
                                    <div className="w-7 relative aspect-square">
                                        <Image alt="" src="/iran.png" fill />
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>
                </div>

            </Section>
        </div>
    )
}

export default page