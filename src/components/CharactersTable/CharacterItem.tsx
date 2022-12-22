import React from "react";
import TableRow from "./TableRow";

interface CharacterItemProps {
  cells: React.ReactNode[];
}

const CharacterItem = ({ cells }: CharacterItemProps) => {
  return (
    <TableRow>
      {cells.map((cell, index) => (
        <td key={`cell-${index}`}>{cell}</td>
      ))}
    </TableRow>
  );
};

export default CharacterItem;
