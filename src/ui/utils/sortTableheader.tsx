
import {  cn } from "@heroui/react";
import { Icon } from '@iconify/react';

export const SortableColHeader = ({ children, sortDir }: { children: React.ReactNode, sortDir?: "ascending" | "descending" }) => {
    return (
        <span className="flex items-center justify-between">
            {children}
            {!!sortDir && (
                <Icon
                    icon="gravity-ui:chevron-up"
                    className={cn(
                        "size-3 transform transition-transform duration-100 ease-out",
                        sortDir === 'descending' ? "rotate-180" : '',
                    )}
                />
            )}
        </span>
    )
}
