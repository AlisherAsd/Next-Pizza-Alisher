import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import React from "react";
import { Container } from "./Container";
import Categories from "./Categories";
import Sort_popup from "./Sort-popup";

interface Props {
    className?: string
}

export const Top_bar: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10", className)}>
            <Container>
                <Categories />
                <Sort_popup />
            </Container>
        </div>
    );
};

export default Top_bar;