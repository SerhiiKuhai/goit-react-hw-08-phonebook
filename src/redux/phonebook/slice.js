import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};
const customArr = [fetchContacts, addContact, deleteContact];
const createStatusType = statusType => customArr.map(el => el[statusType]);

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const handleFulfilledGet = (state, action) => {
  state.items = action.payload;
};
const handleFulfilledPost = (state, action) => {
  state.items.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledPost)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...createStatusType(status.pending)), handlePending)
      .addMatcher(
        isAnyOf(...createStatusType(status.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...createStatusType(status.rejected)),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
