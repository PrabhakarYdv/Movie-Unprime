const leftArrow = document.querySelector(".fa-angle-left")
const rightArrow = document.querySelector(".fa-angle-right")
const popularCards = document.querySelector(".popular_cards")
const searchSuggestion = document.querySelector(".search-suggestion")
const searchInput = document.getElementById("search_input")
const btnPlay = document.getElementById("play")
const btndownload = document.getElementById("download_main")
const navHome = document.getElementById("home")
const navMovies = document.getElementById("movies")
const navSeries = document.getElementById("series")
const MOVIE_URL = "../movie.json"

// Scrool Left and Right
leftArrow.addEventListener("click", () => {
    popularCards.scrollLeft -= 140
})
rightArrow.addEventListener("click", () => {
    popularCards.scrollLeft += 140
})

// Fething all Movies

fetch(MOVIE_URL).then(Response => Response.json())
    .then((data) => {
        data.forEach((elements, index) => {
            let { name, im08, date, sposter, bposter, genre, url } = elements;
            let movieCard = document.createElement("a")
            movieCard.classList.add("popular_card")
            movieCard.href = url
            movieCard.target = "_blank"
            movieCard_html = `<img src="${sposter}" alt="${name}" class="popular_poster">
                    <div class="rest_card">
                        <img src="${bposter}" alt="${name}">
                        <div class="rest_card_cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>IM08</span><i class="fa-solid fa-star"> ${im08}</i></h3>
                            </div>
                        </div>
                    </div>
            `
            movieCard.innerHTML = movieCard_html
            popularCards.appendChild(movieCard)
        });

        document.getElementById("title").innerText = data[0].name
        document.getElementById("gen").innerText = data[0].genre
        document.getElementById("date").innerText = data[0].data
        document.getElementById("rating").innerHTML = `<span>IM08</span><i class="fa-solid fa-star"> ${data[0].im08}</i>`

        // Searching Movies

        data.forEach((elements) => {
            let { name, im08, date, sposter, genre, url } = elements;

            searchCard = document.createElement("a")
            searchCard.classList.add("search-card")
            searchCard.href = url
            searchCard_html = `<img id="search-image" src="${sposter}" alt="${name}">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date}, <span>IM08</span><i class="fa-solid fa-star"> ${im08}</i></p>
                        </div>
            `
            searchCard.innerHTML = searchCard_html
            searchSuggestion.appendChild(searchCard)

        })

        searchInput.addEventListener("keyup", () => {
            let inputValue = searchInput.value.toLowerCase()
            let allData = searchSuggestion.getElementsByTagName("a")
            // console.log(inputData)
            // console.log(allData)
            for (let index = 0; index < allData.length; index++) {
                let textData = allData[index].getElementsByClassName("cont")[0]
                let textValue = textData.textContent || textData.innerText
                if (textValue.toLowerCase().indexOf(inputValue) > -1) {
                    allData[index].style.display = "flex"
                    searchSuggestion.style.visibility = "visible"
                    searchSuggestion.style.opacity = 1
                }

                else {
                    allData[index].style.display = "none"
                }
                if (searchInput.value == "") {
                    allData[index].style.display = "none"
                    searchSuggestion.style.visibility = "hidden"
                    searchSuggestion.style.opacity = 0
                }

            }
        })

        let video = document.getElementsByTagName("video")[0]
        btnPlay.addEventListener("click", () => {
            if (video.paused) {
                video.play()
                play.innerHTML = `Pause <i class="fa-solid fa-pause"></i>`
            }
            else {
                video.pause()
                play.innerHTML = `Watch <i class="fa-solid fa-play"></i>`
            }
        })


        // Navigation Flilter
        navHome.addEventListener("click", () => {
            popularCards.innerHTML = ""
            let home_arr = data.filter(items => {
                return items
            })
            home_arr.forEach((elements, index) => {
                let { name, im08, date, sposter, bposter, genre, url } = elements;
                let movieCard = document.createElement("a")
                movieCard.classList.add("popular_card")
                movieCard.href = url
                movieCard.target = "_blank"
                movieCard_html = `<img src="${sposter}" alt="${name}" class="popular_poster">
                        <div class="rest_card">
                            <img src="${bposter}" alt="${name}">
                            <div class="rest_card_cont">
                                <h4>${name}</h4>
                                <div class="sub">
                                    <p>${genre}, ${date}</p>
                                    <h3><span>IM08</span><i class="fa-solid fa-star"> ${im08}</i></h3>
                                </div>
                            </div>
                        </div>
                `
                movieCard.innerHTML = movieCard_html
                popularCards.appendChild(movieCard)
            });
        })

        navMovies.addEventListener("click", () => {
            popularCards.innerHTML = ""
            let movies_arr = data.filter(items => {
                return items.type === "movie"
            })

            movies_arr.forEach((elements, index) => {
                let { name, im08, date, sposter, bposter, genre, url } = elements;
                let movieCard = document.createElement("a")
                movieCard.classList.add("popular_card")
                movieCard.href = url
                movieCard.target = "_blank"
                movieCard_html = `<img src="${sposter}" alt="${name}" class="popular_poster">
                        <div class="rest_card">
                            <img src="${bposter}" alt="${name}">
                            <div class="rest_card_cont">
                                <h4>${name}</h4>
                                <div class="sub">
                                    <p>${genre}, ${date}</p>
                                    <h3><span>IM08</span><i class="fa-solid fa-star"> ${im08}</i></h3>
                                </div>
                            </div>
                        </div>
                `
                movieCard.innerHTML = movieCard_html
                popularCards.appendChild(movieCard)
            });
        })

        navSeries.addEventListener("click",()=>{
            popularCards.innerHTML=""
            let series_arr=data.filter(items=>{
                return items.type==="series"
            })

            series_arr.forEach((elements, index) => {
                let { name, im08, date, sposter, bposter, genre, url } = elements;
                let movieCard = document.createElement("a")
                movieCard.classList.add("popular_card")
                movieCard.href = url
                movieCard.target = "_blank"
                movieCard_html = `<img src="${sposter}" alt="${name}" class="popular_poster">
                        <div class="rest_card">
                            <img src="${bposter}" alt="${name}">
                            <div class="rest_card_cont">
                                <h4>${name}</h4>
                                <div class="sub">
                                    <p>${genre}, ${date}</p>
                                    <h3><span>IM08</span><i class="fa-solid fa-star"> ${im08}</i></h3>
                                </div>
                            </div>
                        </div>
                `
                movieCard.innerHTML = movieCard_html
                popularCards.appendChild(movieCard)
            });
        })
    })