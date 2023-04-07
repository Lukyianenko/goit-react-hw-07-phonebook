import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsState';


export const store = configureStore({
    reducer: {
        contact: contactsReducer,
    },
})
