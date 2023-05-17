function highlight(table) {
  let rows = table.children[1].rows;
  for (let tr of rows) {
    let a = tr.cells[3];
    if (a.hasAttribute("data-available")) {
      if (a.dataset.available == "true") {
        tr.classList.add('available');
      }
      else if (a.dataset.available == "false") {
        tr.classList.add('unavailable');
      }
    }
    else
      tr.setAttribute('hidden', 'true');

    let g = tr.cells[2].textContent;
    if (g === "m") {
      tr.classList.add("male");
    }
    else
      tr.classList.add("female");

    let age = tr.cells[1].textContent;
    if (age < 18)
      tr.style.textDecoration = "line-through";
  }
}