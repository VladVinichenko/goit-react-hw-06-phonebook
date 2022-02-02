// import { addContact, deleteContact, clearAllContacts } from './actions'
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
  contacts: [],
  filter: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact(state) {
      state.contacts = [...state.contacts, { name: 'Mario Andretti', number: '09788888888', id: nanoid() }]
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(el => el.id !== action.payload)
    },
    clearAllContacts(state) {
      state.contacts = initialState.contacts
    },
  },
})

export const contactReducer = contactSlice.reducer

export const { addContact, deleteContact, clearAllContacts } = contactSlice.actions
