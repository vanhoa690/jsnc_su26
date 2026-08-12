console.log("javascript");
let name = "hoadv"; // string
const age = 35; // number
let money = 100;
let isStuding = true; // boolean

money = 50;

const yearCong = 2004;
console.log(name);

// alert("Xin chào JavaScript"); // sau them thanh cong, co loi xay ra
// thay doi du lieu HTML: innerHTML

const h1 = document.getElementById("title");
console.log(h1);
const title = "Laptop - Mobile";
// ``  dấu cạnh số 1, ${}
h1.innerHTML = `Danh sách sản phẩm ${title}`;

// object
const student = {
  name: "hoadv",
  age: 30,
  isStudent: true,
};
console.log(student.name);
h1.innerHTML = `Danh sách sinh viên ${student.name}`;

const book = {
  title: "Hoa vàng trên cỏ xanh",
  author: "Nguyễn Nhật Anh",
  cover: " ",
  year: 1999,
};
document.getElementById("titleBook").innerHTML = book.title;
document.getElementById("titleBook").innerHTML = `Tên cuốn sách ${book.title}`;
// const tbody = document.getElementById("student");
// console.log(tbody);
// ``
const arr = ["A", "B", "C"];
console.log(arr.join("")); //ABC
const student = {
  id: 10,
  name: "hoadv",
};
// tbody.innerHTML = `
//             <tr class="hover:bg-gray-50">
//               <td class="px-4 py-2 border border-gray-300">${student.id}</td>
//               <td id="titleBook" class="px-4 py-2 border border-gray-300">
//                 ${student.name}
//               </td>
//               <td class="px-4 py-2 border border-gray-300">
//                 <div class="flex items-center justify-center gap-2">
//                   <a
//                     href="#"
//                     class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
//                   >
//                     Edit
//                   </a>

//                   <button
//                     class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
// `;

// array: danh sách, số nhiều, list []
// const students = [
//   {
//     id: 1,
//     name: "hoadv",
//     age: 11,
//   },
//   {
//     id: 2,
//     name: "namdv",
//     age: 22,
//   },
// ];

// const html = students.map((item) => {
//   return `
//     <tr class="hover:bg-gray-50">
//               <td class="px-4 py-2 border border-gray-300">${item.id}</td>
//               <td  class="px-4 py-2 border border-gray-300">
//                 ${item.name}
//               </td>
//                <td  class="px-4 py-2 border border-gray-300">
//                 ${item.age}
//               </td>
//             </tr>

//   `;
// });

// document.getElementById("info").innerHTML = html.join("");

// fetch
// axios :call API
function loadData() {
  axios.get("http://localhost:3000/students").then((res) => {
    console.log("call API", res.data);
    const students = res.data;
    document.getElementById("info").innerHTML = students
      .map((item) => {
        return `
        <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${item.id}</td>
              <td  class="px-4 py-2 border border-gray-300">
                ${item.name}
              </td>
               <td  class="px-4 py-2 border border-gray-300">
                ${item.age}
              </td>
              <td>
               <button onclick="deleteItem(${item.id})">Xoá</button>
              </td>
            </tr>
    `;
      })
      .join("");
  });
}

loadData();

function deleteItem(id) {
  console.log(id);
  axios.delete(`http://localhost:3000/students/${id}`).then(() => {
    loadData();
  });
}
