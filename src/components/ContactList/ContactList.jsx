import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {deleteContact, selectContacts} from '../../redux/contactsSlice.js';
import {selectFilter} from '../../redux/filtersSlice.js';

const ContactList = () => {
  const users = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filteredData = users.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <ul className={css.list}>
        {filteredData.map((user) => {
          return (
            <li
              className={css.listItem}
              key={user.id}
            >
              <Contact {...user} />
              <button
                className={css.btn}
                type="button"
                onClick={() =>
                  dispatch(deleteContact(user.id))
                }
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
