import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const slice = createSlice({
name: "contacts",
  initialState,
   selectors: {
  selectContacts: state => state.items
   },
  reducers: {
  addContact: (state, action) => {
    state.items.unshift(action.payload);
  },
    deleteContact: (state, action) => {
    state.items.splice(state.items.indexOf(action.payload), 1);
    }
  }
})

export const {selectContacts} = slice.selectors;
export const contactsReducer = slice.reducer;
export const {addContact, deleteContact} = slice.actions;