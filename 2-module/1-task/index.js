function sumSalary(salaries) {
  let sum = 0;
  for (key in salaries)
   {
    if(Number.isFinite(salaries[key]))
      sum += salaries[key];
   }
   return sum == null ? 0 : sum;
}
