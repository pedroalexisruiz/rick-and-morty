import React from "react";
import styled from "styled-components";

const TableRow = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  > th,
  > td {
    text-align: start;
    padding-inline: 1.6rem;
    vertical-align: top;
    border-top: 0;
  }
`;

export default TableRow;
