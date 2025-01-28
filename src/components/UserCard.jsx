import React from "react";

const UserCard = ({user}) => {
    // console.log(user);
    const {firstName,lastName,about,photoUrl,age,gender}=user;

  return  (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img
            src={user.photoUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName +" "+lastName}</h2>
          {age && gender && <p>{age+" "+gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
