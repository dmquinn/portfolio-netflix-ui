import Milk from "./images/milk.svg";
import Olsen from "./images/olsen.svg";
import Busckr from "./images/busckr.svg";
import PhotoEditor from "./images/photoEditor.svg";
import Anomic from "./images/anomic.svg";
import Weather from "./images/weather.svg";
import Geogoi from "./images/geogoi.svg";
import Player from "./images/player.svg";
import TvMovies from "./images/tvmovies.svg";
import Sequencer from "./images/sequencer.svg";
import GQLBlog from "./images/gqlblog.svg";

const cards = [
  {
    image: Olsen,
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633428239/portfolio/olsen_2_mxao5j.mkv",
    header: "Olsen",
    subHeader: "Music Video Playlist App",
    tags: "Youtube API ⚬ Spotify API ⚬ Dynamic Iframe",
    info: "This is a React application which uses the Spotify API to fetch songs and artists on users’ search⚬ It then uses the Youtube API to search for top videos and play using an embedded iframe⚬ The app features an incremental search function, and users can add videos to a playlist or choose from two preset playlists⚬",
    genres: "Web App",
    stackText:
      "React, Redux, Node, Express, MongoDB, Bootstrap-5, Youtube API, Spotify API, SCSS",
    github: "https://github.com/dmquinn/olsen-video",
    link: "https://olsenvideo.herokuapp.com/ ",
  },
  {
    image: Milk,
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1632491543/portfolio/screen-capture_1_ojqgs7.mp4",
    header: "Milk Records",
    subHeader: "E-commerce Website",
    tags: "MERN  ⚬  Paypal  ⚬  Full Stack",
    info: "This is an online record store built using full MERN stack. It features separate user and admin functionalities (admins can perform CRUD functions as well as award other user admin status), and features multiple integrated secure payment methods. Users can search products, add items to cart while continuing to shop, and filter records by genre⚬ All design and artwork was made by me for this project. ",
    genres: "Full Website, E-Commerce",
    stackText:
      "React, Redux, Node, Express, MongoDB, React-Bootstrap, Paypal Sandbox",
    github: "https://github.com/dmquinn/MERN-e-commerce",
    link: "http://milkrecords.herokuapp.com/",
  },

  {
    image: Busckr,
    info: "This is a platform for local bands and artists to connect with each other and post events around the city.  It features integrated soundcloud players for each user, as well as using address-to-coordinates technology from the mapBox API to display visually where each event is held.  User Image Upload is managed by the Cloudinary API",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633429115/portfolio/busckr_pxl178.mp4",
    genres: "Full Website",
    header: "Busckr",
    subHeader: "Events and Social Media Page",
    tags: "Spotify Api ⚬ Youtube Api ⚬ Cloudinary",
    stackText: "EJS, MongoDB, Node, Express, Bootstrap, Cloudinary API",
    github: "https://github.com/dmquinn/BUSCKR-local-events-app",
    link: "https://busckr.herokuapp.com/ ",
  },
  {
    image: TvMovies,
    info: "Using data and images from themoviedb API and thetvdb API, users can view top new releases in the top banner, toggle between movie mode and tv mode, watch trailers using dynamic embedded iframe (and search from the youtube api).  Features an incremental search function, 'flashlight' cursor.  This is recently refactored from a vanilla Javascript project to be built using React with Typescript",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633431328/portfolio/movie_vyaxhz.mp4",
    genres: "Web App",
    header: "TV + Movies",
    subHeader: "Media and Trailers Search",
    tags: "Typescript ⚬ TheMovieDB API ⚬ TheTVDB API",
    stackText: "Typescript, CSS, React, TheMovieDB API, The TVDB API",
    row: "fun",
    github: "https://github.com/dmquinn/tvmovies.github.io",
    link: "https://pensive-edison-c73f81.netlify.app/ ",
  },
  {
    image: GQLBlog,
    info: "Blog made using GraphCMS and NextJS, dynamic routing, category and author filters.",
    video: "",
    genres: "Web App",
    header: "TV + Movies",
    subHeader: "Media and Trailers Search",
    tags: "GraphQL ⚬ TheMovieDB API ⚬ TheTVDB API",
    stackText: "GraphQL, GraphCMS, Next.js",
    github: "https://github.com/dmquinn/GraphQL-Blog",
    link: "",
  },
  {
    image: PhotoEditor,
    info: "The photo editor allows users to apply preset filters to either default or user-uploded images.  Users can also apply their own custom filters by adjusting brightness, contrast, saturation etc, and apply one of five overlay image effects. Built using React with Typescript and Tailwind",
    genres: "Web App",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633429648/portfolio/photo_editor_nwsypf.mp4",
    header: "Photo Editor",
    subHeader: "Custom Image and Overlay Effects",
    tags: "Dynamic Styling ⚬ Image Upload ⚬ SVG",
    stackText: "React, SCSS, Tailwind",
    row: "fun",
    github: "https://github.com/dmquinn/photo-editor",
  },
  {
    image: Weather,
    info: "A simple weather app which allows users to search towns and cities for current weather and four day forecast using the openWeatherMap API.  The background image changes dynamically by using the Unsplash API to load images from users' selected locations.",
    genres: "Web App",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633429926/portfolio/weather_ncvytd.mp4",
    header: "Weather App",
    subHeader: "Four Day Weather Forecast",
    tags: "Unsplash API ⚬ OpenWeatherMap API ",
    stackText: "React, CSS, Mapbox API, Unsplash API",
    row: "fun",
    github: "https://github.com/dmquinn/weather-app",
    link: "https://dmquinn.github.io/weather-app/ ",
  },
  {
    image: Geogoi,
    info: "This is a game which challenges users on their knowledge of city locations using the Google Maps API.  It prompts users to drop a pin on a map with road markings, place names etc.  The app will then calculate the distance between that pin and the actual geolocation of the prompted city.  The map was generated using the google developers styling wizard",
    genres: "Game",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633430499/portfolio/mapsgame_ilitii.mp4",
    header: "GeoGoi",
    subHeader: "Geolocation Guessing Game",
    tags: "Google Maps API ⚬ Game ",
    stackText: "React, Bootstrap, Google Maps API",
    row: "fun",
    github: "https://github.com/dmquinn/mapsGame",
    link: "https://geogoi.herokuapp.com/",
  },
  {
    image: Anomic,
    info: "The Anomic Records website is a commissioned work in progress for a Berlin based record label.  It is a simple app which features various artist info, embedded ifame and carousel images. Built using react and react-bootstrap",
    genres: "Full Website",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633431705/portfolio/screen-capture_4_vfspmd.mp4",
    header: "Anomic Records",
    subHeader: "Record Label Showcase Page",
    tags: "iframe ⚬ React-Multi-Carousel ⚬ Bootstrap",
    stackText: "React, SCSS, Bootstrap",
    github: "https://github.com/dmquinn/Anomic",
    link: "https://anomic.herokuapp.com/ ",
  },
  {
    image: Player,
    info: "A simple music player built using react.  Features playlist option, custom player controls, Dynamic background and glasmorphism inspired UI.",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1633430691/portfolio/musicplayer_c5r9lk.mp4",
    genres: "Web App",
    header: "React-Player",
    subHeader: "Music and Playlist Player",
    tags: "Music ⚬ SVG ⚬ Bootstrap",
    stackText: "React, SCSS",
    row: "fun",
    github: "https://github.com/dmquinn/React-music-player",
  },
  {
    image: Sequencer,
    info: "This was an exploration of HTML5 canvas and the WebAudio API, using vanilla JavaScript.  Features kick, hi-hat and perc sound made using frequency manipulations, as well as sawtooth notes in scale.",
    video:
      "https://res.cloudinary.com/drpdq0pui/video/upload/v1638201114/portfolio/screen-capture_ba4ihm.mp4",
    genres: "Web App",
    header: "Bleep Box",
    subHeader: "Step sequencer",
    tags: "Music ⚬ WebAudio API ⚬ Vanilla JS",
    stackText: "VanillaJS, CSS",
    row: "fun",
    github: "https://github.com/dmquinn/sequencer",
  },
];
export default cards;
