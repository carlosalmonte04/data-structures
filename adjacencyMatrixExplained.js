const values = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

function createAndGetAdjacencyMatrix(values) {
  let k = 0;
  let q = 0;
  const matrix = [];

  getIsConnected = (idxA, idxB) => {
    const valueA = values[idxA[0]][idxA[1]]
    const valueB = values[idxB[0]][idxB[1]]
    /*

      How are two nodes considered 'connected'? 
        1 - When two nodes immediately to the top, right, down or left side of current node

        - Next node indices (idxB) is the next up, right, down or left node compared to current
          node indices (idxA). This can be determined when there is a difference of 1 in the 
          indices being compared -- either positive or negative 1.

          The following nodes are all connected to "node":

                           -1
                        next node
                            ^
               -1           |           +1
            next node <-  node -> next node
                            |  
                            v
                        next node
                           +1

                        example a


        2 - When two nodes are on the opposite sides of their respective rows and columns

          - idxB is either on the opposite side of idxA's column or row, right, down or left node compared to current
          node indices (idxA). This can be determined when there is a difference of 1 in the 
          indices being compared -- either positive or negative 1.

        The following non-null nodes are considered connected:

        node on last row                
               |                                 
               v                                            
              null                      node on last column -> null -> node on first column
               |                                            
               v                                             example c
        node on first row  
            
            example b


    */
    const isSameColumn = idxA[1] === idxB[1];
    const isSameRow = idxA[0] === idxB[0];
    const isAdjacentRow = Math.abs(idxA[0] - idxB[0]) === 1 && isSameColumn;
    const isAdjacentColumn = isSameRow && Math.abs(idxA[1] - idxB[1]) === 1;
    const lastNodeOfCurrRowIdx = values[idxA[0]].length - 1;

    // top -> bottom
    // return 1 if current node is at the first row and next node is at last row and both nodes are on the same column
    if (idxA[0] === 0 && idxB[0] === values.length - 1 && isSameColumn) {
      return 1;
    }
    
    // left -> right
    // return 1 if current node is at the left column and next node is at last column and both nodes are on the same row
    if (idxA[1] === 0 && idxB[1] === lastNodeOfCurrRowIdx && isSameRow) {
      return 1;
    }
    
    // bottom -> top
    // return 1 if current node is at the last row and the next node is at the first row and both nodes are on the same column
    if (idxA[0] === values.length - 1 && idxB[0] === 0 && isSameColumn) {
      return 1;
    }

    // right -> left
    // return 1 if current node is at last column and next node is at first column and both nodes are one the same row
    if (idxA[1] === lastNodeOfCurrRowIdx && idxB[1] === 0 && isSameRow) {
      return 1;
    }

    if (isAdjacentRow || isAdjacentColumn) {
      return 1;
    }

    return 0
  }

  /*
    iterate through original array and find if the next node is connected
    then push the valueA to the respective row (p loop) and column (l loop)
  */
  const addNodeConnectionToMatrix = (valueA, idx) => {
    for (let p = 0; p < values.length; p++) {
      for (let l = 0; l < values[p].length; l++) {
        matrix[k].push(getIsConnected(idx, [p,l]));
      }
    } 
  }


  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values[i].length; j++) {
      const value = values[i][j];
      /*
        Going to push the value if row exists, otherwise, push the next value

        current matrix = []
        first iteration k = 0. if row (matrix[k]) does not exists then push a new empty row -> matrix.push([])
          matrix = [
            [],
          ]
                NOTE: this and the last iterations are special. In other iterations
                it will be necessary to add two or more node connections to the matrix, however,
                this loop for example, stablishes a connection with the same node (row "Ryu" <-/-> column "Ryu")
                which both happen to be at row[0] and column[0].

                        Ryu   E.Honda
                Ryu      0      1
                E.Honda  1
                ...

          matrix = [
            [0],
            []
          ]
        third iteration k = 2 push to matrix
          matrix = [
            [0,0],
            [0],
            []
          ]
        fourth iteration k = 3 push to matrix
          matrix = [
            [0,0,0],
            [0,0],
            [0],
            []
          ]
        fifth iteration k = 4 push to matrix
          matrix = [
            [0,0,0,0],
            [0,0,0],
            [0,0],
            [0],
            []
          ]

          ...
      */
      if (!matrix[k]) {
        matrix.push([]);
      }
      addNodeConnectionToMatrix(value, [i,j]);
      k++
    }
  }
  return matrix;
}

module.exports = createAndGetAdjacencyMatrix;

