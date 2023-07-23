import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { addFiltersContact } from '../../redux/filtersContac/slice';
import { LabelContact } from 'components/Form/Label.styled';
import { InputContact } from 'components/Form/Input.styled';

export function Filter() {
  const contactFilterRef = useRef();

  const dispatch = useDispatch();

  const getFiltredContacts = () =>
    dispatch(addFiltersContact(`${contactFilterRef.current.value}`));

  return (
    <LabelContact htmlFor="inputName">
      Find contacts by name
      <InputContact
        ref={contactFilterRef}
        type="text"
        onChange={getFiltredContacts}
      />
    </LabelContact>
  );
}
