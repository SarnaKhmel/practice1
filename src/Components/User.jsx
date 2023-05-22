import React from "react";
import "./userStyles.css";
import { RxAccessibility } from "react-icons/rx";
import { IoCloudOffline } from "react-icons/io5";
export const User = ({ customer }) => {
  return (
    <li className="item">
      <h2>{customer.online ? <RxAccessibility /> : <IoCloudOffline />}</h2>
      <h2>{customer.name}</h2>
      <h2>{customer.age}</h2>
      <h2>{customer.sex}</h2>
    </li>
  );
};

export default User;
