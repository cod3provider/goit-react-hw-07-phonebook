import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/contacts.api';

// import actions, { fetchAddContactLoading, fetchAddContactsError, fetchAddContactSuccess } from './contacts-actions';

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async(_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  "contacts/add",
  async(data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  "contacts/delete",
  async(id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);



// {
//   const func = async (dispatch) => {
//     try {
//       dispatch(actions.fetchAllContactsLoading());
//       const data = await api.getAllContacts();
//       dispatch(actions.fetchAllContactsSuccess(data));
//     } catch ({ response }) {
//       dispatch(actions.fetchAllContactsError(response.data.message));
//     }
//   }
//   return func;
// }

// const isDuplicateContact = (contacts) => {
//   const result = contacts.find(
//   contact => contact.name.toLowerCase() === name.toLowerCase()
// );
//
// // isDuplicateContact
// //   ? alert(`${name} is already in contacts`)
// //   : dispatch(addContact(contact));
// // reset();
//
// export const fetchAddContact = (data) => {
//   const func = async (dispatch, getState) => {
//     try {
//       const {contacts} = getState();
//       if(isDuplicateContact(contacts.items)) {
//         alert(`${name} is already in contacts`);
//         return;
//       }
//       dispatch(actions.fetchAddContactLoading());
//       const result = await api.addContact(data);
//       dispatch(actions.fetchAddContactSuccess(result));
//     } catch ({ response }) {
//       dispatch(actions.fetchAddContactsError(response.data().message))
//     }
//   }
//
//   return func;
// }
