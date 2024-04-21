import React from 'react';
import StatsTable from './StatsTable';

const WineStats = ({ classStats, gammaStats }) => {
  const flavanoidsTableData = {
    head: [
      'Measure',
      'Class 1',
      'Class 2',
      'Class 3'
    ],
    body: [
      [<b>Flavanoids Mean</b>, classStats['1'].mean.toFixed(3), classStats['2'].mean.toFixed(3), classStats['3'].mean.toFixed(3)],
      [<b>Flavanoids Median</b>, classStats['1'].median.toFixed(3), classStats['2'].median.toFixed(3), classStats['3'].median.toFixed(3)],
      [<b>Flavanoids Mode</b>, classStats['1'].mode.join(', '), classStats['2'].mode.join(', '), classStats['3'].mode.join(', ')]
    ]
  };

  const gammaTableData = {
    head: [
      'Measure',
      'Class 1',
      'Class 2',
      'Class 3'
    ],
    body: [
      [<b>Gamma Mean</b>, gammaStats['1'].mean.toFixed(3), gammaStats['2'].mean.toFixed(3), gammaStats['3'].mean.toFixed(3)],
      [<b>Gamma Median</b>, gammaStats['1'].median.toFixed(3), gammaStats['2'].median.toFixed(3), gammaStats['3'].median.toFixed(3)],
      [<b>Gamma Mode</b>, gammaStats['1'].mode.join(', '), gammaStats['2'].mode.join(', '), gammaStats['3'].mode.join(', ')]
    ]
  };

  return (
    <>
      <h1>Flavanoids Stats</h1>
      <StatsTable tableData={flavanoidsTableData} colorScheme="blue" />

      <h1>Gamma Stats</h1>
      <StatsTable tableData={gammaTableData} colorScheme="green" />
    </>
  );
}

export default WineStats;
