import { createSlice } from "@reduxjs/toolkit";
import  {logOut} from '../auth/operations';
import { fetchContacts , addContact, deleteContact} from "./operations";


const INITIAL_STATE = {
	items: [],
  loading: false,
  error: null

};


export const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) =>
    {
      state.loading = true;
    state.error = null}
  )
    .addCase(fetchContacts.fulfilled, (state, action) =>
    {
      state.loading = false;
      state.items = action.payload}
   
  )
    .addCase(fetchContacts.rejected, (state, action) =>
    {
      state.loading = false;
      state.error = action.payload}
   
  )
   .addCase(addContact.pending, (state) =>
    {state.loading = true}
  )
    .addCase(addContact.fulfilled, (state, action) =>
    {
      state.loading = false;
      state.error = null;
      state.items.push(action.payload)}
   
  )
  .addCase(addContact.rejected, (state, action) =>
  {
    state.loading = false;
      state.error = action.payload}
   
  )
  .addCase(deleteContact.pending, (state) =>
    {state.loading = true}
  )
    .addCase(deleteContact.fulfilled, (state, action) =>
    {
      state.loading = false;
        state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      state.items.splice(index, 1);
}
   
  )
  .addCase(deleteContact.rejected, (state, action) =>
      {state.loading = false,
      state.error = action.payload}
   
  )
  .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      }),
});

export const contactsReducer = contactsSlice.reducer;

