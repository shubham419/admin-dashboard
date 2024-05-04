import React from "react";
import UserRow from "./UserRow";
import CustomSideBar from "../CustomSideBar/CustomSideBar";

function ManageUsers() {
  const usersData = [
    {
      id: 1,
      userName: "John Doe",
      userType: "Captain",
      joiningDate: "2022-01-15",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
      city: "New York",
    },
    {
      id: 2,
      userName: "Jane Smith",
      userType: "User",
      joiningDate: "2022-02-28",
      email: "jane@example.com",
      phoneNumber: "987-654-3210",
      city: "Los Angeles",
    },
    {
      id: 3,
      userName: "Michael Johnson",
      userType: "User",
      joiningDate: "2022-03-10",
      email: "michael@example.com",
      phoneNumber: "111-222-3333",
      city: "Chicago",
    },
    {
      id: 4,
      userName: "Emily Brown",
      userType: "User",
      joiningDate: "2022-04-05",
      email: "emily@example.com",
      phoneNumber: "444-555-6666",
      city: "Houston",
    },
    {
      id: 5,
      userName: "David Wilson",
      userType: "User",
      joiningDate: "2022-05-20",
      email: "david@example.com",
      phoneNumber: "777-888-9999",
      city: "San Francisco",
    },
    {
      id: 6,
      userName: "Olivia Martinez",
      userType: "User",
      joiningDate: "2022-06-07",
      email: "olivia@example.com",
      phoneNumber: "123-987-6543",
      city: "Miami",
    },
    {
      id: 7,
      userName: "Daniel Taylor",
      userType: "User",
      joiningDate: "2022-07-15",
      email: "daniel@example.com",
      phoneNumber: "987-654-3210",
      city: "Seattle",
    },
    {
      id: 8,
      userName: "Sophia Anderson",
      userType: "User",
      joiningDate: "2022-08-22",
      email: "sophia@example.com",
      phoneNumber: "444-555-6666",
      city: "Boston",
    },
    {
      id: 9,
      userName: "William Martinez",
      userType: "User",
      joiningDate: "2022-09-03",
      email: "william@example.com",
      phoneNumber: "777-888-9999",
      city: "Denver",
    },
    {
      id: 10,
      userName: "Isabella Garcia",
      userType: "User",
      joiningDate: "2022-10-18",
      email: "isabella@example.com",
      phoneNumber: "123-987-6543",
      city: "Atlanta",
    },
  ];
  return (
    <div>
      <CustomSideBar selectedMenu="manage-users"/>
      <div
        style={{
          width: "calc(100% - 200px)",
          marginLeft: "200px",
        }}
      >
        <h1>Manage Users</h1>
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Type of User</th>
              <th>Joining Date</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageUsers;
