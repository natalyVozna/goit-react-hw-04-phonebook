import { Component } from 'react';
import { nanoid } from 'nanoid';
import { InputStyled, LabelInput, Field, Form } from './FormContact.styled';
import { Button } from 'components/Button/Button';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class FormContact extends Component {
  state = {
    ...INITIAL_STATE,
  };

  nameInputId = nanoid();
  telInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmitHandle(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Field>
          <LabelInput htmlFor={this.nameInputId}>Name</LabelInput>
          <InputStyled
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Field>
        <Field>
          <LabelInput htmlFor={this.telInputId}>Number</LabelInput>
          <InputStyled
            type="tel"
            name="number"
            id={this.telInputId}
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Field>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
