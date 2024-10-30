// A.페이지가 로드 될 때 XMLHttpRequest 객체를 이용하여 AJAX 통신을 한다.
window.onload = function () {
  if (!document.querySelector(".content-movie-list-ul")) return;

  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "./data/movie.json";

  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json")

  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
      if(xhr.status === 200) {
        const resJson = JSON.parse(xhr.responseText);
        const movieData = resJson.movies

        let movieList = document.querySelector(".content-movie-list-ul");
        for(let i = 0; i < movieData.length; i++) {
          let movieItem = document.createElement("li")
          
          movieItem.innerHTML = `
            <div>
              <img src="${movieData[i]["img"]}" alt=""/>
            </div>
            <div>
              <div>${movieData[i]["title"]}</div>
              <hr>
              <div>${movieData[i]["genre"]}</div>
              <div>${movieData[i]["director"]}</div>
              <div>${movieData[i]["runningTime"]}</div>
              <button type="button">찜</button>
            </div>
          `;
          movieList.appendChild(movieItem);
        }


      }
    }
  }

  xhr.send()

}