document.getElementById("form-add").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  axios
    .post("http://localhost:3000/students", {
      name: name,
      age: age,
      email: "hoadv@gmail.com",
    })
    .then(() => {
      location.replace("index.html");
      alert("Thêm bộ phim thành công");
    })
    .catch((error) => {
      console.error(error);
      alert("Thêm bộ phim thất bại");
    });
});
