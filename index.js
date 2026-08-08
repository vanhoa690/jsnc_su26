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
            </tr>
    `;
    })
    .join("");
});
