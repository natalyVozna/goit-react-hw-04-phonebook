// import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  InputStyled,
  LabelInput,
  FieldStyle,
  FormStyle,
  ErrorText,
} from './FormikContact.styled';
import { Button } from 'components/Button/Button';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    ></ErrorMessage>
  );
};

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = yup.object().shape({
  product: yup.string().required('Please select a product').oneOf(products),
  name: yup.string().required('Only letters'),
  number: yup.number().min(1).max(9).required(),
  date: yup.date().default(() => new Date()),
  wouldReccomend: yup.boolean().default(false),
});

const initialValues = {
  name: '',
  number: '',
  date: new Date(),
  wouldReccomend: false,
  product: '',
};

export const FormikContact = () => {
  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormStyle>
        <FieldStyle>
          <LabelInput>Name</LabelInput>
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {/* <ErrorMessage name="name" component="div" /> */}
          <FormError name="name" />
        </FieldStyle>
        <FieldStyle>
          <LabelInput>Number</LabelInput>
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError name="number" />
        </FieldStyle>

        <FieldStyle>
          <LabelInput>Product</LabelInput>
          <InputStyled name="product" as="select">
            <option value="">Select a product</option>
            {products.map((product, idx) => (
              <option value={product} key={idx}>
                {product}
              </option>
            ))}
          </InputStyled>
          <FormError name="product" />
        </FieldStyle>

        <Button type="submit">Add contact</Button>
      </FormStyle>
    </Formik>
  );
};
