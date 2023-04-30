function factorial(n) {
  if (n > 1) {
    return n * factorial(--n);
  }
  else
    return 1;
}

