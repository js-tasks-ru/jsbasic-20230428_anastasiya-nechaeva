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

 3
 4
 5
 6
 7
 8
 9
 10
 11
 12
 13
 14
 15
 16
 17
 18
 19
 20
 21
 22
 23
 24
 25
 26
 27
 28
 29
 30
 31
 32
 33
 34
 35
 36
 37
 38
 39
 40
 41
 42
 export default class UserTable {
   rows;
   elem;
  
   constructor(rows) {
     this.rows = rows;
     this.elem = document.createElement('table');
     this.html();
     this.deleteRow();
   }
   
   html() {
    this.elem.innerHTML = `      
         <thead>
         <tr>
             <th>Имя</th>
             <th>Возраст</th>
             <th>Зарплата</th>
             <th>Город</th>
             <th></th>
         </tr>
         </thead>
           <tbody>
           ${this.rows.map(row =>
             `
           <tr>
           <td>${row.name}</td>
           <td>${row.age}</td>
           <td>${row.salary}</td>
           <td>${row.city}</td>
           <td><button>X</button></td>
         </tr>
           `).join('')}
       </tbody>`
   }
   deleteRow() {
     for (const button of this.elem.querySelectorAll("button"))
       button.addEventListener('click', (e) =>
       e.target.closest("tr").remove())
   }
 }