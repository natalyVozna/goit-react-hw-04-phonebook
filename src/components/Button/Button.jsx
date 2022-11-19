import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({
  type = 'button',
  disabled = false,
  icon: Icon = null,
  children,
  onClickHandle,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClickHandle}>
      {Icon && <Icon size="20" />}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClickHandle: PropTypes.func,
  children: PropTypes.node.isRequired,
  icon: PropTypes.func,
};
