import React from 'react';
import { Table } from '@mantine/core';

const StatsTable = ({ tableData, colorScheme }) => {
  const getTableColors = (colorScheme) => {
    switch (colorScheme) {
      case 'blue':
        return { stripedColor: 'lightblue', highlightOnHoverColor: 'blue' };
      case 'green':
        return { stripedColor: 'lightgreen', highlightOnHoverColor: 'green' };
      default:
        return { stripedColor: 'lightgray', highlightOnHoverColor: 'gray' };
    }
  };

  const { stripedColor, highlightOnHoverColor } = getTableColors(colorScheme);

  return (
    <>
      <Table
        horizontalSpacing="xl"
        verticalSpacing="md"
        data={tableData}
        striped
        highlightOnHover
        withTableBorder
        highlightOnHoverColor={highlightOnHoverColor}
        stripedColor={stripedColor}
      />
    </>
  );
};

export default StatsTable;
