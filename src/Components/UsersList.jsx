import React from "react";
import User from "./User";
import "./userStyles.css";
const UsersList = ({ customers }) => {
  console.log(customers);
  return (
    <div className="block">
      <h2>UsersList</h2>
      <ul>
        {customers !== undefined ? (
          <>
            {customers.map((customer) => (
              <User key={customer.id} customer={customer} />
            ))}
          </>
        ) : (
          <>No customers</>
        )}
      </ul>
    </div>
  );
};

export default UsersList;
