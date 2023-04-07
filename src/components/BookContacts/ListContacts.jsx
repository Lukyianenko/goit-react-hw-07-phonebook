import PropTypes from 'prop-types';
import { TitleContact, List, ContList, ButtonList, ItemList } from './BookContacts.styled';
import { getContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";
// import { useSelector, useDispatch } from "react-redux/es/exports";
// import { onDelete } from '../../redux/contactsState';



export const ListContacts = () => {
    const contacts = useSelector(getContacts);
    console.log(contacts)
    // const dispatch = useDispatch();
    // const filtr = useSelector(state => state.contact.filter);
    // const normalizeFiltr = filtr.toLowerCase();
    // const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFiltr));

    return (
    <ContList>
        <TitleContact>Contacts</TitleContact>
        <List>
        {contacts.map(({ id, name, phone }) => (<ItemList key={id}>{name}: {phone} 
        <ButtonList type="button" onClick={() => console.log("df")}>Delete</ButtonList>
        </ItemList>))}
        </List>
    </ContList>
    )
    
}

ListContacts.propTyoes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDelete: PropTypes.func,
}