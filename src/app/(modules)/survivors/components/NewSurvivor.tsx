"use client";

import { useState } from "react";

import { Modal } from "@/app/components/modal";

import { Survivor } from "@/types";

interface NewSurvivorModalProps {
  onCloseNewSurvivor: () => void;
  handleNewSurvivor: (newSurvivor: Survivor) => void;
}

export const NewSurvivorModal = (props: NewSurvivorModalProps) => {
  const { onCloseNewSurvivor, handleNewSurvivor } = props;

  const [name, setName] = useState("");
  const [infected, setInfected] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    handleNewSurvivor({
      name,
      age: 0,
      infected,
      inventory: [],
      gender: "other",
      dateAdded: new Date(),
      lastLocation: { latitude: 0, longitude: 0 },
    });
    // Clean fields
    setName("");
    setInfected(false);
    onCloseNewSurvivor();
  };

  return (
    <Modal title="Add Survivor" onClose={onCloseNewSurvivor}>
      <form onSubmit={handleSubmit}>
        <div className="p-4 md:p-5 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name of Survivor
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Status
            </label>
            <select
              id="status"
              value={infected ? "infected" : "healthy"}
              onChange={(e) => setInfected(e.target.value === "infected")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="healthy">Healthy</option>
              <option value="infected">Infected</option>
            </select>
          </div>
        </div>
        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Survivor
          </button>
          <button
            type="button"
            onClick={onCloseNewSurvivor}
            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
