import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';

const clicksSlice = createSlice({
    name: 'clicks',
    initialState: {value: 0, a: 1, b: 2, c: 3},
    reducers: {
        update(state) {
            state.value += 1;
        },
    },
});

const persistConfig = {
    key: 'clicks',
    storage,
    whitelist: ['value'],
};

export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);


export const {update} = clicksSlice.actions;

// selectors

export const getClickValue = state => state.clicks.value;