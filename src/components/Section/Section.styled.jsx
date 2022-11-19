import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 600px;
  width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 40px;
  flex-direction: column;
  background-color: var(--background);
`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  color: var(--title);
  font-weight: 700;
  font-size: 30px;
  line-height: 1.6;
`;
