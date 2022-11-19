import { Container, Title } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

Section.propStyles = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
