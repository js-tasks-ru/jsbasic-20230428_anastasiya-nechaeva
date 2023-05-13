function camelize(str) {
  return str.trim().split('-').map(function (list, index) {
    if (index == 0) {
      return list.toLowerCase();
    }
    return list[0].toUpperCase() + list.slice(1);
  }).join('');
}
