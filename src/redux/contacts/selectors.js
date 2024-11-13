
import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectNameFilter, selectContacts], (filter, contacts) =>  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  ) )
