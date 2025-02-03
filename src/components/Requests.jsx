import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestSlice";
import axios from "axios";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (status,_id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status +"/"+ _id,
        {},
        { withCredentials: true }
      );
      
      // dispatch(removeRequests(_id));
    }
    catch (error) {
      console.log(error);
    }
  };

  const userRequests = async () => {
    const res = await axios.get(BASE_URL + "/user/requests/recieved", {
      withCredentials: true,
    });
    dispatch(addRequests(res?.data?.data));
    console.log(res);
  };
  useEffect(() => {
    userRequests();
  }, []);

  if (!requests) return;
  if (requests.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl text-center">Oops! No Requests Found !!!</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-4 rounded-lg">
      <h1 className="text-4xl shadow-xl mb-11">Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6  max-w-screen-md ml-5">
        {requests.map((request, index) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          return (
            <div>
            key={index}
              <div className="card bg-base-300 image-full h-[500px] -mt-5 my-20">
                <figure>
                  <img src={photoUrl} alt="Img" className="h-[400px] w-full" />
                </figure>
                <div className="card-body mt-60">
                  <h2 className="card-title text-white text-4xl">
                    {firstName} {lastName}
                  </h2>

                  <p className="text-white text-xl">
                    {about || "No details available"}
                  </p>
                  <p className="text-white text-xl">Age: {age || "N/A"}</p>
                  <p className="text-white text-xl">
                    Gender: {gender || "N/A"}
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      // onClick={reviewRequest("accepted", request._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-secondary"
                      // onClick={reviewRequest("rejected", request._id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="mb-24"></div>
      </div>
    </div>
  );
};

export default Requests;







// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addRequests, removeRequests } from "../utils/requestSlice";
// import { useEffect, useState } from "react";

// const Requests = () => {
//   const requests = useSelector((store) => store.requests);
//   const dispatch = useDispatch();

//   const reviewRequest = async (status, _id) => {
//     try {
//       const res = axios.post(
//         BASE_URL + "/request/review/" + status + "/" + _id,
//         {},
//         { withCredentials: true }
//       );
//       dispatch(removeRequests(_id));
//     } catch (err) {}
//   };

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/user/requests/received", {
//         withCredentials: true,
//       });

//       dispatch(addRequests(res.data.data));
//     } catch (err) {}
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   if (!requests) return;

//   if (requests.length === 0)
//     return <h1 className="flex justify-center my-10"> No Requests Found</h1>;

//   return (
//     <div className="text-center my-10">
//       <h1 className="text-bold text-white text-3xl">Connection Requests</h1>

//       {requests.map((request) => {
//         const { _id, firstName, lastName, photoUrl, age, gender, about } =
//           request.fromUserId;

//         return (
//           <div
//             key={_id}
//             className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300  mx-auto"
//           >
//             <div>
//               <img
//                 alt="photo"
//                 className="w-20 h-20 rounded-full"
//                 src={photoUrl}
//               />
//             </div>
//             <div className="text-left mx-4 ">
//               <h2 className="font-bold text-xl">
//                 {firstName + " " + lastName}
//               </h2>
//               {age && gender && <p>{age + ", " + gender}</p>}
//               <p>{about}</p>
//             </div>
//             <div>
//               <button
//                 className="btn btn-primary mx-2"
//                 onClick={() => reviewRequest("rejected", request._id)}
//               >
//                 Reject
//               </button>
//               <button
//                 className="btn btn-secondary mx-2"
//                 onClick={() => reviewRequest("accepted", request._id)}
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Requests;
