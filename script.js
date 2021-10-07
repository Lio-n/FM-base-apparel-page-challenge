(function main() {
  let form = document.querySelector("form");
  let input = document.querySelector("input");
  let regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
  let regexo =
    /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}\.[a-zA-Z]{1,3}$/;

  let formWarning = document.querySelector(".form__warning");
  let formError = document.querySelector(".form__error");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;

    let menuOpen = false;
    if ((!menuOpen && regex.test(value)) || regexo.test(value)) {
      formError.classList.add("remove");
      formWarning.classList.add("remove");
      menuOpen = true;
      console.log("True");
    } else {
      formError.classList.add("open");
      formWarning.classList.add("open");
      menuOpen = false;
    }
  });
})();
