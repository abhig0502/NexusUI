import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addUserProfile } from "../utils/userProfileSlice";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user }) => {
  const dispatch = useDispatch();
  const user2 = useSelector((store) => store?.user);
  console.log(user2);

  // const userProfile = async () => {
  //   const res = await axios.get(BASE_URL + "/profile/view", {
  //     withCredentials: true,
  //   });
  //   dispatch(addUserProfile(res?.data));
  //   console.log(res?.data);
  // };

  // useEffect(() => {
  //   userProfile();
  // }, []);

  // console.log(user);
  // const userData = { userData: user };
  // console.log(userData);

  console.log(user);

  const [firstName, setFirstName] = useState(
    user?.firstName || user2.firstName
  );
  const [lastName, setLastName] = useState(user?.lastName || user2.lastName);
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || user2.photoUrl);
  const [age, setAge] = useState(user?.age || user2.age);
  const [gender, setGender] = useState(user?.gender || user2.gender);
  const [about, setAbout] = useState(user?.about || user2.about);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  //   console.log(user);
  const saveProfile = async () => {
    //Clear Errors
   
    setError("");
    try {
      const res = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data));
      console.log(res?.data);
      navigate("/");

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response);
    }
  };
  const navigate=useNavigate();
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10">
          <div className="card bg-base-300 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center">Edit Profile</h2>
              <div>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name:</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <label className="form-control w-full max-w-xs my-2">
                    <div className="label">
                      <span className="label-text">Last Name:</span>
                    </div>
                    <input
                      type="text"
                      value={lastName}
                      className="input input-bordered w-full max-w-xs"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                  <div className="label">
                    <span className="label-text">Photo URL :</span>
                  </div>
                  <input
                    type="text"
                    value={photoUrl}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Age:</span>
                  </div>
                  <input
                    type="text"
                    value={age}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Gender:</span>
                  </div>
                  <input
                    type="text"
                    value={gender}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setGender(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">About:</span>
                  </div>
                  <input
                    type="text"
                    value={about}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </label>
              </div>
              <p className="text-red-500">{error}</p>
              <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, photoUrl, age, gender, about }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};
export default EditProfile;
