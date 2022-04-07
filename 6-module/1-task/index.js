/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
    this.tbody = this.deleteTr();
  }

  render() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const row = this.rows.map(item => {
      return `<tr>
        <td>${item.name}</td>
        <td>${item.age}</td>
        <td>${item.salary}</td>
        <td>${item.city}</td>
        <td><button>X</button></td>
      </tr>`;
    }).join("");

    table.appendChild(thead);

    thead.innerHTML = `<tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
      <th></th>
    </tr>`;

    table.appendChild(tbody);
    tbody.insertAdjacentHTML("beforeEnd", row);

    this.tbody = tbody;

    return table;
  }

  deleteTr() {
    this.tbody.addEventListener('click', event => {
      if (event.target.tagName === 'BUTTON') {
        event.target.parentNode.parentNode.remove();
      }
    });
  }

}
