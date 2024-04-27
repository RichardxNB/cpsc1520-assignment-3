async function appInit() {

    const res = await fetch("https://661ca41ee7b95ad7fa6ab2bc.mockapi.io/albums")
    return await res.json();
}



appInit();

const favoriteAlbumsButton  = document.querySelector("#favorites-button");
const searchAlbumsButton = document.querySelector("#search-button");
const favouriteAlbums = document.querySelector("#favorites-tab");
const searchAlbums = document.querySelector("#search-tab");

favoriteAlbumsButton.addEventListener("click", onSelectFavoriteAlumbs);
function onSelectFavoriteAlumbs(e) {
e.preventDefault();
searchAlbumsButton.classList.remove("active");
favoriteAlbumsButton.classList.add("active");
favouriteAlbums.classList.remove("d-none");
searchAlbums.classList.add("d-none");
}

searchAlbumsButton.addEventListener("click", onSelectSearchAlbums);
function onSelectSearchAlbums(e) {
    e.preventDefault();
    searchAlbumsButton.classList.add("active");
    favoriteAlbumsButton.classList.remove("active");
    favouriteAlbums.classList.add("d-none");
    searchAlbums.classList.remove("d-none");
}