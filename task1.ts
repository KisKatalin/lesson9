let arr: Array<object> = [];
let btn: HTMLElement = document.getElementById('btn-add');
let btn2: HTMLElement = document.getElementById('btn-edit');


let addUser = function () {
  let loginVar: HTMLElement = document.getElementById('login');
  let passwordVar: HTMLElement = document.getElementById('password');
  let emailVar: HTMLElement = document.getElementById('email');
  let obj: Person = new Person((<HTMLInputElement>loginVar).value, (<HTMLInputElement>emailVar).value, (<HTMLInputElement>passwordVar).value)
  arr.push(obj);
  (<HTMLFormElement>document.getElementById('form')).reset();
  render();
}
document.getElementById('btn-add').addEventListener('click', addUser);

let render = function () {
  let arrNew: HTMLCollectionOf<Element> = document.getElementsByClassName('newTr');
  let length: number = arrNew.length;
  for (let u = 0; u < length; u++) {
    arrNew[0].remove();
  }

  for (let i = 0; i < arr.length; i++) {
    let j: number = i + 1;
    let arrI : Person = arr[i] as Person;
    let row: string = '<tr class ="newTr"><td>' + j + '</td><td>' + arrI.login + '</td><td>' + arrI.password +
      '</td><td>' + arrI.email + '</td><td>' + '<input type="button" class="btnTable" id="btn-edit2" value="Edit" data-index-number="' + i + '"></input>' + '</td><td>' + '<input type="button" class="btnTable2" id="btn-delete" value="Delete" data-index-number="' + i
      + '"></input>' + '</td></tr>';
    let table: HTMLTableElement = document.getElementById('table') as HTMLTableElement;
    table.innerHTML = table.innerHTML + row;
  }
  let btnArr: HTMLCollectionOf<Element> = document.getElementsByClassName('btnTable2');
  for (let f = 0; f < btnArr.length; f++) {
    btnArr[f].addEventListener('click', deleteUser)
  }
  let btnArr2: HTMLCollectionOf<Element> = document.getElementsByClassName('btnTable');
  for (let y = 0; y < btnArr2.length; y++) {
    btnArr2[y].addEventListener('click', editUser)
  }
}

let deleteUser = function () {
  let x = this.dataset.indexNumber;
  arr.splice(x, 1);
  render();
}
let userIndex: any;
let editUser = function () {
  userIndex = this.dataset.indexNumber;
 let editObj : Person = arr[userIndex] as Person;
  (<HTMLInputElement>document.getElementById('login')).value = editObj.login;
  (<HTMLInputElement>document.getElementById('password')).value = editObj.password;
  (<HTMLInputElement>document.getElementById('email')).value = editObj.email;
  document.getElementById('btn-add').style.display = 'none';
  document.getElementById('btn-edit').style.display = 'block';
}

let saveEditUser = function () {
  let loginVar: HTMLElement = document.getElementById('login') as HTMLElement;;
  let passwordVar: HTMLElement = document.getElementById('password') as HTMLElement;;
  let emailVar: HTMLElement = document.getElementById('email') as HTMLElement;;
  let obj: Person = new Person((<HTMLInputElement>loginVar).value, (<HTMLInputElement>emailVar).value, (<HTMLInputElement>passwordVar).value)
  arr[userIndex] = obj;
  (<HTMLFormElement>document.getElementById('form')).reset();
  render();
  document.getElementById('btn-add').style.display = 'block';
  document.getElementById('btn-edit').style.display = 'none';
}
document.getElementById('btn-edit').addEventListener('click', saveEditUser);

class Person {
  public login: string;
  public email: string;
  public password: string;
  constructor(login: string, email: string, password: string) {
    this.login = login;
    this.email = email;
    this.password = password;
  }
}