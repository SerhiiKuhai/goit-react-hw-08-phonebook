import { contactsReducer } from './phonebook/slice';
import { filtersContactReducer } from './filtersContac/slice';
import { configureStore } from '@reduxjs/toolkit';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filtersContact: filtersContactReducer,
  },
});
