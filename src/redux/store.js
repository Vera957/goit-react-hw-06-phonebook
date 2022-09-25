import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage';

export const initialState = {
    contacts: {
        items: [],
        filter: ''
    }
}

const contactSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    reducers: {

        setFilter(state, action) {
            return {
                contacts: {
                    items: [...state.contacts.items],
                    filter: action.payload,
                }
            }
        },

        addContact(state, action) {
            return {
                contacts: {
                    items: [...state.contacts.items, action.payload],
                    filter: state.contacts.filter,
                }
            };
        },

        deleteContact(state, action) {
            const newItems = state.contacts.items.filter(i => i.id !== action.payload);
            return {
                contacts: {
                    items: newItems,
                    filter: state.contacts.filter,
                }
            }
        }
    },
});

export const { setFilter, addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;


//persistor

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})



export const persistor = persistStore(store)


