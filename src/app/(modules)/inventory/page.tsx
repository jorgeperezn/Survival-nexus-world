import { Item, Survivor } from "@/types";

import { InventoryList } from "./components/InventoryList";

import { getItems } from "@/services/items";
import { getSurvivors } from "@/services/survivors";

interface InventoryPageProps {}

const InventoryPage: React.FC<InventoryPageProps> = async () => {
  const survivors: Survivor[] = await getSurvivors();
  const items: Item[] = await getItems();

  return <InventoryList survivors={survivors} items={items} />;
};

export default InventoryPage;
