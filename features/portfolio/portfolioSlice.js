import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    portfolios: [],
    portfolio: [],
    slider: [],
    filter: ""
}

const portfolioSlice = createSlice({
    name:"portfolio",
    initialState,
    reducers: {
        setPortfolios: (state, action)=> {
            state.portfolios = action.payload
        },
        setPortfolio: (state, action)=> {
            state.portfolio = action.payload
        },
        setSlider: (state, action)=> {
            state.slider = action.payload
        },
        setFilter: (state, action)=> {
            state.filter = action.payload
        }
    }
})

export const {setPortfolios, setPortfolio, setSlider, setFilter} = portfolioSlice.actions;

export const selectPortfolios = (state) => state.portfolio.portfolios;

export const selectPortfolio = (state) => state.portfolio.portfolio;

export const selectSlider = (state) => state.portfolio.slider;

export const selectFilter = (state) => state.portfolio.filter;

export default portfolioSlice.reducer