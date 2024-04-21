import React, { useState, useEffect } from 'react';
import data from './data/data.json';
import { Box } from '@mantine/core';
import WineStats from './components/WineStats';
import { calculateMean, calculateMedian, calculateMode, calculateGammaStats } from './utils/calculations';

function App() {
  const [classStats, setClassStats] = useState({});
  const [gammaStats, setGammaStats] = useState({});

  
  useEffect(() => {
    const classWiseStats = {};
    const gammaStats = calculateGammaStats(data);
    
    data.forEach((wine) => {
      const classKey = wine.Alcohol;
      const flavanoids = parseFloat(wine.Flavanoids);
      const gamma = +(parseFloat(wine.Ash) * parseFloat(wine.Hue) / parseFloat(wine.Magnesium)).toFixed(3);
      
      if (!isNaN(flavanoids)) {
        if (!classWiseStats[classKey]) {
          classWiseStats[classKey] = [];
        }
        classWiseStats[classKey].push(flavanoids);
      }
      
      if (!isNaN(gamma)) {
        if (!classWiseStats[`gamma_${classKey}`]) {
          classWiseStats[`gamma_${classKey}`] = [];
        }
        classWiseStats[`gamma_${classKey}`].push(gamma);
      }
    });

    const computedStats = {};
    for (const key in classWiseStats) {
      const data = classWiseStats[key];
      const mean = calculateMean(data);
      const median = calculateMedian(data);
      const mode = calculateMode(data);
      computedStats[key] = { mean, median, mode };
    }

    setClassStats(computedStats);
    setGammaStats(gammaStats);
  }, []);

  return (
    <Box p={{ base: 'xs', sm: 'md', lg: 'xl' }}>
      {Object.keys(classStats).length > 0 && Object.keys(gammaStats).length > 0 ? (
        <WineStats classStats={classStats} gammaStats={gammaStats} />
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
}

export default App;
