
'use client'


import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Calendar as CalendaIcon } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"


function DatePicket() {
    const [date, setDate] = useState<Date>()

    return (
        <Popover>

            <PopoverTrigger asChild>
                <Button variant="outline" className={`flex items-center justify-between gap-x-2 w-full ${!date ? "text-foreground/20" : ""}`}>
                    {
                        date
                            ?
                            format(date, "PPP")
                            :
                            "Pick a Date"
                    }
                    <CalendaIcon width={20} height={20} />
                </Button>
            </PopoverTrigger>

            <PopoverContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
            </PopoverContent>

        </Popover>
    )
}

export default DatePicket