import { createSlice } from '@reduxjs/toolkit';
import data from "../../utilize/data"

const initialState = {
  data:data,
  sortBy: null,
  direction: 'asc',
};
const dataSlice = createSlice({
        name:"data",
        initialState,
        reducers:{
            setData(state,action){
                state.data = action.payload;
            },
            sortData(state,action){
                const col = action.payload;
                const scol =state.sortBy == col;
                state.direction = scol && state.direction == 'asc' ? 'desc' : 'asc';
                state.sortBy = col;

                    state.data.sort((a, b) => {
                    const aVal = a[col];
                    const bVal = b[col];

    if (typeof aVal === 'number') {
          return state.direction === 'asc' ? aVal - bVal : bVal - aVal;
        }

     
        return state.direction === 'asc'
          ? aVal.toString().localeCompare(bVal.toString())
          : bVal.toString().localeCompare(aVal.toString());
            })
        }
    }


})
 
export  const {setData,sortData} =  dataSlice.actions
export const dataReducer = dataSlice.reducer