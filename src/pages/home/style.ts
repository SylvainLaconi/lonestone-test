import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #1e1e1e;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #3e3e3e;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
