import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions/index";

const initialState = {
    isLoading: true,
    error: null,
    flights: []
}


const flightSlice = createSlice({
    name: "flights",
    initialState,
    extrareducers: (builder) => {
        builder.addCase(getFlights.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getFlights.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
        builder.addCase(getFlights.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.flights = action.payload;
        });
    },
})

export default flightSlice.reducer