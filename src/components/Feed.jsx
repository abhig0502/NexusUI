import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) {
      console.log(feed);
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;
  if (feed.length <= 0) {
    <div className="items-center text-4xl">
      <h1>No feeds found !</h1>
    </div>;
  }

  return (
    feed && (
      <div className="flex flex-row justify-center my-6 overflow-x-scroll">
        <div className=" justify-center w-[400px] h-[600px]">
          {feed.map((f, index) => (
            <UserCard key={index} user={feed[index]} />
          ))}
          {/* <UserCard user={feed[0]} /> */}
        </div>
      </div>
    )
  );
};

export default Feed;
