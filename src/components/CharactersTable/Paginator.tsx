import React from "react";
import styled from "styled-components";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-right: 0.8rem;
  }
`;

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 50px;
`;

const PaginationLabel = styled.label`
  font-size: 1rem;
`;

const Paginator = ({ page, setPage, lastPage }) => {
  const goToFirstPage = () => setPage(1);

  const goToLastPage = () => setPage(lastPage);

  const incrementPage = () => page < lastPage && setPage(page + 1);

  const decrementPage = () => page > 1 && setPage(page - 1);

  return (
    <PaginationContainer>
      <PaginationButton onClick={() => goToFirstPage()}>
        <FiChevronsLeft />
      </PaginationButton>
      <PaginationButton onClick={() => decrementPage()}>
        <RxChevronLeft />
      </PaginationButton>
      <PaginationLabel>{page}</PaginationLabel>
      <PaginationButton onClick={incrementPage}>
        <RxChevronRight />
      </PaginationButton>
      <PaginationButton onClick={goToLastPage}>
        <FiChevronsRight />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Paginator;
