import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";

const initialState={
    transactions:[],
}

const transactionSlice=createSlice({
    name:"transactions",
    initialState,
    reducers:{
        addTransaction : (state,action)=>{
            state.transactions.push({id:uuidv4(),...action.payload})
        },
        deleteTransaction:(state,action)=>{
            state.transactions=state.transactions.filter(t=>t.id !== action.payload)
        }
    }
})

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;