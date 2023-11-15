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
 *      Date:       11/14/2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

const tableHeaders = ["Song", "Year", "Length", "Play"];

tableHeaders.forEach((header) => {
  const thead = document.getElementById("header");
  const th = document.createElement("th");
  th.textContent = header;
  thead.appendChild(th);
  th.className = "tabletitle";
});

function listSongs(artistId) {
  const tbody = document.getElementById("songs");

  let songsByArtist = songs.filter((song) => song.artistId === artistId);
  songsByArtist.forEach((song) => {
    const tr = document.createElement("tr");

    // Song Title
    const tdSong = document.createElement("td");
    tdSong.textContent = song.title;
    tr.appendChild(tdSong);

    // Year
    const tdYear = document.createElement("td");
    tdYear.textContent = song.year;
    tr.appendChild(tdYear);

    // Length
    const tdLength = document.createElement("td");
    tdLength.textContent = formatDuration(song.duration);
    tr.appendChild(tdLength);

    // Play Button
    const tdButton = document.createElement("td");
    const playButton = document.createElement("button");
    playButton.textContent = "Play";
    playButton.className = "play-button"; // I Added a class to stylize the button
    playButton.addEventListener("click", () => window.open(song.url, "_blank"));
    tdButton.appendChild(playButton);
    tr.appendChild(tdButton);

    tbody.appendChild(tr);
  });
}

function listArtists(artists) {
  console.log("listing artists");
  const menu = document.getElementById("menu");
  const buttonMenu = document.createElement("div");
  buttonMenu.className = "buttonMenu";
  menu.appendChild(buttonMenu);
  const urlsDiv = document.createElement("div");
  urlsDiv.id = "artistUrls";

  artists.forEach((artist) => {
    const artistButton = document.createElement("button");
    artistButton.className = "button";
    artistButton.textContent = artist.name;
    buttonMenu.appendChild(artistButton);

    artistButton.addEventListener("click", () => {
      const title = document.getElementById("artists");
      title.textContent = artist.name;

      const existingUrlsDiv = document.getElementById("artistUrls");
      if (existingUrlsDiv) {
        existingUrlsDiv.remove();
      }

      const newUrlsDiv = document.createElement("div");
      newUrlsDiv.id = "artistUrls";

      title.parentNode.appendChild(newUrlsDiv);

      artist.urls.forEach((url) => {
        const urlElement = document.createElement("a");
        urlElement.href = url.url;
        urlElement.textContent = url.name;
        urlElement.target = "_blank";
        newUrlsDiv.appendChild(urlElement);
        newUrlsDiv.appendChild(document.createElement("br"));
      });

      const tbody = document.getElementById("songs");
      tbody.remove();
      const tbodyReset = document.createElement("tbody");
      tbodyReset.id = "songs";
      const table = document.querySelector("table");
      table.appendChild(tbodyReset);
      listSongs(artist.artistId);
    });
  });
}

function onLoad() {
  console.log("loaded");
  listArtists(artists);

  // Check if there is at least one artist.based on the instrction
  if (artists.length > 0) {
    const firstArtistId = artists[0].artistId;
    displayArtistInfo(firstArtistId);
    listSongs(firstArtistId);
  }
}

window.addEventListener("load", onLoad);

function displayArtistInfo(artistId) {
  const artist = artists.find((a) => a.artistId === artistId);
  if (artist) {
    const title = document.getElementById("artists");
    title.textContent = artist.name;

    const urlsDiv = document.getElementById("artistUrls") || document.createElement("div");
    urlsDiv.id = "artistUrls";
    urlsDiv.innerHTML = "";

    artist.urls.forEach((url) => {
      const urlElement = document.createElement("a");
      urlElement.href = url.url;
      urlElement.textContent = url.name;
      urlElement.target = "_blank";
      urlsDiv.appendChild(urlElement);
      urlsDiv.appendChild(document.createElement("br"));
    });

    title.parentNode.appendChild(urlsDiv);
  }
}

function formatDuration(duration) {
  const minutes = parseInt(duration / 60, 10);
  const seconds = duration % 60;
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

window.addEventListener("load", onLoad);
