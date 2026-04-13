import type { SortDescriptor } from "@heroui/react"
import { useMemo, useState } from "react"
import type { Password } from "../models/password"




export const useSortTable = (passwords: Password[]) => {

    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "Site",
        direction: "ascending"
    })

    const sortedPasswords = useMemo(() => {
        return [...passwords].sort((a, b) => {
            const col = sortDescriptor.column as keyof Password;
            const first = String(a[col])
            const second = String(b[col])
            let cmp = first.localeCompare(second);

            if (sortDescriptor.direction === 'descending') {
                cmp *= -1;
            }

            return cmp;
        });
    }, [sortDescriptor, passwords])

    return {
        setSortDescriptor, sortedPasswords, sortDescriptor
    }

}
