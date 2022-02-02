import { addContact, deleteContact, clearAllContacts } from './actions'
import { createReducer } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialStore = {
  contacts: [],
  filter: '',
}


export const contactReducer = createReducer(initialStore, {
  [addContact.type]: state => {
    state.contacts = [...state.contacts, { name: 'Mario Andretti', number: '09788888888', id: nanoid() }]
  },
  [deleteContact.type]: (state, action) => {
    state.contacts = state.contacts.filter(el => el.id !== action.payload)
  },
  [clearAllContacts.type]: state => {
    state.contacts = initialStore.contacts
  }
})


// export const contactReducer = (state = initialStore, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return { ...state, contacts: [...state.contacts, { name: 'Mario Andretti', number: '09788888888', id: nanoid() }] }
//     case deleteContact.type:
//       return {
//         ...state, contacts: state.contacts.filter(el => el.id !== action.payload)
//       }
//     case clearAllContacts.type:
//       return { ...initialStore }
//     default:
//       return state
//   }
// }