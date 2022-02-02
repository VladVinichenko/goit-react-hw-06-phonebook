import s from './ContactForm.module.css'
import Input from '../Input/Input';
import Button from '../Button/Button'
import { connect } from 'react-redux'
import React, { useState, useEffect } from "react";

import { addContact } from '../../store/contacts';

const ContactFormState = ({ addContact }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')



  const onInput = (evt) => {
    evt.target.name === "name" && setName(evt.target.value)
    evt.target.name === "number" && setNumber(evt.target.value)
  }


  const onAddContact = () => addContact({
    payload: { name: name, number: number }
  })

  return (
    <form className={s.boxForm} >
      <Input name="name" inputData={onInput}>Name</Input>
      <Input name="number" tel='true' inputData={onInput}>Number</Input>
      <Button name='addContact' action={onAddContact}>Add contact</Button>
    </form >


  )
}

const mapStateToProps = store => ({
  contacts: store.contactReducer.contacts
})

const mapDispatchToProps = {
  addContact,
}


const ContactForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactFormState)


export default ContactForm;
