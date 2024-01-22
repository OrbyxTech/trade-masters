
import Section from "@/components/ui/Section"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table"

function page() {
    return (
        <div>
            <Section
                title="Wallet ( inventory : $0 )"
                showViewAllBtn={false}
            >
                <Alert className="bg-[#743038] text-white font-normal border border-red-500 p-3">
                    <AlertDescription>
                        If you want to recharge your wallet, after paying, do not close the window until you return to the site
                    </AlertDescription>
                </Alert>

                <div className="mt-6">
                    <p className="text-xs text-white font-normal mb-3">Inventory Increase</p>

                    <div className="flex max-sm:flex-col items-center gap-2 max-sm:items-start">
                        <p className="text-xs text-foreground font-normal">Price ( $ )</p>
                        <Input placeholder="Price ( $ )" className="w-full max-w-xs" />
                        <Button size="sm">
                            Request
                        </Button>
                    </div>

                    <div className="my-6 border-t border-t-foreground/30"></div>

                    <p className="text-xs text-white font-normal mb-3">Transactions</p>

                    <Table>

                        <TableHeader>
                            <TableRow>

                                <TableHead>#</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Price($)</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Payment Date</TableHead>

                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow className="text-xs">
                                <TableCell>1</TableCell>
                                <TableCell>Type-1</TableCell>
                                <TableCell>Successful</TableCell>
                                <TableCell>$55</TableCell>
                                <TableCell>
                                    hello world....
                                </TableCell>
                                <TableCell>
                                    Bitcoin
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>2</TableCell>
                                <TableCell>Type-2</TableCell>
                                <TableCell>Successful</TableCell>
                                <TableCell>$390</TableCell>
                                <TableCell>
                                    hello world....
                                </TableCell>
                                <TableCell>
                                    Bitcoin
                                </TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>3</TableCell>
                                <TableCell>Type-11</TableCell>
                                <TableCell>InProgress</TableCell>
                                <TableCell>$145</TableCell>
                                <TableCell>
                                    hello world....
                                </TableCell>
                                <TableCell>
                                    Ethereum
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