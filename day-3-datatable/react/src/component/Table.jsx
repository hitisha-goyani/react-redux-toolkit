import React from "react";
import data from "../utilize/Data";
import { RiHeartFill, RiSortAlphabetAsc, RiSortAlphabetDesc, RiSortAsc, RiSortDesc, RiSortNumberDesc } from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { sortData } from "../reduxToolkit/dataReducer/dataSlice";

console.log(data);

const Table = () => {

    const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const { sortBy, sortDirection } = useSelector((state) => state.data);

  const handleSort = (field) => {
    dispatch(sortData(field));
  };

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
                <button className="align-middle border ml-1 rounded"></button>
              </th>
                     <th onClick={() => handleSort('name')}>Name {sortBy === 'name' ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</th>
              <th scope="col" className="px-6 py-3">
                last name
                <button className="align-middle border ml-1 rounded"><RiSortAlphabetAsc/></button>
              </th>
              <th scope="col" className="px-6 py-3">
                email
                <button className="align-middle border ml-1 rounded"><RiSortDesc /></button>
              </th>
              <th scope="col" className="px-6 py-3">
                gender
                 <button className="align-middle border ml-1 rounded"><RiSortAlphabetAsc/></button>
              </th>
              <th scope="col" className="px-6 py-3">
                city
                  <button className="align-middle border ml-1 rounded"><RiSortAlphabetAsc/></button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((ele) => (
              <tr key={ele.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
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
