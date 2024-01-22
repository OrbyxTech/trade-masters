
'use client';

import { ToggleGroup } from "@ark-ui/react"

function SortTicketBy() {
    return (
        <ToggleGroup.Root defaultValue={["a"]} className="flex max-sm:w-full max-sm:flex-col items-center gap-1 bg-secondary dark:bg-emptyBg w-max rounded-lg p-1.5">

            <ToggleGroup.Item
                className="text-xs text-foreground/75 font-normal
[&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                value="a"
            >
                All
            </ToggleGroup.Item>

            <ToggleGroup.Item
                className="text-xs text-foreground/75 font-normal
[&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                value="b"
            >
                New
            </ToggleGroup.Item>

            <ToggleGroup.Item
                className="text-xs text-foreground/75 font-normal
[&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                value="c"
            >
                Answered
            </ToggleGroup.Item>

            <ToggleGroup.Item
                className="text-xs text-foreground/75 font-normal
[&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                value="d"
            >
                Pending
            </ToggleGroup.Item>

            <ToggleGroup.Item
                className="text-xs text-foreground/75 font-normal
[&[data-state='on']]:text-white [&[data-state='on']]:bg-primary rounded-lg py-1.5 px-3"
                value="e"
            >
                Closed
            </ToggleGroup.Item>
        </ToggleGroup.Root>
    )
}

export default SortTicketBy