// most popular movies list api
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

// search movie list api
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


// dom
const moviebox = document.querySelector("#movie-box")



//getmovies function
const getmovies = async (api) => {
    const responce = await fetch(api)
    const data = await responce.json()
    // console.log(data);
    showmovies(data.results)
}
getmovies(APIURL)




//showmovies function
const showmovies = (data) => {
    moviebox.innerHTML = ""
    data.forEach((item) => {
        const box = document.createElement("div")
        box.classList.add("box")
        box.innerHTML = ` <img src="${IMGPATH + item.poster_path}" alt="">
        <div class="overlay">
            <div class="title">
                <h2>${item.original_title}</h2>
                <span>${item.vote_average}</span>
            </div>
            <h3>Overview :</h3>
            <p> ${item.overview}</p>
        </div> `
        moviebox.appendChild(box)

    })
}


document.querySelector("#search").addEventListener("keyup", (event) => {
    if (event.target.value != "") {
        getmovies(SEARCHAPI + event.target.value)
    } else {
        getmovies(APIURL)
    }

})