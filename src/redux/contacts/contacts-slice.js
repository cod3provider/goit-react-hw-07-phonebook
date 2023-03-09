import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// import {
//   fetchAddContactLoading, fetchAddContactsError, fetchAddContactSuccess,
//   fetchAllContactsError,
//   fetchAllContactsLoading,
//   fetchAllContactsSuccess,
// } from './contacts-actions';
import { fetchAddContact, fetchAllContacts, fetchDeleteContact } from './contacts-operations';
// import { store } from '../store';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchAddContact.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchDeleteContact.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        const idx = store.items.findIndex(item => item.id === payload);
        store.items.splice(idx, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })



    // [fetchAllContactsLoading]: (store) => {
    //   store.isLoading = true;
    // },
    // [fetchAllContactsSuccess]: (store, { payload }) => {
    //   store.isLoading = false;
    //   store.items = payload;
    // },
    // [fetchAllContactsError]: (store, { payload }) => {
    //   store.isLoading = false;
    //   store.error = payload;
    // },
    // [fetchAddContactLoading]: (store) => {
    //   store.isLoading = true;
    // },
    // [fetchAddContactSuccess]: (store, { payload }) => {
    //   store.isLoading = false;
    //   store.items.push(payload);
    // },
    // [fetchAddContactsError]: (store, { payload }) => {
    //   store.isLoading = false;
    //   store
    // }
    // addContact: {
    //   reducer: (state, { payload }) => {
    //     state.push(payload);
    //   },
    //   prepare: ({  name, number }) => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact: (state, { payload }) =>
    //   state.filter(({ id }) => id !== payload),
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
