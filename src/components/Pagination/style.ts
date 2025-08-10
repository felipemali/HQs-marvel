import styled from "styled-components";
interface PageButtonProps {
  active: boolean;
}
export const PaginationContainer = styled.div`
  margin: 0 auto;
`;

export const ItemPagination = styled.div`
  padding: 10px;
  background-color: #f4f4f4;
  margin-bottom: 8px;
  border-radius: 4px;
`;

export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 16px;
`;

export const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<PageButtonProps>`
  padding: 6px 12px;
  background-color: ${({ active }) => (active ? "#333" : "#ccc")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
