const id = new URLSearchParams(window.location.search).get("id");

if (id) {
  axios
    .get(`http://localhost:3000/students/${id}`)
    .then((res) => {
      // console.log(res.data);
      document.getElementById("name").value = res.data.name;
      document.getElementById("age").value = res.data.age;
      document.getElementById("email").value = res.data.email;
    })
    .catch(() => {
      alert("error");
    });
}

document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

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
