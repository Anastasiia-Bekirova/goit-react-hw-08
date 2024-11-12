import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";
import { fetchContacts , addContact, deleteContact} from "./contactsOps";


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
});

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectNameFilter, selectContacts], (filter, contacts) =>  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  ) )