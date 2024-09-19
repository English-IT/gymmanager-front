import styled from "@emotion/styled";

export const UsersPageTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (max-width: 650px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 24px;
  }
`;

export const FilterDropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const AddMemberBtn = styled.button`
  border: 1px solid #002140;
  border-radius: 8px;
  background-color: #002140;
  color: white;
  padding: 4px 12px;
  font-size: 16px;

  &:hover {
    background-color: #fff;
    color: #002140;
    cursor: pointer;
  }

  @media screen and (max-width: 850px) {
    width: 160px;
    font-size: 14px;
    padding: 2px 6px;
  }
`;
