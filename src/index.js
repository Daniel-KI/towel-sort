
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var result =[];
  if(!matrix) return result;
  for (var i = 0; i < matrix.length; i++){
    if(i % 2 == 1){
      matrix[i] == matrix[i].reverse();
    }
    for(var j = 0; j < matrix[i].length; j++){
      result.push(matrix[i][j])
    }
  }
  return result;
}
