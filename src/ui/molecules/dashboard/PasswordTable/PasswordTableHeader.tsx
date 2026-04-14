import { Checkbox, Table } from "@heroui/react"
import { SortableColHeader } from "../../../utils/sortTableheader"


export const PasswordTableHeader = () => {
    return (
        <Table.Header>
            <Table.Column className="pr-0">
                <Checkbox aria-label="Select all" slot="selection">
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                </Checkbox>
            </Table.Column>
            <Table.Column allowsSorting isRowHeader id="site">{({ sortDirection }) => (
                <SortableColHeader sortDir={sortDirection}>Site</SortableColHeader>
            )}</Table.Column>

            <Table.Column allowsSorting id="username">
                {({ sortDirection }) => (
                    <SortableColHeader sortDir={sortDirection}>Username</SortableColHeader>
                )}
            </Table.Column>

            <Table.Column allowsSorting id="password">
                {({ sortDirection }) => (
                    <SortableColHeader sortDir={sortDirection}>Password</SortableColHeader>
                )}
            </Table.Column>
            <Table.Column allowsSorting id="securityScore">
                {({ sortDirection }) => (
                    <SortableColHeader sortDir={sortDirection}>
                        Score
                    </SortableColHeader>
                )}
            </Table.Column>
            <Table.Column allowsSorting id="breaches">
                {({ sortDirection }) => (
                    <SortableColHeader sortDir={sortDirection}>
                        Breaches
                    </SortableColHeader>
                )}
            </Table.Column>
            <Table.Column allowsSorting id="createdAt">
                {({ sortDirection }) => (
                    <SortableColHeader sortDir={sortDirection}>
                        Created At
                    </SortableColHeader>
                )}
            </Table.Column>

            <Table.Column allowsSorting id="lastTimeChanged">
                {({ sortDirection }) => (
                    <SortableColHeader sortDir={sortDirection}>
                        Last time changed
                    </SortableColHeader>
                )}
            </Table.Column>

            <Table.Column allowsSorting id="lastTimeUsed">
                {({ sortDirection }) => (
                    <SortableColHeader sortDir={sortDirection}>
                        Last time used
                    </SortableColHeader>
                )}
            </Table.Column>
        </Table.Header>
    )
}
