
import AccountSelect from "@/components/ui/AccountSelect"
import Section from "@/components/ui/Section"
import TypeApplicationSelect from "@/components/ui/TypeApplicationSelect"
import { Table, TableHeader, TableHead, TableRow, TableCell, TableBody } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

function page() {
    return (
        <div className="flex flex-col gap-y-3">
            <Section
                title="Request"
                showViewAllBtn={false}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">type of application</p>
                        <TypeApplicationSelect />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">account selection</p>
                        <AccountSelect />
                    </div>

                    <div>
                        <p className="text-xs text-foreground font-normal mb-3">message text (optional)</p>

                        <Textarea className="text-xs" placeholder="Type your message here"></Textarea>
                    </div>
                </div>
            </Section>

            <Section
                showViewAllBtn={false}
                title="List of Requests"
            >
                <Table>

                    <TableHeader>
                        <TableRow>

                            <TableHead>Request Title</TableHead>
                            <TableHead>Account Number</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Time of Submision</TableHead>
                            <TableHead>Text</TableHead>
                            <TableHead>Description</TableHead>

                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        <TableRow className="text-xs">

                            <TableCell>request-1</TableCell>
                            <TableCell>102</TableCell>
                            <TableCell>In Progress</TableCell>
                            <TableCell>2023/10/09</TableCell>
                            <TableCell>hello world ...</TableCell>
                            <TableCell>hello world ...</TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </Section>
        </div>
    )
}

export default page