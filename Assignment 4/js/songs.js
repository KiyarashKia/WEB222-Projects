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
    explicit: false
  },
  /* Song 2 */
  {
    songId: "SID-23252",
    artistId: "AID-12101", // Sam Smith
    title: "I'm Not the Only One",
    year: "2014",
    duration: 279, // 4:39 m
    url: "https://www.youtube.com/watch?v=nCkpzqqog4k",
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
    explicit: false
  },
  /* Song 13 */
  {
    songId: "SID-23263",
    artistId: "AID-12102", // Adele
    title: "Send My Love (To Your New Lover)",
    year: "2015",
    duration: 223, // 3:43 m
    url: "https://www.youtube.com/watch?v=fk4BbF7B29w",
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
    explicit: false
  }
];
