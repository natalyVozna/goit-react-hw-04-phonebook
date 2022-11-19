import { Field, LabelInput, InputStyled } from './InputCustom.styled';
import PropTypes from 'prop-types';

export const InputCustom = ({
  inputId,
  type = 'text',
  title,
  name,
  value,
  fildStyle,
  inputStyle,
  required = true,
  pattern,
  handleChangeInput,
}) => {
  return (
    <Field style={fildStyle}>
      {title && <LabelInput htmlFor={inputId}>{title}</LabelInput>}
      <InputStyled
        type={type}
        name={name}
        id={inputId}
        value={value}
        style={inputStyle}
        onChange={handleChangeInput}
        pattern={pattern}
        required={required}
      />
    </Field>
  );
};

InputCustom.propTypes = {
  inputId: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  pattern: PropTypes.string,
  fildStyle: PropTypes.shape({}),
  title: PropTypes.string,
  inputStyle: PropTypes.shape({}),
  handleChangeInput: PropTypes.func.isRequired,
};
