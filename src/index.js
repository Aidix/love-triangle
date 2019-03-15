/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var a,b,c,count = 0;
  for(var i = 0; i < (preferences.length)+1; i++){
    a = i+1;
    b = preferences[a-1];
    c = preferences[b-1];
    if( (preferences[c-1] == a) && (a != b) ){
      count++;
    }
  }
  return(count/3);
};
