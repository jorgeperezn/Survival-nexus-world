import { Survivor } from "@/types";

// Sample data of survivors
const mockedSurvivors: Survivor[] = [
  {
    name: "John Doe",
    age: 30,
    gender: "male",
    lastLocation: { latitude: 123.456, longitude: 789.012 },
    inventory: [
      { itemId: "1", quantity: 3 },
      { itemId: "2", quantity: 4 },
    ],
    infected: false,
    dateAdded: new Date(),
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "female",
    lastLocation: { latitude: 456.789, longitude: 987.654 },
    inventory: [
      { itemId: "2", quantity: 2 },
      { itemId: "3", quantity: 4 },
    ],
    infected: true,
    dateAdded: new Date(),
  },
];

// Mock function to simulate fetching survivors from an API
export async function getSurvivors(): Promise<Survivor[]> {
  // Simulate a delay to mimic network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockedSurvivors;
}
