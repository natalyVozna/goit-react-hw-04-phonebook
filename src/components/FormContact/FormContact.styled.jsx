import styled from 'styled-components';

export const Form = styled.form`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 1px dashed var(--backdrop);
`;

export const Field = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:last-child {
    margin-bottom: 32px;
  }
`;
export const LabelInput = styled.label`
  margin-bottom: 2px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  color: var(--text);
`;

export const InputStyled = styled.input`
  cursor: pointer;
  margin: 0;
  padding: 14px 0 14px 12px;
  font: inherit;
  background: #ffffff;
  border: 1px solid rgba(18, 18, 18, 0.12);
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  height: 48px;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;

  transition: border 250ms var(--timing-function);

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus:invalid {
    border: 1px solid var(--red);
  }
  :valid {
    border: 1px solid var(--dark-green);
  }

  /* &:focus,
  &:not(:placeholder-shown):valid {
    border: 1px solid var(--dark-green);
  } */

  /* &:not(:focus):not(:placeholder-shown):invalid {
    border: 1px solid var(--red);
  } */
`;
