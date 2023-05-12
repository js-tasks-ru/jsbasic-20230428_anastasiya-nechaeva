function getMinMax(str) {
  let a = str.split(' ').filter(item => +item);
  return result = {
    min: Math.min(...a),
    max: Math.max(...a)
}
}

