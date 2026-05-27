import { Pagination, Table, type Selection } from "@heroui/react";
import type { Password } from "../../../app/models/password"
import { PasswordTableHeader } from "../../molecules/dashboard/PasswordTable/PasswordTableHeader";
import { useSortTable } from "../../../app/hooks/useSortTable";
import { PasswordTableBody } from "../../molecules/dashboard/PasswordTable/PasswordTableBody";
import { useState } from "react";
import { useTablePagination } from "../../../app/hooks/useTablePagination";

export interface PasswordTableProps {
    passwords: Password[]
}


export const PasswordsTable = ({ passwords }: PasswordTableProps) => {
    const { setSortDescriptor, sortedPasswords, sortDescriptor } = useSortTable(passwords);
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
    const MAX_ROWS = 10;
    const { start, end, paginatedItems, pages, page, setPage, totalPages } = useTablePagination(sortedPasswords, MAX_ROWS);
    return (
        <div className="flex flex-col gap-3 container pr-0 mb-4">
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
                        <PasswordTableBody passwords={paginatedItems} />
                    </Table.Content>
                </Table.ScrollContainer>
                <Table.Footer>
                    <Pagination size="sm">
                        <Pagination.Summary>
                            {start} to {end} of {passwords.length} results
                        </Pagination.Summary>
                        <Pagination.Content>
                            <Pagination.Item>
                                <Pagination.Previous
                                    isDisabled={page === 1}
                                    onPress={() => setPage((p) => Math.max(1, p - 1))}
                                >
                                    <Pagination.PreviousIcon />
                                    Prev
                                </Pagination.Previous>
                            </Pagination.Item>
                            {pages.map((p) => (
                                <Pagination.Item key={p}>
                                    <Pagination.Link isActive={p === page} onPress={() => setPage(p)}>
                                        {p}
                                    </Pagination.Link>
                                </Pagination.Item>
                            ))}
                            <Pagination.Item>
                                <Pagination.Next
                                    isDisabled={page === totalPages}
                                    onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
                                >
                                    Next
                                    <Pagination.NextIcon />
                                </Pagination.Next>
                            </Pagination.Item>
                        </Pagination.Content>
                    </Pagination>
                </Table.Footer>
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


