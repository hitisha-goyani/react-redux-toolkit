import React from "react";
import {
  RiSortAsc,
  RiSortDesc,
} from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { sortData } from "../reduxToolkit/dataReducer/dataSlice";

const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const { sortBy, sortDirection } = useSelector((state) => state.data);

  const handleSort = (field) => {
    dispatch(sortData(field));
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return <RiSortAsc className="inline ml-1" />;
    return sortDirection === "asc" ? (
      <RiSortAsc className="inline ml-1" />
    ) : (
      <RiSortDesc className="inline ml-1" />
    );
  };

  return (
    <div>
      <div className="relative overflow-x-auto mt-5 " >
          <h1 className="text-2xl font-bold text-center my-5">Datatable</h1>
        <table className="w-max-7xl mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          
            <tr>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("id")}>
                ID {getSortIcon("id")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("first_name")}>
                First Name {getSortIcon("first_name")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("last_name")}>
                Last Name {getSortIcon("last_name")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("email")}>
                Email {getSortIcon("email")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("gender")}>
                Gender {getSortIcon("gender")}
              </th>
              <th className="px-6 py-3 cursor-pointer" onClick={() => handleSort("city")}>
                City {getSortIcon("city")}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr
                key={ele.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {ele.id}
                </th>
                <td className="px-6 py-4">{ele.first_name}</td>
                <td className="px-6 py-4">{ele.last_name}</td>
                <td className="px-6 py-4">{ele.email}</td>
                <td className="px-6 py-4">{ele.gender}</td>
                <td className="px-6 py-4">{ele.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
