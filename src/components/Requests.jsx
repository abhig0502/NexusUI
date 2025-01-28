import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import axios from "axios";
import { useEffect } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
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
    <div className="flex flex-col items-center justify-center w-full mt-2 rounded-lg">
      <h1 className="text-4xl shadow-xl mb-11">Request</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6  max-w-screen-lg ml-16">
        {requests.map((request, index) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          return (
            <div>
              <div className="card bg-base-300 image-full h-[500px] ">
                <figure>
                  <img
                    src={photoUrl}
                    alt="Shoes"
                    className="h-[400px] w-full"
                  />
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
                    <button className="btn btn-primary">Connect</button>
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
