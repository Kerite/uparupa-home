"use client";
import Link from "next/link";
import React from "react";
import { HouseIcon } from "@/components/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/components/icons/breadcrumb/users-icon";
import { TableWrapperForKillsRanking } from "./table";
export const KillsRanking = () => {
    return (
        <div className="my-14 lg:px-6 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
            <h3 className="text-xl font-semibold">战斗！爽！</h3>
            <div className="max-w-[95rem] mx-auto w-full">
                <TableWrapperForKillsRanking/>
            </div>
        </div>
    );
};
