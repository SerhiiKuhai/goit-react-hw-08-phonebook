import React from 'react';
import { Todo } from 'components/Todo/Todo';
import { Grid } from 'components/Grid/Grid.styled';

import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filtersContac/selectors';
import { selectСontacts } from 'redux/phonebook/selectors';

export function ContactList() {
  const contacts = useSelector(selectСontacts);
  const filterContact = useSelector(selectFilter);

  const normalizedFilter = filterContact.toLowerCase();
  const filters = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Grid>
      {filters.map(contact => (
        <Todo
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.phone}
        />
      ))}
    </Grid>
  );
}
