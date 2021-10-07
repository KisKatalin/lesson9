let arr = [];
let btn = document.getElementById('btn-add');
let btn2 = document.getElementById('btn-edit');
let addUser = function () {
    let loginVar = document.getElementById('login');
    let passwordVar = document.getElementById('password');
    let emailVar = document.getElementById('email');
    let obj = new Person(loginVar.value, emailVar.value, passwordVar.value);
    arr.push(obj);
    document.getElementById('form').reset();
    render();
};
document.getElementById('btn-add').addEventListener('click', addUser);
let render = function () {
    let arrNew = document.getElementsByClassName('newTr');
    let length = arrNew.length;
    for (let u = 0; u < length; u++) {
        arrNew[0].remove();
    }
    for (let i = 0; i < arr.length; i++) {
        let j = i + 1;
        let arrI = arr[i];
        let row = '<tr class ="newTr"><td>' + j + '</td><td>' + arrI.login + '</td><td>' + arrI.password +
            '</td><td>' + arrI.email + '</td><td>' + '<input type="button" class="btnTable" id="btn-edit2" value="Edit" data-index-number="' + i + '"></input>' + '</td><td>' + '<input type="button" class="btnTable2" id="btn-delete" value="Delete" data-index-number="' + i
            + '"></input>' + '</td></tr>';
        let table = document.getElementById('table');
        table.innerHTML = table.innerHTML + row;
    }
    let btnArr = document.getElementsByClassName('btnTable2');
    for (let f = 0; f < btnArr.length; f++) {
        btnArr[f].addEventListener('click', deleteUser);
    }
    let btnArr2 = document.getElementsByClassName('btnTable');
    for (let y = 0; y < btnArr2.length; y++) {
        btnArr2[y].addEventListener('click', editUser);
    }
};
let deleteUser = function () {
    let x = this.dataset.indexNumber;
    arr.splice(x, 1);
    render();
};
let userIndex;
let editUser = function () {
    userIndex = this.dataset.indexNumber;
    let editObj = arr[userIndex];
    document.getElementById('login').value = editObj.login;
    document.getElementById('password').value = editObj.password;
    document.getElementById('email').value = editObj.email;
    document.getElementById('btn-add').style.display = 'none';
    document.getElementById('btn-edit').style.display = 'block';
};
let saveEditUser = function () {
    let loginVar = document.getElementById('login');
    ;
    let passwordVar = document.getElementById('password');
    ;
    let emailVar = document.getElementById('email');
    ;
    let obj = new Person(loginVar.value, emailVar.value, passwordVar.value);
    arr[userIndex] = obj;
    document.getElementById('form').reset();
    render();
    document.getElementById('btn-add').style.display = 'block';
    document.getElementById('btn-edit').style.display = 'none';
};
document.getElementById('btn-edit').addEventListener('click', saveEditUser);
class Person {
    login;
    email;
    password;
    constructor(login, email, password) {
        this.login = login;
        this.email = email;
        this.password = password;
    }
}
