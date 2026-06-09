import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ApoioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


export const ApoioCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  h3 {
    margin-top: 0;
    color: #4a148c; /* Um roxo básico só pra começar */
  }

  p {
    margin: 0.5rem 0;
  }
`;

export const ButtonDetails = styled.button`
  background-color: #4a148c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: bold;

  &:hover {
    background-color: #7c43bd;
  }
`;