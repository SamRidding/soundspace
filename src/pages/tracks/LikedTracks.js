// import React, { useEffect, useState } from "react";
// import { axiosReq } from "../../api/axiosDefaults";
// import { useCurrentUser } from "../../contexts/CurrentUserContexts";
// import Track from "./Track";
// import Loading from "../../components/Loading";

// const LikedTracks = () => {
//   const currentUser = useCurrentUser();
//   const userID = currentUser?.pk;
//   const [userLikes, setUserLikes] = useState([]);

//   // const getUserLikes = async () => {
//   //   const response = await axiosReq.get(
//   //     `/tracks/?likes__owner__profile=${userID}`
//   //   );
//   //   console.log(response);
//   // };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await axiosReq.get(
//           `/tracks/?likes__owner__profile=${userID}`
//         );
//         console.log(data.data);
//         setUserLikes(data.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, [userID]);

//   return <div></div>;
// };

// export default LikedTracks;
