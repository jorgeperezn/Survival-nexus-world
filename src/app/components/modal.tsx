import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ title, onClose, children }: ModalProps) => {
  return (
    <div
      aria-hidden="true"
      className="fixed overflow-y-hidden overflow-x-hidden top-0 right-0 left-0 bottom-0 z-50"
    >
      <div className="fixed bg-gray-900/50 dark:bg-gray-900/80 inset-0 z-40 flex justify-center items-center">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
