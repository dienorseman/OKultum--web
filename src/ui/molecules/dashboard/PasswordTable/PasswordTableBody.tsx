
import { Checkbox, Chip, Table } from "@heroui/react";
import type { PasswordTableProps } from "../../../organisms/dashboard/PasswordsTable";
import { PasswordCol } from "../PasswordCol";


export const PasswordTableBody = ({ passwords }: PasswordTableProps) => {
    const statusColorMap: Record<number, "default" | "danger" | "warning" | "accent" | "success"> = {
        0: "default",
        1: "danger",
        2: "warning",
        3: "default",
        4: "accent",
        5: "success"
    };
    const statusMessageMap: Record<number, "unchecked" | "very weak" | "weak" | "normal" | "strong" | "very strong"> = {
        0: "unchecked",
        1: "very weak",
        2: "weak",
        3: "normal",
        4: "strong",
        5: "very strong"
    }
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
                        <Table.Cell>
                            <PasswordCol value={pwd.password} />
                        </Table.Cell>
                        <Table.Cell>
                            <Chip color={statusColorMap[pwd.securityScore]} size="sm" variant="soft">
                                {statusMessageMap[pwd.securityScore]}
                                {/* {pwd.securityScore} */}
                            </Chip>
                        </Table.Cell>
                        <Table.Cell>{
                            pwd.breaches != undefined ? pwd.breaches
                                :
                                'Not scanned.'
                        }</Table.Cell>
                        <Table.Cell>{new Date(Number(pwd.createdAt)).toLocaleString()}</Table.Cell>
                        <Table.Cell>{new Date(Number(pwd.lastTimeChanged)).toLocaleString()}</Table.Cell>
                        <Table.Cell>{new Date(Number(pwd.lastTimeUsed)).toLocaleString()}</Table.Cell>
                    </Table.Row>
                ))
            }
        </Table.Body>
    )
}
