// Tải dữ liệu từ file JSON
fetch("songs.json")
    .then((response) => response.json())
    .then((data) => {
        renderSingers(data);
    })
    .catch((error) => console.error("Error loading songs.json:", error));

// Hàm render danh sách ca sĩ
function renderSingers(data) {
    const singersContainer = document.querySelector(".singers");
    Object.keys(data).forEach((singer) => {
        const singerItem = document.createElement("li");
        singerItem.textContent = singer;
        singerItem.addEventListener("click", () => toggleSongs(data, singer, singerItem));
        singersContainer.appendChild(singerItem);
    });
}

// Hiển thị hoặc ẩn danh sách bài hát
function toggleSongs(data, singer, singerItem) {
    const existingSongs = singerItem.nextElementSibling;
    if (existingSongs && existingSongs.classList.contains("song-list")) {
        existingSongs.remove();
    } else {
        const songList = document.createElement("ul");
        songList.classList.add("song-list");
        data[singer].forEach((song) => {
            const songItem = document.createElement("li");
            songItem.textContent = song.title;
            songItem.addEventListener("click", () => renderSong(song));
            songList.appendChild(songItem);
        });
        singerItem.insertAdjacentElement("afterend", songList);
    }
}

// Render video và lời bài hát
function renderSong(song) {
    document.getElementById("video").src = `${song.video}?autoplay=1&loop=1&playlist=${getVideoID(song.video)}`;
    const lyricsContainer = document.querySelector(".lyrics");
    lyricsContainer.textContent = song.lyrics;
}

// Trích xuất video ID để lặp lại video
function getVideoID(url) {
    const regex = /embed\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
}
