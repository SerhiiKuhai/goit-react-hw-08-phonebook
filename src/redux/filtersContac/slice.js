import { createSlice } from '@reduxjs/toolkit';

const filtersContactSlice = createSlice({
  name: 'filtersContact',
  initialState: '',
  reducers: {
    addFiltersContact(_, action) {
      return action.payload;
    },
  },
});

export const addFiltersContact = filtersContactSlice.actions.addFiltersContact;

export const filtersContactReducer = filtersContactSlice.reducer;
