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

window.songs = [
  // Songs 1-7 by Sam Smith
  /* Song 1 */
  {
    songId: "SID-23251",
    artistId: "AID-12101", // Sam Smith
    title: "Stay with Me",
    year: "2014",
    duration: 209, // 3:29 m
    url: "https://www.youtube.com/watch?v=pB-5XG-DbAA",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000084926895-31au1a-t500x500.jpg",
    explicit: false
  },
  /* Song 2 */
  {
    songId: "SID-23252",
    artistId: "AID-12101", // Sam Smith
    title: "I'm Not the Only One",
    year: "2014",
    duration: 279, // 4:39 m
    url: "https://i1.sndcdn.com/artworks-000107517132-kl400n-t500x500.jpg",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000615881524-oblbdw-t500x500.jpg",
    explicit: false
  },
  /* Song 3 */
  {
    songId: "SID-23253",
    artistId: "AID-12101", // Sam Smith
    title: "Too Good at Goodbyes",
    year: "2017",
    duration: 264, // 4:24 m
    url: "https://www.youtube.com/watch?v=J_ub7Etch2U",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000277512665-m688kt-t500x500.jpg",
    explicit: true
  },
  /* Song 4 */
  {
    songId: "SID-23254",
    artistId: "AID-12101", // Sam Smith
    title: "Latch",
    year: "2012",
    duration: 220, // 3:40 m
    url: "https://www.youtube.com/watch?v=pUK6HlzNWEg",
    coverImageUrl: "https://i1.sndcdn.com/artworks-35HMKmwKZD7JPLzA-QmmffQ-t500x500.jpg",
    explicit: false
  },
  /* Song 5 */
  {
    songId: "SID-23255",
    artistId: "AID-12101", // Sam Smith
    title: "Writing's on the Wall",
    year: "2015",
    duration: 284, // 4:44 m
    url: "https://www.youtube.com/watch?v=8jzDnsjYv9A",
    coverImageUrl: "https://swahilisongs.com/wp-content/uploads/2023/06/artworks-000131374000-sr9zyq-t500x500.jpg",
    explicit: false
  },
  /* Song 6 */
  {
    songId: "SID-23256",
    artistId: "AID-12101", // Sam Smith
    title: "Lay Me Down",
    year: "2015",
    duration: 249, // 4:09 m
    url: "https://www.youtube.com/watch?v=HaMq2nn5ac0",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000126831717-x6l8k4-t500x500.jpg",
    explicit: true
  },
  /* Song 7 */
  {
    songId: "SID-23257",
    artistId: "AID-12101", // Sam Smith
    title: "Dancing with a Stranger",
    year: "2019",
    duration: 196, // 3:16 m
    url: "https://www.youtube.com/watch?v=av5JD1dfj_c",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000652999720-ars5bm-t500x500.jpg",
    explicit: false
  },

  // Songs 8-14 by Adele
  /* Song 8 */
  {
    songId: "SID-23258",
    artistId: "AID-12102", // Adele
    title: "Rolling in the Deep",
    year: "2010",
    duration: 233, // 3:53 m
    url: "https://www.youtube.com/watch?v=rYEDA3JcQqw",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000109026918-2n3ayn-t500x500.jpg",
    explicit: false
  },
  /* Song 9 */
  {
    songId: "SID-23259",
    artistId: "AID-12102", // Adele
    title: "Someone Like You",
    year: "2011",
    duration: 284, // 4:44 m
    url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000074073161-kmgoqv-t500x500.jpg",
    explicit: false
  },
  /* Song 10 */
  {
    songId: "SID-23260",
    artistId: "AID-12102", // Adele
    title: "Hello",
    year: "2015",
    duration: 367, // 6:07 m
    url: "https://www.youtube.com/watch?v=YQHsXMglC9A",
    coverImageUrl: "https://m.media-amazon.com/images/M/MV5BMTM2NzE1YTEtNTNjZC00MTg5LTkwOTEtNDEwMDI1ODA1YjhkXkEyXkFqcGdeQXVyNjU0ODAyOTY@._V1_.jpg",
    explicit: false
  },
  /* Song 11 */
  {
    songId: "SID-23261",
    artistId: "AID-12102", // Adele
    title: "Set Fire to the Rain",
    year: "2011",
    duration: 242, // 4:02 m
    url: "https://www.youtube.com/watch?v=Ri7-vnrJD3k",
    coverImageUrl: "https://i1.sndcdn.com/artworks-QE6CaRQqq0i3yYlB-MQvzsQ-t500x500.jpg",
    explicit: false
  },
  /* Song 12 */
  {
    songId: "SID-23262",
    artistId: "AID-12102", // Adele
    title: "When We Were Young",
    year: "2015",
    duration: 290, // 4:50 m
    url: "https://www.youtube.com/watch?v=DDWKuo3gXMQ",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000200369207-bph766-t500x500.jpg",
    explicit: false
  },
  /* Song 13 */
  {
    songId: "SID-23263",
    artistId: "AID-12102", // Adele
    title: "Send My Love",
    year: "2015",
    duration: 223, // 3:43 m
    url: "https://www.youtube.com/watch?v=fk4BbF7B29w",
    coverImageUrl: "https://m.media-amazon.com/images/M/MV5BODU5OGI5ZGQtODk2OS00ZDljLThjNzctNWQ5NmY4YzliMDU4XkEyXkFqcGdeQXVyNDE4OTY5NzI@._V1_.jpg",
    explicit: false
  },
  /* Song 14 */
  {
    songId: "SID-23264",
    artistId: "AID-12102", // Adele
    title: "Chasing Pavements",
    year: "2008",
    duration: 212, // 3:32 m
    url: "https://www.youtube.com/watch?v=08DjMT-qR9g",
    coverImageUrl: "https://ia601702.us.archive.org/32/items/mbid-be95b9c1-71d5-4a3d-add3-89afa576b97f/mbid-be95b9c1-71d5-4a3d-add3-89afa576b97f-14439999083_thumb500.jpg",
    explicit: false
  },

  // Songs 15-19 by Ed Sheeran
  /* Song 15 */
  {
    songId: "SID-23265",
    artistId: "AID-12103", // Ed Sheeran
    title: "Thinking Out Loud",
    year: "2014",
    duration: 281, // 4:41 m
    url: "https://www.youtube.com/watch?v=lp-EO5I60KA",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000100262080-jfn9k6-t500x500.jpg",
    explicit: false
  },
  /* Song 16 */
  {
    songId: "SID-23266",
    artistId: "AID-12103", // Ed Sheeran
    title: "Shape of You",
    year: "2017",
    duration: 233, // 3:53 m
    url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000206844384-uzp8t5-t500x500.jpg",
    explicit: false
  },
  /* Song 17 */
  {
    songId: "SID-23267",
    artistId: "AID-12103", // Ed Sheeran
    title: "Photograph",
    year: "2014",
    duration: 258, // 4:18 m
    url: "https://www.youtube.com/watch?v=nSDgHBxUbVQ",
    coverImageUrl: "https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd",
    explicit: false
  },
  /* Song 18 */
  {
    songId: "SID-23268",
    artistId: "AID-12103", // Ed Sheeran
    title: "Castle on the Hill",
    year: "2017",
    duration: 261, // 4:21 m
    url: "https://www.youtube.com/watch?v=K0ibBPhiaG0",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000218147134-mg1ik0-t500x500.jpg",
    explicit: false
  },
  /* Song 19 */
  {
    songId: "SID-23269",
    artistId: "AID-12103", // Ed Sheeran
    title: "Perfect",
    year: "2017",
    duration: 263, // 4:23 m
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000244677113-5fb23x-t500x500.jpg",
    explicit: false
  },
  /* Song 20 */
  {
    songId: "SID-23270",
    artistId: "AID-12103", // Ed Sheeran
    title: "The A Team",
    year: "2011",
    duration: 260, // 4:20 m
    url: "https://www.youtube.com/watch?v=UAWcs5H-qgQ",
    coverImageUrl: "https://i1.sndcdn.com/artworks-000091071026-o2zocx-t500x500.jpg",
    explicit: false
  },
  /* Song 21 */
  {
    songId: "SID-23271",
    artistId: "AID-12103", // Ed Sheeran
    title: "Galway Girl",
    year: "2017",
    duration: 170, // 2:50 m
    url: "https://www.youtube.com/watch?v=87gWaABqGYs",
    coverImageUrl: "https://i.pinimg.com/736x/d0/41/74/d04174156447963eb85b76a9e1684a98.jpg",
    explicit: false
  }
];
