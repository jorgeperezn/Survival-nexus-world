import { InventoryItem } from "./inventory";

export interface Survivor {
  name: string;
  age: number;
  gender: "male" | "female" | "other";
  lastLocation: {
    latitude: number;
    longitude: number;
  };
  inventory: InventoryItem[];
  infected: boolean;
  dateAdded: Date;
}
