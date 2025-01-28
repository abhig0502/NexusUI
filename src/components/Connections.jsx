import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import axios from "axios";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const userConnections = async () => {
    const res = await axios.get(BASE_URL + "/user/connections", {
      withCredentials: true,
    });
    dispatch(addConnections(res?.data?.data));
  };

  useEffect(() => {
    userConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl text-center">
          No Connections Found. You Are Not Connected To Anyone.
        </h1>
      </div>
    );
  console.log(connections);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-2 rounded-lg">
      <h1 className="text-4xl shadow-xl mb-11">Connections</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6  max-w-screen-lg ml-16">
        {connections.map((connection, index) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            connection;

          return (
            <div>
              <div className="card bg-base-300 image-full h-[500px] ">
                <figure >
                  <img
                    src={photoUrl}
                    alt="Shoes"
                    className="h-[400px] w-full"
                  />
                </figure>
                <div className="card-body mt-60" >
                  <h2 className="card-title text-white text-4xl">{firstName} {lastName}</h2>

                  <p className="text-white text-xl">{about || "No details available"}</p>
                <p className="text-white text-xl">Age: {age || "N/A"}</p>
                <p className="text-white text-xl">Gender: {gender || "N/A"}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Connect</button>
                  </div>
                </div>
              </div>
              

              {/* <div
              key={index}
              className="card card-side bg-base-300 shadow-xl flex flex-col border-2 border-gray-600 rounded-lg w-[600px] justify-end "
            >
              <figure className=" w-full h-[400px] relative">
                <img
                  src={photoUrl || "https://via.placeholder.com/150"}
                  alt={`${firstName} ${lastName}`}
                  className="w-full h-full object-cover rounded-lg blur-[1px] "
                />

              </figure>
              <div className="card-body absolute z-1 -my-7">
                <h2 className="card-title -mt-5 text-white text-3xl">
                  {firstName} {lastName}
                </h2>
                <p className="text-white text-xl">{about || "No details available"}</p>
                <p className="text-white text-xl">Age: {age || "N/A"}</p>
                <p className="text-white text-xl">Gender: {gender || "N/A"}</p>
                <div className="card-actions justify-end -mt-7">
                  <button className="btn btn-primary -mr-14">Connect</button>
                </div>
              </div>
            </div> */}
            </div>

          );
        })}
        <div className="mb-24"></div>
      </div>
    </div>
  );
};

export default Connections;
