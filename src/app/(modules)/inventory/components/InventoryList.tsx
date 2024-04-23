import { InventoryItem, Item, Survivor } from "@/types";

interface InventoryListProps {
  survivors: Survivor[];
  items: Item[];
}

export const InventoryList = (props: InventoryListProps) => {
  const { survivors, items } = props;

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

  return (
    <div>
      <h2>List of Survivors inventories</h2>
      <p>You have {totalItems} inventories logged</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Inventories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {survivors.map((survivor) => (
            <tr key={survivor.name}>
              <td>{survivor.name}</td>
              <td>{formatInventoryItems(survivor.inventory)}</td>
              <td>Actions Placeholder</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
