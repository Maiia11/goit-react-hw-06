// import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilters = state => state.filters.name;
// export const getFilteredContacts = createSelector(
// [getContacts, getFilters],
// (contacts, filter) => {
// return contacts.filter(contact =>
// contact.name.toLowerCase().includes(filter.toLowerCase())
// );
// })