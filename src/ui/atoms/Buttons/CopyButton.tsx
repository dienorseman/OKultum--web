import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CopyButtonProps {
    text: string
}

export const CopyButton = ({ text }: CopyButtonProps) => {

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    return (
        <Button isIconOnly size="sm" variant="ghost" onClick={copyToClipboard}>
            <Icon className="size-4 text-muted" icon="gravity-ui:copy" />
        </Button>
    )
}
