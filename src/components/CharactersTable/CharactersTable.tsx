import React from "react";
import styled from "styled-components";
import Paginator from "./Paginator";
import TableRow from "./TableRow";

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  background-color: #fff;
  border-collapse: collapse;
  text-transform: capitalize;
`;

const TableHeaderCell = styled.th`
  font-weight: 400;
  color: #757575;
  padding-block: 1rem;
`;

const TableContainer = styled.div`
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 1px 2px 0 rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 1px 2px 0 rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
`;

const PaginatorContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CharactersTable = ({
  children,
  headers,
  currentPage = 1,
  lastPage = 1,
  setPage,
}: CharactersTableProps) => {
  return (
    <>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              {headers.map((header, index) => (
                <TableHeaderCell key={`tableHeader-${header}-${index}`}>
                  {header}
                </TableHeaderCell>
              ))}
            </TableRow>
          </thead>
          <tbody>{children}</tbody>
        </Table>
      </TableContainer>
      <PaginatorContainer>
        <Paginator page={currentPage} lastPage={lastPage} setPage={setPage} />
      </PaginatorContainer>
    </>
  );
};

interface CharactersTableProps {
  children: React.ReactNode;
  headers: string[];
  currentPage: number;
  lastPage: number;
  setPage?: (page: number) => void;
}

export default CharactersTable;
