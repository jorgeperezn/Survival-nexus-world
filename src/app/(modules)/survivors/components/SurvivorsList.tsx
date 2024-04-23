"use client";

import { useState } from "react";

import { NewSurvivorModal } from "./NewSurvivor";
import { Table } from "@/app/components/table";
import { Badge } from "@/app/components/badge";
import { Avatar } from "@/app/components/avatar";

import { Survivor } from "@/types";
import { InformationCircleIcon } from "@heroicons/react/16/solid";

interface SurvivorListProps {
  survivors: Survivor[];
}

export const SurvivorList = ({ survivors }: SurvivorListProps) => {
  const [allSurvivors, setAllSurvivors] = useState<Survivor[]>(survivors);
  const [openNewSurvivor, setOpenNewSurvivor] = useState<boolean>(false);

  const handleNewSurvivor = (newSurvivor: Survivor) => {
    setAllSurvivors((prevSurvivors) => [...prevSurvivors, newSurvivor]);
  };

  const healthySurvivorsCount = allSurvivors.filter(
    (survivor) => !survivor.infected
  ).length;

  const survivorsHeaders = [
    { key: 1, dataIndex: "name", label: "Name" },
    { key: 2, dataIndex: "status", label: "Status" },
    { key: 3, dataIndex: "dateAdded", label: "Date Added" },
    { key: 4, dataIndex: "action", label: "", className: "text-right" },
  ];

  const survivorsRows = allSurvivors.map((survivor) => {
    return {
      key: survivor.name,
      name: (
        <>
          <Avatar initials={survivor.name} />
          <span className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {survivor.name}
          </span>
        </>
      ),
      status: survivor.infected ? (
        <Badge type="danger">Infected</Badge>
      ) : (
        <Badge type="success">Healthy</Badge>
      ),
      dateAdded: survivor.dateAdded.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      action: (
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Request Items
        </button>
      ),
    };
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold dark:text-white">
            List of survivors
          </h2>
          <div className="flex items-center gap-2">
            <p>You have {healthySurvivorsCount} healthy survivors</p>
            <InformationCircleIcon className="h-4 w-4" />
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpenNewSurvivor(true)}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Add Survivor
        </button>
      </div>

      <Table headers={survivorsHeaders} rows={survivorsRows} />

      {openNewSurvivor && (
        <NewSurvivorModal
          onCloseNewSurvivor={() => setOpenNewSurvivor(false)}
          handleNewSurvivor={handleNewSurvivor}
        />
      )}
    </div>
  );
};
