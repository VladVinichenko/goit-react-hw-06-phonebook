import { connect } from 'react-redux'
import s from './ContactList.module.css'
import DeleteButton from '../DeleteButton/DeleteButton'
import propTypes from 'prop-types';
import { deleteContact } from '../../store/contacts';

const ContactListState = ({ deleteContact, contacts, filter }) => {
  const itemList = filter.length > 0 ? filter : contacts

  return itemList.length > 0 ? (<ul className={s.list}>
    {itemList.map((item) =>
      <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={(payload) => deleteContact(payload)} id={item.id} />
      </li>
    )}
  </ul>) : (
    <p className={s.text}>no results</p>
  )
}

ContactListState.propTypes = {
  contacts: propTypes.array
}

const mapStateToProps = store => ({
  contacts: store.contactReducer.contacts,
  filter: store.contactReducer.filter
})

const mapDispatchToProps = {
  deleteContact
}


const ContactList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactListState)


export default ContactList