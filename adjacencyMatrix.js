const values = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

function createAndGetAdjacencyMatrix(values){
  let k = 0;
  const matrix = [];

  getIsConnected = (idxA, idxB) => {
    const isNextRow = Math.abs(idxA[0] - idxB[0]) === 1 && idxA[1] === idxB[1];
    const isNextColum = idxA[0] === idxB[0] && Math.abs(idxA[1] - idxB[1]) === 1;

    if (idxA[0] === 0 && idxB[0] === values.length - 1 && idxA[1] === idxB[1]) {
      return 1;
    }
    
    if (idxA[1] === 0 && idxB[1] === values[idxA[0]].length - 1 && idxA[0] === idxB[0]) {
      return 1;
    }
    
    if (idxA[0] === values.length - 1 && idxB[0] === 0 && idxA[1] === idxB[1]) {
      return 1;
    }

    if (idxA[1] === values[idxA[0]].length - 1 && idxB[1] === 0 && idxA[0] === idxB[0]) {
      return 1;
    }

    if (isNextRow || isNextColum) {
      return 1;
    }
    isConnected= 0;
    return 0
  }

  const addNodeToMatrix = (value, idx) => {
    for (let p = 0; p < values.length; p++) {
      for (let l = 0; l < values[p].length; l++) {
        const isConnected = getIsConnected(idx, [p,l]);

        matrix[k].push(isConnected);
      }
    }
    
  }


  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      const value = values[i][j];
      if (!matrix[k]) {
        matrix.push([]);
      }
      addNodeToMatrix(value, [i,j]);
      k++
    }
  }
  return matrix;
}

module.exports = createAndGetAdjacencyMatrix;
