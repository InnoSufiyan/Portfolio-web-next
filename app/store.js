import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import portfolio from '../features/portfolio/portfolioSlice'

const combineReducer = combineReducers({
    portfolio
})

export const makeStore = () => configureStore({
    reducer : combineReducer,
})

export const wrapper = createWrapper(makeStore)