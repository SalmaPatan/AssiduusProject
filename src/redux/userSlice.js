import { createSlice } from "@reduxjs/toolkit";
import accountWatchListJSon from '../components/data/AccountWatchListData.json'
import cashFlowListJSOn from '../components/data/CashFlowListData.json'

const userSlice = createSlice({
    name: 'app',
    initialState: {
        pathname: '/',
        accountWatchListData: { ...accountWatchListJSon },
        cashFlowListData: [...cashFlowListJSOn],

    },
    reducers: {
        setPathname: (state, action) => {
            state.pathname = action.payload
        },
        getAccountWatchListData: (state, action) => {
            state.accountWatchListData = { ...state.accountWatchListData, ...action.payload }
        },
        getCashFlowListData: (state, action) => {
            state.cashFlowListData = [...state.cashFlowListData]
        }
    }

})


export const { setPathname, getAccountWatchListData, getCashFlowListData } = userSlice.actions;
export default userSlice.reducer