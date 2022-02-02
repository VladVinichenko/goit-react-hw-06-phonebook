import Input from '../Input/Input'
import { connect } from 'react-redux'
import React from "react";
import { filterContacts } from '../../store/contacts';


const FilterState = ({ filterContacts }) => {

  return (
    <Input name="filter" inputData={(payload) => filterContacts(payload.target.value.trim())}>Find contacts by name</Input>
  )
}

const mapStateToProps = store => ({
  contacts: store.contactReducer.contacts
})

const mapDispatchToProps = {
  filterContacts,
}


const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterState)


export default Filter;
