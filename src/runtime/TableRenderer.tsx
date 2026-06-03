type Props = {
  columns?: string[];
  rows?: any[];
};

export default function TableRenderer({
  columns = [],
  rows = [],
}: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            {columns.map(
              (
                column,
                index
              ) => (
                <th
                  key={index}
                  className="text-left px-5 py-4 text-slate-300 border-b border-slate-800 font-semibold"
                >
                  {column}
                </th>
              )
            )}
          </tr>
        </thead>

        <tbody>
          {rows.length > 0 ? (
            rows.map(
              (
                row,
                rowIndex
              ) => (
                <tr
                  key={rowIndex}
                  className="border-b border-slate-800 hover:bg-slate-900 transition"
                >
                  {columns.map(
                    (
                      column,
                      colIndex
                    ) => (
                      <td
                        key={colIndex}
                        className="px-5 py-4 text-slate-300"
                      >
                        {typeof row?.[column] === "object"
  ? JSON.stringify(
      row?.[column],
      null,
      2
    )
  : row?.[column] || "-"}
                      </td>
                    )
                  )}
                </tr>
              )
            )
          ) : (
            <tr>
              <td
                colSpan={
                  columns.length ||
                  1
                }
                className="px-5 py-8 text-center text-slate-500"
              >
                No table data
                available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}