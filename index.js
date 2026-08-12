function loadStudents() {
  axios.get("http://localhost:3000/students").then((res) => {
    const html = res.data
      .map((student) => {
        return `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.email}</td>
            <td >
              <div class="flex items-center justify-center gap-2">
                <a href="edit.html" class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">Sua</a>
                <button onclick="deleteStudent(${student.id})"class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Xoa</button>
              </div>
              </td>

    </tr>
    `;
      })
      .join("");
    document.getElementById("students").innerHTML = html;
  });
}
loadStudents();

function deleteStudent(id) {
  const result = confirm("Ban co chac muon xoa khong?");
  if (result) {
    axios.delete(`http://localhost:3000/students/${id}`).then(() => {
      loadStudents();
    });
  }
}
