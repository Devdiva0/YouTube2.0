// import {useEffect,useState} from "react"
// export default function App(){
//   const [vedios,setVideos]=useState([]);
//   useEffect(()=>{
//     fetch(
//       "https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=in&section=Gaming",
//       {

//       }
//     )
//     .then((res)=>res.json())
//     .then((data)=>{
//       console.log("Api response: ",data);
//       setVideos(data.videos || []);
//     })
//     .catch((err))
//   })
// }

// import { useEffect, useState } from "react";

// export default function App() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchVideos() {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=${import.meta.env.VITE_RAPID_API_KEY}`
//         );

//         const data = await response.json();
//         const formattedVideos = data.items.map((video) => ({
//           id: video.id,
//           title: video.snippet.title,
//           channel: video.snippet.channelTitle,
//           thumbnail: video.snippet.thumbnails.high.url,
//         }));

//         setVideos(formattedVideos);
//       } catch (error) {
//         console.error("API Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchVideos();
//   }, []);

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div className="p-4 ">
//       <h1>Trending Gaming Videos</h1>
//       <ul>
//         {videos.map((item ,i) => (
//           <li key={i}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// // import Toggle from "./components/Toggle.jsx";
// export default function App(){
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     async function fetchVideos() {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=${import.meta.env.VITE_RAPID_API_KEY}`
//         );

//         const data = await response.json();
//         const formattedVideos = data.items.map((video) => ({
//           id: video.id,
//           title: video.snippet.title,
//           channel: video.snippet.channelTitle,
//           thumbnail: video.snippet.thumbnails.high.url,
//         }));

//         setVideos(formattedVideos);
//         console.log(formattedVideos)
//       } catch (error) {
//         console.error("API Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchVideos();
//   }, []);

//   if (loading) return <h2>Loading...</h2>;
  
//   return(
//     <div>
//       <div>

//       {videos.map((item, id) => (
//         <div key={id}>
//           <img src={item.thumbnail} alt={item.title} />
//           <h2>{item.title}</h2>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </div>
//     {/* <Toggle/> */}
//     </div>
//   )
// }


// import React, { useEffect, useState } from "react";
// import SearchFeed from "./components/SearchFeed.jsx";
// import Navbar from "./components/Navbar";
// import Shimmer from "./components/Shimmer";
// // import Feed from "./components/Feed.jsx";
// import VideoCard from "./components/VideoCard";
// import WatchPage from "./components/WatchPage.jsx";

// export default function App(){
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     async function fetchVideos() {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=${import.meta.env.VITE_RAPID_API_KEY}`
//         );

//         const data = await response.json();
//         const formattedVideos = data.items.map((video) => ({
//           id: video.id,
//           title: video.snippet.title,
//           channel: video.snippet.channelTitle,
//           thumbnail: video.snippet.thumbnails.high.url,
//         }));

//         setVideos(formattedVideos);
//         console.log(formattedVideos)
//       } catch (error) {
//         console.error("API Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchVideos();
//   }, []);

//   if (loading) return <h2>Loading...</h2>;

//   return(
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       <Navbar/>
//       {loading
//         ? Array(8)
//             .fill(0)
//             .map((_, i) => <Shimmer key={i} />)
//         : videos.map((v) => <VideoCard key={v.id} video={v} />)}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoCard from "./components/VideoCard";
import WatchPage from "./components/WatchPage";
import Shimmer from "./components/Shimmer";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=12&key=${import.meta.env.VITE_RAPID_API_KEY}`
        );

        const data = await response.json();

        const formattedVideos = data.items.map((video) => ({
          id: video.id,
          title: video.snippet.title,
          channel: video.snippet.channelTitle,
          thumbnail: video.snippet.thumbnails.high.url,
        }));

        setVideos(formattedVideos);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <>
      {/* Navbar Always Visible */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {loading
                ? Array(8)
                    .fill(0)
                    .map((_, i) => <Shimmer key={i} />)
                : videos.map((v) => (
                    <VideoCard key={v.id} video={v} />
                  ))}
            </div>
          }
        />

        {/* Search Page */}
        <Route path="/search/:searchTerm" element={<SearchFeed />} />

        {/* Watch Page */}
        <Route path="/watch/:id" element={<WatchPage />} />
      </Routes>
    </>
  );
}
