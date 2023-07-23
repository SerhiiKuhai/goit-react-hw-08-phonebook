import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/phonebook/operations';

import { Button } from 'components/Button/Button.styled';
import { FormContact } from 'components/Form/Form.styled';
import { InputContact } from 'components/Form/Input.styled';
import { LabelContact } from 'components/Form/Label.styled';

export function ContactForm() {
  const contactNameRef = useRef(null);
  const contactNumberRef = useRef(null);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const contactName = contactNameRef.current.value;
    const contactNumber = contactNumberRef.current.value;
    const contactId = nanoid();

    dispatch(
      addContact({ id: contactId, name: contactName, phone: contactNumber })
    );

    contactNameRef.current.value = null;
    contactNumberRef.current.value = null;
  };

  return (
    <>
      <FormContact onSubmit={handleSubmit}>
        <LabelContact htmlFor="inputName">Name</LabelContact>
        <InputContact
          ref={contactNameRef}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="inputName"
        />
        <LabelContact htmlFor="inputNumber">Number</LabelContact>
        <InputContact
          ref={contactNumberRef}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="inputNumber"
        />
        <Button type="submit">Add contact</Button>
      </FormContact>
    </>
  );
}
