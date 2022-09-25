import React from "react";
import { Button, ListItem } from "style/style";
import { deleteContact } from "redux/store";
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = ({ children }) => {
    const getContacts = state => state.contacts.items;
    const getFilter = state => state.contacts.filter;
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const que = useSelector(getFilter);
    if (contacts.lendth === 0) return;

    const filteredList = que === '' ?
        contacts :
        contacts.filter(item => item.name.includes(que));

    return (<>
        <h2>Contacts</h2>
        {children}
        <ul>
            {filteredList.map((item) =>
                <ListItem key={item.id}> {item.name}: {item.number}
                    <Button type="button" id={item.number} onClick={() => dispatch(deleteContact(item.id))}>Delete</Button>
                </ListItem>)}
        </ul>
    </>)
}



