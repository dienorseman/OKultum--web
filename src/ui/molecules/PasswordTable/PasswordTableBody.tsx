
import { Checkbox, Table } from "@heroui/react";
import type { PasswordTableProps } from "../../organisms/dashboard/PasswordsTable";


export const PasswordTableBody = ({ passwords }: PasswordTableProps) => {
    return (

        <Table.Body>
            {
                passwords.map(pwd => (
                    <Table.Row key={pwd.id}>
                        <Table.Cell className="pr-0">
                            <Checkbox
                                aria-label={`Select ${pwd.username}`}
                                slot="selection"
                                variant="secondary"
                            >
                                <Checkbox.Control>
                                    <Checkbox.Indicator />
                                </Checkbox.Control>
                            </Checkbox>
                        </Table.Cell>
                        <Table.Cell>{pwd.url}</Table.Cell>
                        <Table.Cell>{pwd.username}</Table.Cell>
                        <Table.Cell>{pwd.password}</Table.Cell>
                        <Table.Cell>{new Date(Number(pwd.createdAt)).toLocaleString()}</Table.Cell>
                        <Table.Cell>{new Date(Number(pwd.lastTimeChanged)).toLocaleString()}</Table.Cell>
                        <Table.Cell>{new Date(Number(pwd.lastTimeUsed)).toLocaleString()}</Table.Cell>
                    </Table.Row>
                ))
            }
        </Table.Body>
    )
}
