import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 30px 0 20px 0;
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const SelectWrapper = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
