const getAdjacencyMatrix = require('../adjacencyMatrix');

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

adjacencyMatrix = [
 [0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
 [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
 [0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
 [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
 [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
 [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
 [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
 [0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
 [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
 [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
 [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
 [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0]
];

describe("graph solution", function(){
  it("should output the accurate adjacency matrix", function(){  
    expect(getAdjacencyMatrix(fighters)).toStrictEqual(adjacencyMatrix)
  })
});















