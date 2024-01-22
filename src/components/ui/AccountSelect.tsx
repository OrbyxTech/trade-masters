
'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function AccountSelect() {
    return (
        <Select>

            <SelectTrigger>
                <SelectValue placeholder="Account Selection" />
            </SelectTrigger>

            <SelectContent className="max-h-44 overflow-y-auto">
                <SelectItem value="a" className="text-xs font-normal">Account - 1</SelectItem>
                <SelectItem value="b" className="text-xs font-normal">Account - 2</SelectItem>
                <SelectItem value="c" className="text-xs font-normal">Accounr - 3</SelectItem>
            </SelectContent>

        </Select>
    )
}

export default AccountSelect