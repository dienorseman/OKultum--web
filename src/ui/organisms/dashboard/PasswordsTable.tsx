import { Table, type Selection } from "@heroui/react";
import type { Password } from "../../../app/models/password"
import { PasswordTableHeader } from "../../molecules/PasswordTable/PasswordTableHeader";
import { useSortTable } from "../../../app/hooks/useSortTable";
import { PasswordTableBody } from "../../molecules/PasswordTable/PasswordTableBody";
import { useState } from "react";

export interface PasswordTableProps {
    passwords: Password[]
}


export const PasswordsTable = ({ passwords }: PasswordTableProps) => {
    const testPass = passwords.slice(1, 10)
    const { setSortDescriptor, sortedPasswords, sortDescriptor } = useSortTable(testPass);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
    return (
        <div className="flex flex-col gap-3 container pr-0">
            <Table variant="primary">
                <Table.ScrollContainer aria-label="passwords" className="min-w-150">
                    <Table.Content
                        aria-label="sortable table"
                        sortDescriptor={sortDescriptor}
                        onSortChange={setSortDescriptor}
                        selectedKeys={selectedKeys}
                        selectionMode="multiple"
                        onSelectionChange={setSelectedKeys}
                    >
                        <PasswordTableHeader />
                        <PasswordTableBody passwords={sortedPasswords} />
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
            {/* <p className="text-sm text-muted">
                Selected: {" "}
                <span className="font-medium">
                    {
                        selectedKeys === 'all'
                            ? "All"
                            : selectedKeys.size > 0
                                ? Array.from(selectedKeys).join(", ")
                                : "None"
                    }

                </span>
            </p> */}
        </div>
    )
}


