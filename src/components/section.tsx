import { api } from "@/utils/api";
import { CardItem } from "./card-item"
import { FixedCardItem } from "./fixed-card-item"
import { useState } from "react";

export const Section = () => {

    return (
        <>
        <section className="max-w-6xl mx-auto">
            <div className="mt-3 md:-mt-5 ">
                <h3 className="ml-3 text-2xl text-[#dfdfe4] font-bold mb-4 lg:ml-0 lg:border-b-2 lg:inline-block lg:border-[#798189]">Fixados</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 lg:px-0">
                    <FixedCardItem />
                </div>
            </div>

            <div className="mt-8 ">
                <h3 className="ml-3 text-2xl text-[#dfdfe4] font-bold mb-4 lg:ml-0 lg:border-b-2 lg:inline-block lg:border-[#798189]">Projetos</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 lg:px-0">
                    <CardItem />
                </div>
            </div>
        </section>
        </>
    )
}