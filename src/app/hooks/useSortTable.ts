import type { SortDescriptor } from "@heroui/react"
import { useMemo, useState } from "react"
import type { Password } from "../models/password"



export const useSortTable = (passwords: Password[]) => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "site",
        direction: "ascending"
    });

    const sortedPasswords = useMemo(() => {
        return [...passwords].sort((a, b) => {
            const col = sortDescriptor.column as keyof Password;
            let aVal = a[col];
            let bVal = b[col];

            if (aVal == null) aVal = '';
            if (bVal == null) bVal = '';

            let cmp = 0;

            const aIsNum = typeof aVal === 'number' || (typeof aVal === 'string' && !isNaN(Number(aVal)));
            const bIsNum = typeof bVal === 'number' || (typeof bVal === 'string' && !isNaN(Number(bVal)));

            if (aIsNum && bIsNum) {
                cmp = Number(aVal) - Number(bVal);
            } else if (aIsNum || bIsNum) {
                cmp = aIsNum ? -1 : 1;
            } else {
                cmp = String(aVal).localeCompare(String(bVal));
            }

            if (sortDescriptor.direction === 'descending') {
                cmp *= -1;
            }
            return cmp;
        });
    }, [sortDescriptor, passwords]);

    return { setSortDescriptor, sortedPasswords, sortDescriptor };
};