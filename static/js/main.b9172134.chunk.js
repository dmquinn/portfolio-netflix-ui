(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{11:function(e,t,a){},17:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),r=a(12),c=a.n(r),n=(a(17),a(2)),l=a.p+"static/media/profilePic.b31d1a79.svg",o=a(0),d=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(s.useRef)();return r.current=a,Object(s.useEffect)((function(){var e=function(){var e=window.scrollY>50;r.current!==e&&i(e)};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),Object(o.jsx)("nav",{className:"relative py-1 bg-gradient-to-b from-black mb-3 lg:sticky top-0 z-50",style:{transition:"1s ease",backgroundColor:a?"#141414":"transparent"},children:Object(o.jsxs)("div",{className:"md:px-5 flex lg:items-center",children:[Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("img",{src:"https://fontmeme.com/permalink/210916/161f87475cfd13e0b716890b557a6a9a.png",alt:"netflix-font",className:"logo pl-3"})}),Object(o.jsx)("a",{href:"#popular",className:"hidden md:block text-white no-underline px-3 drop-shadow-sm",children:"Projects"}),Object(o.jsx)("a",{href:"#stack",className:"hidden md:block text-white no-underline px-3",children:"Stack"}),Object(o.jsxs)("ul",{className:"flex absolute right-0 lg:right-10",children:[Object(o.jsx)("li",{className:"nav-item py-2",children:Object(o.jsxs)("a",{className:"px-3  flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75",href:"dingdingding",children:[Object(o.jsx)("i",{className:"fas fa-bell text-3xl "})," "]})}),Object(o.jsx)("li",{className:"nav-item w-14 sm:px-3",children:Object(o.jsx)("img",{src:l,alt:"",className:"h-12 pt-2"})})]})]})})},m=(a(5),function(e){var t=e.card,a=e.setIsOpen,i=e.setModalData,r=e.modalData,c=Object(s.useState)(!1),l=Object(n.a)(c,2),d=l[0],m=l[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"item px-1",onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},onClick:function(){window.scrollTo(0,0),a(!0),i({card:t}),console.log(r)},children:[Object(o.jsx)("img",{src:t.image,alt:"Describe",className:"rounded-t-sm object-cover"}),Object(o.jsxs)("div",{style:{visibility:d?"visible":"hidden",opacity:d?"1":"0",transition:"0.4s"},className:"bg-modal-gray rounded-b-sm text-white pt-3  shadow-lg",children:[Object(o.jsxs)("div",{className:"flex",children:[Object(o.jsx)("i",{className:"fas fa-play ml-4 icon white"}),Object(o.jsx)("i",{className:"fas fa-plus ml-2 icon"}),Object(o.jsxs)("a",{href:t.link,target:"_blank",rel:"noreferrer",className:"no-underline text-white",children:[" ",Object(o.jsx)("i",{className:"fas fa-external-link-square-alt fa-2x ml-2 link"})," "]})," "]}),Object(o.jsxs)("div",{className:"flex  pt-3 ml-2 text-xs",children:[Object(o.jsxs)("p",{className:"text-netflix-green font-semibold",children:[Math.floor(-5*Math.random()+100),"%"]})," ",Object(o.jsx)("p",{className:"ml-2",children:" 2020"}),Object(o.jsx)("p",{className:"ml-2 border-1 border-white px-1",children:" 12"})]}),Object(o.jsx)("p",{className:"duration text-xs mx-2 pb-2",children:t.tags})]})]})})}),p=a.p+"static/media/milk.b4af4360.svg",u=a.p+"static/media/olsen.6af09194.svg",b=a.p+"static/media/busckr.6ad34a7f.svg",h=a.p+"static/media/photoEditor.846450d7.svg",x=a.p+"static/media/anomic.5593a25e.svg",j=[{image:u,video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633428239/portfolio/olsen_2_mxao5j.mkv",header:"Olsen",subHeader:"Music Video Playlist App",tags:"Youtube API \u26ac Spotify API \u26ac Dynamic Iframe",info:"This is a React application which uses the Spotify API to fetch songs and artists on users\u2019 search\u26ac It then uses the Youtube API to search for top videos and play using an embedded iframe\u26ac The app features an incremental search function, and users can add videos to a playlist or choose from two preset playlists\u26ac",genres:"Web App",stackText:"React, Redux, Node, Express, MongoDB, Bootstrap-5, Youtube API, Spotify API, SCSS",github:"https://github.com/dmquinn/olsen-video",link:"https://olsenvideo.herokuapp.com/ "},{image:p,video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1632491543/portfolio/screen-capture_1_ojqgs7.mp4",header:"Milk Records",subHeader:"E-commerce Website",tags:"MERN  \u26ac  Paypal  \u26ac  Full Stack",info:"This is an online record store built using full MERN stack. It features separate user and admin functionalities (admins can perform CRUD functions as well as award other user admin status), and features multiple integrated secure payment methods. Users can search products, add items to cart while continuing to shop, and filter records by genre\u26ac All design and artwork was made by me for this project. ",genres:"Full Website, E-Commerce",stackText:"React, Redux, Node, Express, MongoDB, React-Bootstrap, Paypal Sandbox",github:"https://github.com/dmquinn/MERN-e-commerce",link:"http://milkrecords.herokuapp.com/"},{image:b,info:"This is a platform for local bands and artists to connect with each other and post events around the city.  It features integrated soundcloud players for each user, as well as using address-to-coordinates technology from the mapBox API to display visually where each event is held.  User Image Upload is managed by the Cloudinary API",video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633429115/portfolio/busckr_pxl178.mp4",genres:"Full Website",header:"Busckr",subHeader:"Events and Social Media Page",tags:"Spotify Api \u26ac Youtube Api \u26ac Cloudinary",stackText:"EJS, MongoDB, Node, Express, Bootstrap, Cloudinary API",github:"https://github.com/dmquinn/BUSCKR-local-events-app",link:"https://busckr.herokuapp.com/ "},{image:h,info:"The photo editor allows users to apply preset filters to either default or user-uploded images.  Users can also apply their own custom filters by adjusting brightness, contrast, saturation etc, and apply one of five overlay image effects. Built using React and Tailwind",genres:"Web App",video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633429648/portfolio/photo_editor_nwsypf.mp4",header:"Photo Editor",subHeader:"Custom Image and Overlay Effects",tags:"Dynamic Styling \u26ac Image Upload \u26ac SVG",stackText:"React, SCSS, Tailwind",row:"fun",github:"https://github.com/dmquinn/photo-editor"},{image:a.p+"static/media/weather.5e4e13d3.svg",info:"A simple weather app which allows users to search towns and cities for current weather and four day forecast using the openWeatherMap API.  The background image changes dynamically by using the Unsplash API to load images from users' selected locations.",genres:"Web App",video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633429926/portfolio/weather_ncvytd.mp4",header:"Weather App",subHeader:"Four Day Weather Forecast",tags:"Unsplash API \u26ac OpenWeatherMap API ",stackText:"React, CSS, Mapbox API, Unsplash API",row:"fun",github:"https://github.com/dmquinn/weather-app",link:"https://dmquinn.github.io/weather-app/ "},{image:a.p+"static/media/geogoi.989f1b7d.svg",info:"This is a game which challenges users on their knowledge of city locations using the Google Maps API.  It prompts users to drop a pin on a map with road markings, place names etc.  The app will then calculate the distance between that pin and the actual geolocation of the prompted city.  The map was generated using the google developers styling wizard",genres:"Game",video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633430499/portfolio/mapsgame_ilitii.mp4",header:"GeoGoi",subHeader:"Geolocation Guessing Game",tags:"Google Maps API \u26ac Game ",stackText:"React, Bootstrap, Google Maps API",row:"fun",github:"https://github.com/dmquinn/mapsGame",link:"https://geogoi.herokuapp.com/"},{image:x,info:"The Anomic Records website is a commissioned work in progress for a Berlin based record label.  It is a simple app which features various artist info, embedded ifame and carousel images. Built using react and react-bootstrap",genres:"Full Website",video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633431705/portfolio/screen-capture_4_vfspmd.mp4",header:"Anomic Records",subHeader:"Record Label Showcase Page",tags:"iframe \u26ac React-Multi-Carousel \u26ac Bootstrap",stackText:"React, SCSS, Bootstrap",github:"https://github.com/dmquinn/Anomic",link:"https://anomic.herokuapp.com/ "},{image:a.p+"static/media/player.4ac88a70.svg",info:"A simple music player built using react.  Features playlist option, custom player controls, Dynamic background and glasmorphism inspired UI.",video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633430691/portfolio/musicplayer_c5r9lk.mp4",genres:"Web App",header:"React-Player",subHeader:"Music and Playlist Player",tags:"Music \u26ac SVG \u26ac Bootstrap",stackText:"React, SCSS",row:"fun",github:"https://github.com/dmquinn/React-music-player"},{image:a.p+"static/media/tvmovies.01aef6be.svg",info:"Using data and images from themoviedb API and thetvdb API, users can view top new releases in the header carousel, toggle between movie mode and tv mode, watch trailers using dynamic embedded iframe (and search from the youtube api).  Features an incremental search function, 'flashlight' cursor, and all built using Vanilla JS",video:"https://res.cloudinary.com/drpdq0pui/video/upload/v1633431328/portfolio/movie_vyaxhz.mp4",genres:"Web App",header:"TV + Movies",subHeader:"Media and Trailers Search",tags:"Vanilla JS \u26ac TheMovieDB API \u26ac TheTVDB API",stackText:"Vanilla JS, CSS, TheMovieDB API, The TVDB API",row:"fun",github:"https://github.com/dmquinn/tvmovies.github.io",link:"https://dmquinn.github.io/tvmovies.github.io/ "},{image:a.p+"static/media/test.235aff74.jpg",header:"header three",subHeader:"subheader three",tags:"MERN \u26ac Paypal \u26ac Full Stack"}],g=a(4),f=a.n(g),v=(a(8),function(e){var t=e.setIsOpen,a=e.setModalData,s=e.modalData;return Object(o.jsxs)("div",{style:{overflowX:"visible",height:"100%"},className:" mx-14 ",children:[Object(o.jsx)("div",{className:"text-white pb-3 text-2xl",children:"Popular Projects"}),Object(o.jsx)(f.a,{ssr:!0,itemClassName:"image-item",responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:5},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:3},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},children:j.map((function(e,i){return Object(o.jsx)(m,{card:e,setIsOpen:t,setModalData:a,modalData:s},i)}))})]})}),O=function(e){var t=e.card;e.setIsOpen,e.setModalData,e.modalData;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"item px-1",children:Object(o.jsx)("img",{src:t.image,alt:"Describe",className:"rounded-t-sm object-cover"})})})},w=a.p+"static/media/react.f2fbfe51.svg",y=a.p+"static/media/javascript.d2d49880.svg",N=a.p+"static/media/html.262b7279.svg",k=a.p+"static/media/css.8e250c43.svg",S=a.p+"static/media/sass.8145aa4d.svg",I=a.p+"static/media/tailwind.a64d6ad7.svg",T=a.p+"static/media/express.6be2a9d3.svg",M=a.p+"static/media/node.d6a494c7.svg",A=a.p+"static/media/mongo.c1f5320d.svg",P=[{image:w,header:"React",tags:"Hooks \u26ac Context \u26ac Redux"},{image:y,header:"Javascript",tags:"Promises \u26ac ES6 \u26ac Vanilla"},{image:k,header:"CSS",tags:"Flex \u26ac Grid \u26ac Responsive UI"},{image:N,header:"HTML",tags:"Forms \u26ac Dom \u26ac Canvas"},{image:S,header:"Sass",tags:"Flex \u26ac Layout"},{image:I,header:"Tailwind",tags:"Layout \u26ac Custom Themes \u26ac UI Library"},{image:a.p+"static/media/bootstrap.4fcdbc8a.svg",header:"Bootstrap",tags:"Grid \u26ac UI Library"},{image:T,header:"Express",tags:"REST API \u26ac Middleware"},{image:M,header:"Node",tags:"Controllers \u26ac REST API"},{image:A,header:"Mongo",tags:"Mongoose \u26ac Queries \u26ac Mongo Shell"}],D=function(e){var t=e.setIsOpen,a=e.setModalData,s=e.modalData;return Object(o.jsxs)("div",{style:{height:"100%"},className:"mx-14 ",children:[Object(o.jsx)("div",{className:"text-white pb-3 text-2xl",children:"Stack"}),Object(o.jsx)(f.a,{ssr:!0,itemClassName:"image-item",responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:6,slidesToSlide:6},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:3},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},children:P.map((function(e,i){return Object(o.jsx)(O,{card:e,setIsOpen:t,setModalData:a,modalData:s},i)}))})]})},C=function(e){var t=e.setIsOpen,a=e.setModalData,s=e.modalData;return Object(o.jsxs)("div",{style:{overflow:"visible"},className:"mx-14 ",children:[Object(o.jsx)("div",{className:"text-white pb-3 text-2xl",children:"Fun Stuff"})," ",Object(o.jsx)(f.a,{ssr:!0,itemClassName:"image-item",responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:5},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:3},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},children:j.map((function(e,i){return"fun"===e.row&&Object(o.jsx)(m,{card:e,setIsOpen:t,setModalData:a,modalData:s},i)}))})]})},R=(a(11),function(e){var t=e.aboutIsOpen,a=e.setAboutIsOpen;return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"justify-center items-center flex fixed inset-0 z-50 bg-modal-back text-xs lg:text-base overflow-y-auto",onClick:function(){return a(!1)},children:Object(o.jsxs)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl opacity-100 modalOpen",children:[Object(o.jsx)("div",{className:"w-full h-96 rounded-t-md",style:{background:'linear-gradient(rgba(0, 0, 0, 0) 0%, #141414 100%),url("https://res.cloudinary.com/drpdq0pui/image/upload/v1633597675/portfolio/97041299_2641475286125095_6417737959876853760_n_xjt8sy.jpg")',backgroundSize:"cover"},children:Object(o.jsx)("div",{className:"flex",children:Object(o.jsx)("button",{className:"icon absolute inset-y-5 right-5",type:"button",onClick:function(){return a(!1)},style:{transform:"scale(1.5)"},children:"X"})})})," ",Object(o.jsxs)("div",{className:" shadow-lg relative flex flex-col w-full bg-netflix-black text-white to-transparent px-12 rounded-b-md",children:[Object(o.jsx)("div",{className:"flex -mt-32 lg:-mt-20",children:" "}),Object(o.jsxs)("p",{children:["Hello! My name is Daniel Murphy and I'm a Javascript developer working mainly with React. I also have extensive experience working with HTML, CSS, SCSS, Tailwind, Bootstrap, Redux, Node, Express, MongoDB, Git, and right now I am working on polishing my skills in React Native, TypeScript and Storybook."," "]}),Object(o.jsxs)("p",{children:["This website was built using React and Tailwind, with some styling being done with SCSS. I have tried my best to emulate the current UI for netflix (September/October 2021)."," "]}),Object(o.jsx)("div",{className:"flex items-center justify-end p-6 rounded-b"})]})]})})})})}),E=(a(31),function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1];return Object(o.jsxs)("div",{className:"parent pb--20",children:[Object(o.jsx)("div",{className:"h-screen topImage bg-gradient-to-b absolute"}),Object(o.jsxs)("div",{className:"text-banner bg-opacity-0 absolute",children:[Object(o.jsx)("div",{className:"text-2xl md:text-4xl lg:texr-4xl font-bold mb-2 text-white align-text-bottom",children:"Frontend Developer"}),Object(o.jsx)("div",{className:"text-lg md:text-2xl mb-8 text-white sm:max-w-xs lg:max-w-lg font-semibold",children:"Interested in all things visual, and working with a UI-mindset."}),Object(o.jsxs)("div",{className:" flex py-3 w-full",children:[Object(o.jsx)("button",{className:"bg-white font-bold rounded-3 shadow-lg px-4 py-3",onClick:i,children:"About"}),Object(o.jsxs)("a",{className:"bg-opacity-60 ml-3 bg-netflix-grey font-bold rounded-3 shadow-lg px-4 text-white flex items-center no-underline",href:"https://github.com/dmquinn?",target:"_blank",rel:"noreferrer",children:[" ",Object(o.jsxs)("button",{children:[" ",Object(o.jsx)("i",{className:"fab fa-github fa-2x text-white",id:"popular"}),Object(o.jsx)("span",{className:"px-2",children:"More Info"})]})," "]})]})]}),Object(o.jsx)(R,{aboutIsOpen:a,setAboutIsOpen:i})]})}),q=a.p+"static/media/forward.82284303.svg",B=a.p+"static/media/backward.816d70fb.svg",F=(a(32),a(33),function(e){var t=e.videoIsOpen,a=e.modalData,i=e.setVideoIsOpen,r=e.setIsOpen,c=Object(s.useState)(!1),l=Object(n.a)(c,2),d=l[0],m=l[1],p=Object(s.useRef)(null),u=Object(s.useState)(0),b=Object(n.a)(u,2),h=b[0],x=b[1];return Object(s.useEffect)((function(){m(!0)}),[]),Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"h-screen col w-screen fixed top-0 z-40 videoModal text-white items-center",children:[Object(o.jsx)("div",{className:"flex flex-row w-full bg-gradient-to-b from-netflix-black absolute z-50",children:Object(o.jsx)("button",{onClick:function(){r(!1),i(!1),m(!0),x(0)},children:Object(o.jsx)("i",{className:"fas fa-arrow-left fa-3x text-white mt-3 mx-3"})})}),Object(o.jsx)("video",{width:"100%",height:"80%",fullScreen:!0,ref:p,className:"video",onTimeUpdate:function(){var e=p.current.currentTime/p.current.duration*100;x(e)},children:Object(o.jsx)("source",{src:a.card.video,type:"video/mp4"})}),Object(o.jsx)("div",{className:"flex flex-col",children:Object(o.jsxs)("div",{className:"videoToolbar absolute -bottom-5 left-0 z-10 w-full px-5 py-6 bg-gradient-to-t from-netflix-black ",children:[Object(o.jsxs)("div",{className:"flex flex-row w-full bg-white mb-5",children:[Object(o.jsxs)("div",{className:"progress-bar h-2 z-50 w-full bg-green",children:[" ",Object(o.jsx)("input",{type:"range",min:"0",max:"100",value:h,style:{width:"calc(".concat(h,"%)")},className:"range-slider",onChange:function(e){return function(e){var t=Number(e.target.value);p.current.currentTime=p.current.duration/100*t,m({manualChange:t})}(e)}})]})," "]}),Object(o.jsxs)("div",{className:"flex flex-row w-full",children:[Object(o.jsx)("i",{className:d?"fas fa-play fa-2x":"fas fa-pause fa-2x",onClick:function(){m(!d),console.log(d),d?p.current.play():p.current.pause()}}),Object(o.jsx)("img",{src:B,className:"h-20 pl-7 -mt-2",alt:"",onClick:function(){p.current.currentTime=p.current.currentTime-10,x(p.current.currentTime)}}),Object(o.jsx)("img",{src:q,className:"h-20 pl-5 -mt-2",alt:"",onClick:function(){p.current.currentTime=p.current.currentTime+10,x(p.current.currentTime)}}),Object(o.jsx)("p",{className:"ml-5",children:a.card.header}),Object(o.jsx)("p",{className:"text-netflix-grey ml-5 invisible",children:"S1:E1:"}),Object(o.jsx)("p",{className:"text-netflix-grey ml-5",children:a.card.subHeader})]})]})})]})})})}),_=function(e){var t=e.isOpen,a=e.setIsOpen,i=e.modalData,r=Object(s.useState)(!1),c=Object(n.a)(r,2),l=c[0],d=c[1],m=Object(s.useState)(!1),p=Object(n.a)(m,2);p[0],p[1];return Object(o.jsxs)(o.Fragment,{children:[t&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"justify-center items-center flex fixed inset-0 z-50 bg-modal-back text-xs lg:text-base overflow-y-auto",onClick:function(){return a(!1)},children:Object(o.jsxs)("div",{className:"relative w-auto my-6 mx-auto max-w-3xl opacity-100 modalOpen",children:[Object(o.jsx)("div",{className:"w-full h-96 rounded-t-md",style:{background:"linear-gradient(rgba(0, 0, 0, 0) 0%, #141414 100%),url(".concat(i.card.image,")"),backgroundSize:"cover"},children:Object(o.jsx)("div",{className:"flex",children:Object(o.jsx)("button",{className:"icon absolute inset-y-5 right-5",type:"button",onClick:function(){return a(!1)},style:{transform:"scale(1.5)"},children:"X"})})})," ",Object(o.jsxs)("div",{className:" shadow-lg relative flex flex-col w-full bg-netflix-black text-white to-transparent px-12 rounded-b-md",children:[Object(o.jsxs)("div",{className:"flex -mt-32 lg:-mt-20",children:[" ",Object(o.jsxs)("button",{className:" bg-black w-25 text-netflix-black bg-white rounded-md p-2 font-extrabold",onClick:function(){return d(!0)},children:[" ",Object(o.jsx)("i",{className:"fas fa-play mr-3"}),"Play"]})," ",Object(o.jsxs)("a",{href:i.card.github,target:"_blank",rel:"noreferrer",children:[" ",Object(o.jsx)("i",{className:"fab fa-github fa-3x ml-5 modalIcon "})]})]}),Object(o.jsxs)("div",{className:"grid grid-cols-5 gap-3",children:[Object(o.jsxs)("div",{className:"col-span-3",children:[Object(o.jsxs)("div",{className:"flex  pt-10",children:[Object(o.jsx)("p",{className:"text-netflix-green font-semibold",children:"98% Match"})," ",Object(o.jsx)("p",{className:"ml-2",children:" 2020"}),Object(o.jsx)("p",{className:"ml-2 border-1 border-white px-1",children:" 12"})]}),i.card.info]}),Object(o.jsxs)("div",{className:"col-span-2 pt-10 px-3 ",children:[Object(o.jsxs)("p",{className:"text-netflix-grey",children:["Author:",Object(o.jsx)("span",{className:"text-white",children:" Daniel Muprhy"})]}),Object(o.jsxs)("p",{className:"text-netflix-grey",children:["Genres:",Object(o.jsxs)("span",{className:"text-white",children:[" ",i.card.genres]})]}),Object(o.jsxs)("p",{className:"text-netflix-grey",children:["Stack:",Object(o.jsxs)("span",{className:"text-white",children:[" ",i.card.stackText]})]})]})]}),Object(o.jsx)("div",{className:"flex items-center justify-end p-6 rounded-b"})]})]})})}),Object(o.jsx)(F,{videoIsOpen:l,modalData:i,setVideoIsOpen:d,setIsOpen:a})]})};var U=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],r=Object(s.useState)({}),c=Object(n.a)(r,2),l=c[0],m=c[1];return Object(o.jsxs)("div",{className:"App h-full flex flex-col w-full bg-netflix-black",children:[Object(o.jsx)(d,{}),Object(o.jsx)(E,{}),Object(o.jsx)("div",{className:"divider"}),Object(o.jsx)("div",{className:"z-40",children:Object(o.jsx)(v,{setIsOpen:i,setModalData:m})}),Object(o.jsx)("div",{className:"z-30 -mt-20",children:Object(o.jsx)(C,{setIsOpen:i,setModalData:m})}),Object(o.jsx)("div",{className:"z-20 -mt-20",children:Object(o.jsx)(D,{})}),Object(o.jsx)(_,{isOpen:a,setIsOpen:i,modalData:l}),Object(o.jsx)("div",{className:"w-100 h-40 bg-netflix-black"})]})};a(34);c.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(U,{})}),document.getElementById("root"))},5:function(e,t,a){}},[[35,1,2]]]);
//# sourceMappingURL=main.b9172134.chunk.js.map