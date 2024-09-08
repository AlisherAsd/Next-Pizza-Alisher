import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React from "react";

interface Props {
    className?: string
}

export const Sort_popup: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("inline-flex items-center gap-1 cursor-pointer bg-gray-59 px-5 h-[52px]", className)}>
            <ArrowDown size={16} />
            <b>Сортировка:</b>
            <b className="text-primary">популярное</b>
        </div>
    );
};

export default Sort_popup;