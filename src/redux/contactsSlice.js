import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./fetchContacts";
import { addContact } from "./addContact";
// import { nanoid } from 'nanoid';


const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
  };

export const contactsSlice = createSlice({
        name: 'contacts',
        initialState,
        extraReducers: {
          // fetch
          [fetchContacts.pending](state) {
            state.contacts.isLoading = true;
          },
          [fetchContacts.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items = action.payload;
          },
          [fetchContacts.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
          },
          // post
          [addContact.pending](state) {
            state.contacts.isLoading = true;
          },
          [addContact.fulfilled](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = null;
            state.contacts.items.push(action.payload);
          },
          [addContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
          },

          }
        })

        export const contactsReducer = contactsSlice.reducer;