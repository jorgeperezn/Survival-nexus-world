"use client";

import { useState } from "react";

import { RequestItem } from "./RequestItem";
import { Table } from "@/app/components/table";
import { Avatar } from "@/app/components/avatar";

import { InventoryItem, Item, Survivor } from "@/types";
import { InformationCircleIcon } from "@heroicons/react/16/solid";

interface InventoryListProps {
  survivors: Survivor[];
  items: Item[];
}

export const InventoryList = (props: InventoryListProps) => {
  const { survivors, items } = props;

  const [survivor, setSurvivor] = useState<Survivor | null>(null);
  const [openRequestItem, setOpenRequestItem] = useState<boolean>(false);

  const onRequestItem = (survivor: Survivor) => {
    setSurvivor(survivor);
    setOpenRequestItem(true);
  };

  const totalItems = survivors.reduce(
    (total, survivor) =>
      total +
      survivor.inventory.reduce(
        (subtotal, item) => subtotal + item.quantity,
        0
      ),
    0
  );

  const formatInventoryItems = (inventory: InventoryItem[]) => {
    return inventory
      .map((item) => {
        const matchedItem = items.find((el) => el.id === item.itemId);
        return matchedItem ? `${item.quantity} ${matchedItem.name}` : "";
      })
      .join(", ");
  };

  const inventoryHeaders = [
    { key: 1, dataIndex: "name", label: "Name" },
    { key: 2, dataIndex: "inventories", label: "Inventories" },
    { key: 3, dataIndex: "action", label: "", className: "text-right" },
  ];

  const inventoryRows = survivors.map((survivor) => ({
    key: survivor.name,
    name: (
      <>
        <Avatar initials={survivor.name} />
        <span className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {survivor.name}
        </span>
      </>
    ),
    inventories: formatInventoryItems(survivor.inventory),
    action: (
      <button
        type="button"
        onClick={() => onRequestItem(survivor)}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Request Items
      </button>
    ),
  }));

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold dark:text-white">
          List of Survivors inventories
        </h2>
        <div className="flex items-center gap-2">
          <p>You have {totalItems} inventories logged</p>
          <InformationCircleIcon className="h-4 w-4" />
        </div>
      </div>

      <Table headers={inventoryHeaders} rows={inventoryRows} />

      {openRequestItem && (
        <RequestItem
          items={items}
          survivor={survivor}
          onCloseRequestItem={() => setOpenRequestItem(false)}
        />
      )}
    </div>
  );
};
