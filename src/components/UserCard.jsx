import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  // console.log(user);
  const dispatch=useDispatch();
  const {_id, firstName, lastName, about, photoUrl, age, gender } = user;
  console.log({user});

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,{},{withCredentials:true}
      );

      dispatch(removeUserFromFeed(userId));
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl  min-w-full min-h-full m-auto ">
        <figure>
          <img src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " " + gender}</p>}
          <p>{about}</p>
          {user._id && (
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={()=>{handleSendRequest("ignored",_id)}}>Ignore</button>
              <button className="btn btn-secondary"  onClick={()=>{handleSendRequest("interested",_id)}}>Interested</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
