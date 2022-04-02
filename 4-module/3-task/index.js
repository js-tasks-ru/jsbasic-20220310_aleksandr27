function highlight(table) {
  let td = table.getElementsByTagName("td");

    for (let i = 0; td.length > i; i++ ) {
      let tdName = td[i].innerHTML;
      let attribute = td[i].getAttribute("data-available")

      if (attribute == "true") {
        td[i].parentNode.classList.add("available");
      } else if (attribute == "false") {
        td[i].parentNode.classList.add("unavailable");
      }

      if ( td[i].hasAttribute("data-available") ) {
        td[i].parentNode.removeAttribute("hidden");
      } else {
        td[i].parentNode.setAttribute("hidden", true);
      }

      if (tdName == "m") {
        td[i].parentNode.classList.add("male");
      }

      if (tdName == "f") {
        td[i].parentNode.classList.add("female");
      }

      if (tdName < 18) {
        td[i].parentNode.style.textDecoration = "line-through";
      }

    }
  
  return table
}
