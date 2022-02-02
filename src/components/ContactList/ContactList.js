// import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import s from './ContactList.module.css'
import DeleteButton from '../DeleteButton/DeleteButton'
import propTypes from 'prop-types';
import { addContact, deleteContact, clearAllContacts } from '../../store/contacts';

// const ContactList = ({ renderList, onDeleteContact }) => {
const ContactListState = ({ deleteContact, addContact, contacts, clearAllContacts }) => {
  // const contacts = useSelector(state => state.contacts)

  // const { contacts } = [{ name: 'laskoviy mai', number: '0999999777', id: 'eewe4' }]

  // return renderList.length > 0 ? (<ul className={s.list}>
  //   {renderList.map((item) =>
  //     <li key={item.id} id={item.id} className={s.item}>
  //       <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
  //       <DeleteButton onDeleteContact={onDeleteContact} id={item.id} />
  //     </li>
  //   )}
  // </ul>) : (<p className={s.text}>no results</p>)

  // console.log(contacts);
  return contacts.length > 0 ? (<ul className={s.list}>
    <button onClick={() => addContact()}>add contact</button>
    {contacts.map((item) =>
      <li key={item.id} id={item.id} className={s.item}>
        <p className={s.name}>{item.name}</p><p className={s.number}>{item.number}</p>
        <DeleteButton onDeleteContact={(payload) => deleteContact(payload)} id={item.id} />
      </li>
    )}
    <button onClick={() => clearAllContacts()}>clear all</button>
  </ul>) : (<div>
    <p className={s.text}>no results</p>
    <button onClick={() => addContact()}>add contact</button>
  </div>

  )
}

// ContactList.propTypes = {
//   renderList: propTypes.array
// }

const mapStateToProps = store => ({
  contacts: store.contactReducer.contacts
})

const mapDispatchToProps = {
  addContact, deleteContact, clearAllContacts
}


const ContactList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactListState)


export default ContactList