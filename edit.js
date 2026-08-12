const params = new URLSearchParams(window.location.search);
const id = params.get("id");
// addStudent();
document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  console.log(name, age);
  axios
    .put(`http://localhost:3000/students/${id}`, {
      name: name,
      age: age,
      email: email,
    })
    .then(() => {
      alert("update thanh cong");
    });
});
