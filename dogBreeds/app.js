const imagesSection = document.getElementById("images");
const images = "";
const select = document.getElementById("dogs");
const options = select.querySelectorAll("option");
console.log(options);

select.addEventListener("change", (evt) => {
  console.log(evt.target.value);
  fetch(`https://dog.ceo/api/breed/${evt.target.value}/images/random`)
    .then((res) => res.json())
    .then((result) => {
      imagesSection.innerHTML = `<img src="${result.message}">`;
    })
    .catch((err) => console.log(err));
});
