import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/system';

const CustomTableCell = styled(TableCell)({
  padding: '8px 16px 8px 16px',
  color: '#808080'

});

const DataTable = ({ data, columns }) => {
  return (
    <TableContainer className="h-56 w-96 border border-none" >
      <Table className="border border-hidden" >
        <TableHead>
          <TableRow style={{ height: '10px' }}>
            {columns.map((column) => (
              <CustomTableCell key={column.id} className="border border-none" >{column.name}</CustomTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} style={{ height: '10px' }}>
              {columns.map((column, columnIndex) => (
                <CustomTableCell key={columnIndex} className="border border-hidden h-2.5" style={{ fontWeight: 'bold', height: '10px', color: 'black' }}>{row[column.id]}</CustomTableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default DataTable;
