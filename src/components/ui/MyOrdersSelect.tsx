
'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function MyOrdersSelect() {
    return (
        <Select>

            <SelectTrigger>
                <SelectValue placeholder="Select Order Type" />
            </SelectTrigger>

            <SelectContent className="max-h-44 overflow-y-auto">
                <SelectItem value="a" className="text-xs font-normal">All</SelectItem>
                <SelectItem value="b" className="text-xs font-normal">Waiting for Payment</SelectItem>
                <SelectItem value="c" className="text-xs font-normal">Paid</SelectItem>
                <SelectItem value="d" className="text-xs font-normal">UnPaid</SelectItem>
                <SelectItem value="e" className="text-xs font-normal">In Progress</SelectItem>
            </SelectContent>

        </Select>
    )
}

export default MyOrdersSelect