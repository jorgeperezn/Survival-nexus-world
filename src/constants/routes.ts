interface Route {
  id: number;
  label: string;
  path: string;
  description?: string;
}

export const Routes: Route[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Reports",
    path: "/reports",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    label: "Survivors",
    path: "/survivors",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 4,
    label: "Inventory",
    path: "/inventory",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];
