"use client";

import {
  useEffect,
  useState,
} from "react";

type Props = {
  columns: string[];
};

export default function TableRenderer({
  columns,
}: Props) {

  const [employees, setEmployees] =
    useState<any[]>([]);

  useEffect(() => {

    const storedEmployees =
      JSON.parse(
        localStorage.getItem(
          "employees"
        ) || "[]"
      );

    setEmployees(
      storedEmployees
    );

  }, []);

  return (

    <div className="overflow-auto">

      <table className="
        w-full
        border
        border-gray-300
      ">

        <thead>

          <tr className="
            bg-black
            text-white
          ">

            {columns.map(
              (
                column,
                index
              ) => (

                <th
                  key={index}
                  className="
                    p-3
                    border
                    border-gray-300
                    text-left
                  "
                >
                  {column}
                </th>
              )
            )}

          </tr>

        </thead>

        <tbody>

          {employees.map(
            (
              row: any,
              index: number
            ) => (

              <tr
                key={index}
                className="
                  hover:bg-gray-100
                "
              >

                {Object.values(
                  row
                ).map(
                  (
                    value: any,
                    i: number
                  ) => (

                    <td
                      key={i}
                      className="
                        p-3
                        border
                        border-gray-300
                      "
                    >
                      {String(value)}
                    </td>
                  )
                )}

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}