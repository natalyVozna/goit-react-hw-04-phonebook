import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  list-style: disc;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.6;
`;

export const Info = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 27px;
  color: var(--text);

  :first-child {
    color: var(--dark-green);
    margin-left: 0;
  }

  :last-child {
    color: var(--dark-gray);
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: 3px 6px;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  margin-left: 16px;
  border: 1px solid var(--red);
  border-radius: 4px;
  height: 100%;
  line-height: 1;
  color: var(--red);
  /* box-shadow: 1px 1px 3px 0px rgba(33, 33, 33, 0.7); */
  transition: box-shadow 250ms var(--timing-function),
    color 250ms var(--timing-function), transform 250ms var(--timing-function),
    background-color 250ms var(--timing-function);

  :active,
  :hover {
    box-shadow: 1px 1px 4px rgba(33, 33, 33, 0.4);
    background-color: var(--red);
    color: var(--title);
    transform: scale(1.1);
  }
`;
