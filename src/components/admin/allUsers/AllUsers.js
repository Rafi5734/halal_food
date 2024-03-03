import React from "react";
import UserList from "./userList/UserList";

const AllUsers = () => {
  return (
    <div className="overflow-x-auto w-full container mx-auto">
      <p className="text-center text-4xl mt-5 font-bold mb-10">All Users</p>
      <UserList />
    </div>
  );
};

export default AllUsers;
