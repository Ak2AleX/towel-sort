module.exports = function towelSort (matrix) {
  if (matrix == (undefined)) { 
    return [];} 
    else {
    return matrix.reduce((acc, cur, i) => {
    cur.sort((g, h) => !(i & 1) ? g - h : h - g).map(e => acc.push(e));
  return acc;
}, []);}
}