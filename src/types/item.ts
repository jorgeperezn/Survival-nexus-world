export enum ItemType {
  Water = "Water",
  Food = "Food",
  Medication = "Medication",
  CVirusVaccine = "C-Virus Vaccine",
}

export interface Item {
  id: string;
  name: ItemType;
  description: string;
}
