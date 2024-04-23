import { Pagination } from "./pagination";

interface TableProps {
  headers: {
    key: string | number;
    dataIndex: string;
    label: string;
    className?: string;
  }[];
  rows: {
    key: string | number;
    [key: string]: string | number | React.ReactNode;
  }[];
}

export const Table = (props: TableProps) => {
  const { headers, rows } = props;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header) => (
              <th key={header.key} scope="col" className="px-6 py-3">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={row.key}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {headers.map((header) => (
                <td
                  key={`${row.key}_${header.key}`}
                  className={`px-6 py-4 ${header.className ?? ""}`}
                >
                  {row[header.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};
