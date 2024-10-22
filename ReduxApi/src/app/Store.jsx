import { configureStore } from "@reduxjs/toolkit";
import Api from "../features/Apislice";


export const store = configureStore({
    reducer: {
        apiKey: Api
    }
})