import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [{name: 'John', number: '+380999999999'}],
};

const slice = createSlice({
name: "contacts",
  initialState,
  reducers: {
  addContact: (state, action) => {
    state.items.unshift(action.payload);
  },
    deleteContact: (state, action) => {
    state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
})

export const selectContacts = (state) => state.contacts.items
export const contactsReducer = slice.reducer;
export const {addContact, deleteContact} = slice.actions;