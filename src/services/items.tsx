import { Item, ItemType } from "../types";

// Sample data of inventory items
const sampleItems: Item[] = [
  { id: "1", name: ItemType.Water, description: "Clean drinking water" },
  { id: "2", name: ItemType.Food, description: "Non-perishable food items" },
  {
    id: "3",
    name: ItemType.Medication,
    description: "Medical supplies and drugs",
  },
  {
    id: "4",
    name: ItemType.CVirusVaccine,
    description: "Vaccine for the C-Virus",
  },
];

// Mock function to simulate fetching items from an API
export async function getItems(): Promise<Item[]> {
  // Simulate a delay to mimic network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return sampleItems;
}
