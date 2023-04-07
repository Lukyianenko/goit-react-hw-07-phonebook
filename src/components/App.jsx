import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import PropTypes from 'prop-types';
import { fetchContacts } from "../redux/fetchContacts";
import {AddContscts} from './BookContacts/AddContact';
import { ListContacts } from './BookContacts/ListContacts';
// import { Filter } from './BookContacts/FilterContacts';
import { Title } from './BookContacts/BookContacts.styled';

export const App = () => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contact.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Title>Phonebook</Title>
      <AddContscts />
      {/* <Filter/> */}
      <ListContacts/>
      </div>
    );  
};


App.propTypes = {
  state: PropTypes.arrayOf(PropTypes.exact({
    contacts: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })),
  })),
}