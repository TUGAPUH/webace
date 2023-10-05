import { configureStore } from "@reduxjs/toolkit";
import main from './MainSlice/MainSlice';

export default configureStore({
    reducer: {
        mainReducer: main,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }), //Крутой проигнорировал сериализацию!! Да, я
})