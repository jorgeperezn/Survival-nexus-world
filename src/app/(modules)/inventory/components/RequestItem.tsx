import { Modal } from "@/app/components/modal";

import { Item, Survivor } from "@/types";

interface RequestItemProps {
  items: Item[];
  survivor: Survivor | null;
  onCloseRequestItem: () => void;
}

export const RequestItem = (props: RequestItemProps) => {
  const { items, survivor, onCloseRequestItem } = props;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Handle logic for requesting an Item

    onCloseRequestItem();
  };

  return (
    <Modal title="Request Item" onClose={onCloseRequestItem}>
      <form onSubmit={handleSubmit}>
        <div className="p-4 md:p-5 space-y-4">
          <small className="font-medium">From {survivor?.name}</small>

          <div>
            <label
              htmlFor="itemRequest"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose Item
            </label>
            <select
              id="itemRequest"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              {survivor?.inventory.map((survivorItem) => {
                const matchedItem = items.find(
                  (el) => el.id === survivorItem.itemId
                );
                return (
                  <option key={survivorItem.itemId} value={survivorItem.itemId}>
                    {matchedItem?.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Request Item
          </button>
          <button
            type="button"
            onClick={onCloseRequestItem}
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
