// let arr = [];
// var tbody = document.querySelector("tbody");

// function start() {
//   if (localStorage.getItem('arr')) {
//     arr = JSON.parse(localStorage.getItem("arr"))
//   } else {
//     arr = []
//   }
//   getData();
// }
// start();

// function getData() {
//   var html = arr.map((item, index) => {
//     return `<tr><td>${index + 1}</td><td>${item.name}</td><td>${item.age}</td><td>${item.work}</td><td><button class='change-btn' onclick='changeData(${index})'>Sửa</button></td><td><button class='del-btn' onclick='removeData(${index})' >Xóa</button></td></tr>`;
//   });
//   tbody.innerHTML = html.join("");
//   document.getElementById('name').value = '';
//   document.getElementById('age').value = '';
//   document.getElementById('work').value = '';
// }

// function addData() {
//   var name = document.getElementById("name").value,
//     age = document.getElementById("age").value,
//     work = document.getElementById("work").value;
//   var data = {
//     id: arr.length + 1,
//     name: name,
//     age: age,
//     work: work
//   }
//   arr.push(data);
//   console.log(arr)
//   localStorage.setItem('arr', JSON.stringify(arr))
//   getData()
// }

// function removeData(arrIndex) {
//   arr.splice(arrIndex, 1);
//   localStorage.setItem('arr', JSON.stringify(arr))
//   getData();
// }

// function changeData(arrIndex) {
//   if (document.getElementById('add-btn')) {
//     document.getElementById('add-btn').id = 'update-btn';
//   }
//   document.getElementById('name').value = arr[arrIndex].name;
//   document.getElementById('age').value = arr[arrIndex].age;
//   document.getElementById('work').value = arr[arrIndex].work;
//   document.querySelectorAll('input').forEach((item) => {
//     item.style.backgroundColor = '#ffadc3';
//   })

//   document.getElementById('update-btn').innerText = 'Cập nhật';
//   document.getElementById('update-btn').setAttribute('onclick', `updateData(${arrIndex})`);
// }

// function updateData(arrIndex) {
//   if (document.getElementById('update-btn')) {
//     document.getElementById('update-btn').id = 'add-btn';
//   }
//   arr[arrIndex].name = document.getElementById('name').value;
//   arr[arrIndex].age = document.getElementById('age').value;
//   arr[arrIndex].work = document.getElementById('work').value;
//   localStorage.setItem('arr', JSON.stringify(arr))
//   getData();
//   document.getElementById('add-btn').innerText = 'Thêm mới';
//   document.getElementById('add-btn').setAttribute('onclick', `addData()`);
// }

/*
Idea:
- Tạo layout trong HTML hoặc render cùng dữ liệu trong js
- Truyền data từ các key trong API đến đúng các element
- Sử dụng vòng lặp (each or for ?!) để hiển thị list danh sách
- Sử dụng các method cắt hoặc lấy chuỗi để lấy id video embed

*/

document.querySelector(".getAPI").onclick = function () {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      var meal = data.meals[0];
      {
        document.querySelector(".box-img__img").src = meal.strMealThumb;
        document.querySelector(".intro-heading").innerText = meal.strMeal;
        document.querySelector(".intro-description").innerText =
          meal.strInstructions;
        document.querySelector(".category").innerText = meal.strCategory;
        document.querySelector(".area").innerText = meal.strArea;
        document.querySelector(".tags").innerText = meal.strTags;
      }
      var ingredients = document.querySelector('.ingredients-list');
      for (var i = 1; i < 100; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.innerHTML += `<li class=\"ingredients-item\">${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}</li>`;
        } else {
          break;
        }
      }
      var videoUrl = meal.strYoutube.substr(meal.strYoutube.indexOf('?v=') + 3);
      document.querySelector('.recipe-video').src = `https://www.youtube.com/embed/${videoUrl}`;
      var x = document.querySelectorAll('.hidden');
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'inline-block';
      }
    })
    .catch(() => {
      console.log("Có lỗi đã xảy ra!");
    });
  }
// setInterval(getAPI, 3000)
