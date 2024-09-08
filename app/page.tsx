import React from "react";
import { Container, Filters, Title, Top_bar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>
      <Top_bar />

      <Container className="pb-14">
        <div className="flex gap-[60px]">
            
            <div className="w-[250px]">
              <Filters />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-16">Список товаров</div>
            </div>
        </div>
      </Container>
    </>
  );
}
