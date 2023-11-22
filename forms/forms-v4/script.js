document.querySelector("#mail").addEventListener("keyup", (event) => {
    event.target.validity.valid
      ? event.target.classList.remove("error")
      : event.target.classList.add("error");
});