import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/contacts.api';

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
