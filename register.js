document.getElementById("form-register").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  axios
    .post("http://localhost:3000/register", {
      email,
      password: password,
    })
    .then(() => {
      location.replace("index.html");
      alert("Thêm người dùng thành công");
    })
    .catch((error) => {
      console.error(error);
      alert("Thêm người dùng thất bại");
    });
});
