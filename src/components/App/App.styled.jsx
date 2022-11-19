import styled from 'styled-components';

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
export const SubTitle = styled.h2`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 30px;
  margin-top: 30px;
  color: var(--yellow);
  font-weight: 700;
  font-size: 34px;
  line-height: 1.6;
  stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--title);
  text-shadow: 0px 4px 4px rgba(95, 103, 117, 0.25);
`;
