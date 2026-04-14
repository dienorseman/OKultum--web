import { Button, IconCalendar, Input } from "@heroui/react"
import { Icon } from "@iconify/react";
import { useState } from "react";
import { CopyButton } from "../../atoms/Buttons/CopyButton";

interface PasswordColProps {
    value: string
}

export const PasswordCol = ({ value }: PasswordColProps) => {

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="flex items-center justify-between gap-1">
            {
                !isVisible ?
                    <Input
                        style={{
                            border: 'none',
                            background: 'transparent',
                            borderRadius: 0,
                            boxShadow: 'none'
                        }}
                        type="password"
                        value={value}
                        placeholder="Enter your password"
                        readOnly
                        disabled
                    />
                    :
                    <p>{value}</p>
            }
            <div className="flex items-center justify-center">

                <CopyButton text={value} />
                <Button isIconOnly size="sm" variant="tertiary" onClick={handleClick}>
                    <Icon className="size-4" icon="gravity-ui:eye" />
                </Button>
                <div />
            </div>
        </div>
    )
}
