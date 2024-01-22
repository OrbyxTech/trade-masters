import Section from "@/components/ui/Section"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { BadgeInfo } from "lucide-react"

function page() {
    return (
        <div>
            <Section
                title="Profit Withdrawal"
                showViewAllBtn={false}
            >

                <Alert className="border border-sky-500 bg-sky-500/20 mt-6">
                    <AlertDescription className="text-xs text-foreground flex items-center gap-x-3">
                        <div className="text-foreground/80 dark:text-white">
                            <BadgeInfo width={24} height={24} />
                        </div>
                        After withdraw, your new account will be visible in My Challenge section and also you can see your Certificate in its own section on the menu.
                    </AlertDescription>
                </Alert>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Type</p>
                        <Input className="text-xs" placeholder="Enter Type" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Your Wallet Address</p>
                        <Input className="text-xs" placeholder="Enter Your Wallet Address" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Account Number</p>
                        <Input className="text-xs" placeholder="Enter Your Account Number" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">All Profit</p>
                        <Input className="text-xs" placeholder="$0" />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Your Profit Split</p>
                        <Input className="text-xs" placeholder="$0" />
                    </div>

                    <div></div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">Description ( optional )</p>
                        <Textarea className="text-xs" placeholder="Enter Your Account Number"></Textarea>
                    </div>

                </div>


                <div className="flex items-center gap-x-2 mt-12">
                    <Checkbox id="confirm" />
                    <label htmlFor="confirm" className="text-xs text-foreground font-normal cursor-pointer">
                        I confirm my wallet address and my interest payments will be deposited to this address. (Be sure to check your wallet address again before sending the withdrawal request, and if you need to change it, please register a ticket. Otherwise, Propy will not be held responsible.)
                    </label>
                </div>

                <Button size="sm" className="text-xs mt-6">
                    Request
                </Button>

                <div className="mt-12">
                    <p className="text-xs text-foreground font-medium mb-3">Withdrawal History</p>

                    <Table>

                        <TableHeader>
                            <TableRow>

                                <TableHead>Time and Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Account Number</TableHead>
                                <TableHead>Your Profit</TableHead>
                                <TableHead>Description</TableHead>

                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow className="text-xs">
                                <TableCell>10:44 / 2023/7/03</TableCell>
                                <TableCell>Success</TableCell>
                                <TableCell>301</TableCell>
                                <TableCell>$59</TableCell>
                                <TableCell>hello world ...</TableCell>
                            </TableRow>

                            <TableRow className="text-xs">
                                <TableCell>12:44 / 2023/8/10</TableCell>
                                <TableCell>Success</TableCell>
                                <TableCell>390</TableCell>
                                <TableCell>$90</TableCell>
                                <TableCell>hello world ...</TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>
                </div>

            </Section>

        </div>
    )
}

export default page