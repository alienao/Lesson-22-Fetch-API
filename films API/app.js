const createForm = function (
  title,
  description,
  director,
  producer,
  releaseDate
) {
  const filmFm = `<div id="film-fm">
      <label for="title"> Title: </label>
      <input type="text" id="title" class="film-input" value="${title}"/><br/>           
      <label for="description"> Description: </label>
      <textarea id="description" name="description" rows="10">${description}</textarea><br/>
      <label for="director"> Director: </label> 
      <input type="text" id="director" class="film-input"  value="${director}"/><br/>
      <label for="producer"> Producer: </label> 
      <input type="text" id="producer" class="film-input"  value="${producer}"/><br/>
      <label for="release-date"> Release date: </label> 
      <input type="text" id="release-date" class="film-input"  value="${releaseDate}"/>
      </div>`;
  return filmFm;
};

const BASE_URL = "https://ghibliapi.herokuapp.com/films/";
const getFilms = function () {
  fetch(BASE_URL)
    .then((resp) => {
      return resp.json();
    })
    .then((result) => {
      if (result.length > 0) {
        const container = document.getElementById("container");
        let res = result.reduce((acc, elem) => {
          acc += createForm(
            elem.title,
            elem.description,
            elem.director,
            elem.producer,
            elem.release_date
          );
          return acc;
        }, "");
        container.insertAdjacentHTML("beforeend", res);
      }
    });
};

window.onload = () => getFilms();
