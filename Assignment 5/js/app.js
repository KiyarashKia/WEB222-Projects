/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Kiarash Kia
 *      Student ID: 108688235
 *      Date:       11/21/2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

function createSongCard(song) {
  const card = document.createElement("div");
  card.className = "songs-card";

  // Add song cover image
  const coverImg = document.createElement("img");
  coverImg.src = song.coverImageUrl || 'default';
  coverImg.alt = `Cover of ${song.title}`;
  card.appendChild(coverImg);

  // Song Title
  const title = document.createElement("h5");
  title.textContent = song.title;
  card.appendChild(title);

    // Line Break
  card.appendChild(document.createElement("br"));
  
  // Length
  const length = document.createElement("span");
  length.innerHTML = `<b>Duration:</b> ${formatDuration(song.duration)}`;
  card.appendChild(length);
  

 // Year
 const year = document.createElement("time");
 year.textContent = `Year Recorded: ${song.year}`;
 card.appendChild(year);

  // Line Break
  card.appendChild(document.createElement("br"));
  card.appendChild(document.createElement("br"));

  return card;
}


function listSongs(artistId) {
  const songsContainer = document.querySelector(".card-container");
  songsContainer.innerHTML = '';

  let songsByArtist = songs.filter((song) => song.artistId === artistId);
  songsByArtist.forEach((song) => {
    const songCard = createSongCard(song);
    songCard.addEventListener("click", () => window.open(song.url, "_blank"));
    songsContainer.appendChild(songCard);
  });
}

function listArtists(artists) {
  const menu = document.getElementById("menu");
  menu.innerHTML = '';

  artists.forEach(artist => {
    const artistButton = document.createElement("button");
    artistButton.className = "button";
    artistButton.textContent = artist.name;
    artistButton.addEventListener("click", () => {
      displayArtistInfo(artist.artistId);
      listSongs(artist.artistId);
    });
    menu.appendChild(artistButton);
  });
}

function displayArtistInfo(artistId) {
  const artistInfo = document.getElementById("artist-info");
  artistInfo.innerHTML = '';

  const artist = artists.find(a => a.artistId === artistId);
  if (artist) {
    const nameElement = document.createElement("h2");
    nameElement.textContent = artist.name;
    artistInfo.appendChild(nameElement);

    artist.urls.forEach(url => {
      const urlButton = document.createElement("button")
      urlButton.className="urlButton";
      urlButton.textContent = url.name;
      urlButton.addEventListener("click", () => {
        window.open(url.url, "_blank");
      });
      artistInfo.appendChild(urlButton);
    });
  }
}
function onLoad() {
  listArtists(artists);

  if (artists.length > 0) {
    const firstArtistId = artists[0].artistId;
    displayArtistInfo(firstArtistId);
    listSongs(firstArtistId);
  }
}

function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

window.addEventListener("load", onLoad);
