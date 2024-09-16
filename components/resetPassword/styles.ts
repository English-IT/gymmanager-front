import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.2rem;
  margin: 3rem auto;
  max-width: 500px;
  text-align: center;

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2); // Card-like box shadow
  border: 1px solid #e0e0e0; // Light border for the card

  h1 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    margin: 20px 0;
  }

  form {
    width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 20px;

    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;
