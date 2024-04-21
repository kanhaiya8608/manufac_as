// Utility function to calculate the mean
export const calculateMean = (data) => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return +(sum / data.length).toFixed(3);
  };
  
  // Utility function to calculate the median
  export const calculateMedian = (data) => {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    
    if (sortedData.length % 2 === 0) {
      return +((sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2).toFixed(3);
    } else {
      return +sortedData[middleIndex].toFixed(3);
    }
  };
  
  export const calculateMode = (data) => {
    const frequencyMap = {};
  
    data.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });
  
    let maxFrequency = 0;
    let smallestMode = Infinity; 
    let modes = [];
  
    Object.entries(frequencyMap).forEach(([key, frequency]) => {
      if (frequency > maxFrequency) {
        modes = [Number(key)]; // Reset modes array if a new maximum frequency is found
        maxFrequency = frequency;
        smallestMode = Number(key); // Update smallestMode to the current key
      } else if (frequency === maxFrequency) {
        modes.push(Number(key)); // Add key to modes array if its frequency matches maxFrequency
        smallestMode = Math.min(smallestMode, Number(key)); // Update smallestMode if the current key is smaller
      }
    });
  
    // Return the smallest mode if there are multiple modes
    return modes.length > 1 ? [smallestMode] : modes;
  };
  
  // Function to calculate Gamma property for each point in the dataset
  export const calculateGamma = (data) => {
    return data.map((point) => ({
      ...point,
      Gamma: +(point.Ash * point.Hue / point.Magnesium).toFixed(3)
    }));
  };
  
  // Function to calculate class-wise mean, median, and mode of "Gamma"
  export const calculateGammaStats = (data) => {
    const gammaData = calculateGamma(data);
    const classWiseGamma = {};
  
    gammaData.forEach((point) => {
      const classKey = point.Alcohol;
      const gamma = point.Gamma;
  
      if (!classWiseGamma[classKey]) {
        classWiseGamma[classKey] = [];
      }
  
      classWiseGamma[classKey].push(gamma);
    });
  
    const computedStats = {};
  
    for (const key in classWiseGamma) {
      const gammaData = classWiseGamma[key];
      const mean = calculateMean(gammaData);
      const median = calculateMedian(gammaData);
      const mode = calculateMode(gammaData);
  
      computedStats[key] = { mean, median, mode };
    }
  
    return computedStats;
  };
  