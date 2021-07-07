import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers";
import {RootState} from "./reducers";
import {Question} from "./types/exam";
import {useDispatch, useSelector} from "react-redux";

const store = configureStore({reducer});

export default store;
export const useAppSelector = function <T>(f: (state: RootState) => T ) {
    return useSelector<RootState, T>(f);
}
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
