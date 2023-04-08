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
            const includesName = state.contacts.items.map(item => {return (item.name.toLowerCase())});
              if(includesName.includes(action.payload.name.toLowerCase())) {
                alert(`${action.payload.name} is already in contacts`)
                return
              }  
              else {
                state.contacts.items.push(action.payload);
              }
          },
          [addContact.rejected](state, action) {
            state.contacts.isLoading = false;
            state.contacts.error = action.payload;
          },
           // delete
          //  const index = state.contacts.findIndex(contact => contact.id === action.payload);
          //  state.contacts.splice(index, 1);
          
          }
        })

        export const contactsReducer = contactsSlice.reducer;