import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../../constants";

export const getFlights = createAsyncThunk("flights/getFlight",
    async () => {

        const res = await axios.request(options);
        const formatted = res.data.aircraft.map((item) => {
            return {
                id: item[0],
                code: item[1],
                lat: item[2],
                lng: item[3]

            }

        });
        return formatted;
    });