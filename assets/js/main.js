localStorage.arr = 'fadfasd';
var x =localStorage.getItem('arr') = 'asdasd';
console.log(x)

let arr = [
  { id: 1, name: "Tran Tu", age: 36, work: "Developer" },
  { id: 2, name: "Ngoc Thanh", age: 15, work: "Doctor" },
  { id: 3, name: "Huy Hoang", age: 36, work: "Developer" },
  { id: 4, name: "Tran Tu", age: 36, work: "Tester" },
];

var tbody = document.querySelector("tbody");

function start() {
  getData();
}
start();

function getData() {
  var html = arr.map((item, index) => {
    return `<tr><td>${index + 1}</td><td>${item.name}</td><td>${item.age}</td><td>${item.work}</td><td><button class='change-btn' onclick='changeData(${index})'>Sửa</button></td><td><button class='del-btn' onclick='removeData(${index})' >Xóa</button></td></tr>`;
  });
  tbody.innerHTML = html.join("");
}

function addData() {
  var name = document.getElementById("name").value,
    age = document.getElementById("age").value,
    work = document.getElementById("work").value;
  var data = {
    id: arr.length + 1,
    name: name,
    age: age,
    work: work
  }
  arr.push(data);
  getData()
}

function removeData(arrIndex) {
  arr.splice(arrIndex, 1);
  getData();
}


function changeData(arrIndex) {
  if (document.getElementById('add-btn')) {
    document.getElementById('add-btn').id = 'update-btn';
  }
  document.getElementById('name').value = arr[arrIndex].name;
  document.getElementById('age').value = arr[arrIndex].age;
  document.getElementById('work').value = arr[arrIndex].work;
  document.querySelectorAll('input').forEach((item) => {
    item.style.backgroundColor = '#ffadc3';
  })
  
  document.getElementById('update-btn').innerText = 'Cập nhật';
  document.getElementById('update-btn').setAttribute('onclick', `updateData(${arrIndex})`);
}

function updateData(arrIndex) {
  if (document.getElementById('update-btn')) {
    document.getElementById('update-btn').id = 'add-btn';
  }
  arr[arrIndex].name = document.getElementById('name').value;
  arr[arrIndex].age = document.getElementById('age').value;
  arr[arrIndex].work = document.getElementById('work').value;
  getData();
  document.getElementById('add-btn').innerText = 'Thêm mới';
  document.getElementById('add-btn').setAttribute('onclick', `addData()`);
}
