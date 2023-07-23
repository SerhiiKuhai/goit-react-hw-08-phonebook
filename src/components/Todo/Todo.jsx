import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button.styled';
import { GridItem } from 'components/Grid/Grid.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebook/operations';

export function Todo({ name, number, id }) {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(deleteContact(id));
  };
  return (
    <GridItem>
      {name} : {number}
      <Button onClick={deleteTodo}>Delete</Button>
    </GridItem>
  );
}

Todo.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
