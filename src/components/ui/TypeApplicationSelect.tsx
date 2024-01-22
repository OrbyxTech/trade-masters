
'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function TypeApplicationSelect() {
    return (
        <Select>

            <SelectTrigger>
                <SelectValue placeholder="Application Type" />
            </SelectTrigger>

            <SelectContent className="max-h-44 overflow-y-auto">
                <SelectItem value="a" className="text-xs font-normal">Second stage account creation</SelectItem>
                <SelectItem value="b" className="text-xs font-normal">Real stage account creation</SelectItem>
                <SelectItem value="c" className="text-xs font-normal">Extend</SelectItem>
                <SelectItem value="d" className="text-xs font-normal">Reset</SelectItem>
            </SelectContent>

        </Select>
    )
}

export default TypeApplicationSelect