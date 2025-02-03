// import React, { useEffect } from "react";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addConnections } from "../utils/connectionSlice";
// import axios from "axios";

// const Connections = () => {
//   const dispatch = useDispatch();
  

//   const userConnections = async () => {
//     const res = await axios.get(BASE_URL + "/user/connections", {
//       withCredentials: true,
//     });
//     dispatch(addConnections(res?.data?.data));
//     // console.log(res?.data?.data);
//   };

//   useEffect(() => {
//     userConnections();
//   }, []);

//   const connections = useSelector((store) => store.connections);
//   // console.log(connections);

//   if (!connections) return;
//   if (connections.length === 0)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h1 className="text-4xl text-center">
//           No Connections Found. You Are Not Connected To Anyone.
//         </h1>
//       </div>
//     );
//   // console.log(connections[0].firstName);

//   // return (
//   //   <div className="flex flex-col items-center justify-center w-full mt-2 rounded-lg">
//   //     <h1 className="text-4xl shadow-xl mb-11">Connections</h1>
//   //     <div className="grid grid-cols-1 md:grid-cols-1 gap-6  max-w-screen-md ml-16">
//   //       {connections.map((connection, index) => {
//   //         const { firstName, lastName, photoUrl, age, gender, about } =
//   //           connection;

//   //         return (
//   //           <div>
//   //             <div className="card bg-base-300 image-full h-[500px] ">
//   //               <figure>
//   //                 <img
//   //                   src={photoUrl}
//   //                   alt="Shoes"
//   //                   className="h-[400px] w-full"
//   //                 />
//   //               </figure>
//   //               <div className="card-body ">
//   //                 <div className="">
//   //                   <div className="">
//   //                     <h2 className="card-title text-white text-4xl items-end">
//   //                       {firstName} {lastName}
//   //                     </h2>
//   //                     <p className="text-white text-xl ">
//   //                       {about || "No details available"}
//   //                     </p>
//   //                     <p className="text-white text-xl ">Age: {age || "N/A"}</p>
//   //                     <p className="text-white text-xl">
//   //                       Gender: {gender || "N/A"}
//   //                     </p>
//   //                   </div>
//   //                 </div>

//   //                 <div className="card-actions justify-between">
//   //                   <button className="btn btn-primary">Connect</button>
//   //                 </div>
//   //               </div>
//   //             </div>
//   //             {/* <div className="mb-44"></div> */}

//   //             {/* <div
//   //             key={index}
//   //             className="card card-side bg-base-300 shadow-xl flex flex-col border-2 border-gray-600 rounded-lg w-[600px] justify-end "
//   //           >
//   //             <figure className=" w-full h-[400px] relative">
//   //               <img
//   //                 src={photoUrl || "https://via.placeholder.com/150"}
//   //                 alt={`${firstName} ${lastName}`}
//   //                 className="w-full h-full object-cover rounded-lg blur-[1px] "
//   //               />

//   //             </figure>
//   //             <div className="card-body absolute z-1 -my-7">
//   //               <h2 className="card-title -mt-5 text-white text-3xl">
//   //                 {firstName} {lastName}
//   //               </h2>
//   //               <p className="text-white text-xl">{about || "No details available"}</p>
//   //               <p className="text-white text-xl">Age: {age || "N/A"}</p>
//   //               <p className="text-white text-xl">Gender: {gender || "N/A"}</p>
//   //               <div className="card-actions justify-end -mt-7">
//   //                 <button className="btn btn-primary -mr-14">Connect</button>
//   //               </div>
//   //             </div>
//   //           </div> */}
//   //           </div>
//   //         );
//   //       })}
//   //       <div className="mb-24"></div>
//   //     </div>
//   //   </div>
//   // )


//   return (
//     <div className="text-center my-10">
//       <h1 className="text-bold text-white text-3xl">Connections</h1>

//       {connections.map((connection) => {
//         const {firstName, lastName, photoUrl, age, gender, about } =
//           connection;

//         return (
//           <div
            
//             className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto justify-between"
//           >
//             <div className="w-[500px] h-20 ">
//               <img
//                 alt="photo"
//                 className="w-[100px] h-20 rounded-full object-cover"
//                 src={photoUrl}
//               />

              
//             </div>

            
//             <div className="text-left ml-3 ">
//               <div className="">
//               <h2 className="font-bold text-xl">
//                 {firstName + " " + lastName}
//               </h2>
//               {age && gender && <p>{age + ", " + gender}</p>}
//               </div>
//               <p>{about}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );



// };

// export default Connections;





import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      // Handle Error Case
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1> No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Connections;
