function getMinMax(str) {
  let a = str.split(' ').filter(item => +item);
  return {
    min: Math.min(...a),
    max: Math.max(...a)
  }
}

