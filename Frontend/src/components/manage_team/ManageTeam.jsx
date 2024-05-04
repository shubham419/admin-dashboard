import React from "react";
import TeamRow from "./TeamRow";
import CustomSideBar from "../CustomSideBar/CustomSideBar";

function ManageTeams() {
  // Fetch team data and manage state here

  const teamsData = [
    {
      id: 1,
      name: "Team Alpha",
      createDate: "2022-01-15",
      membersCount: 8,
      city: "New York",
      captain: "John Doe",
    },
    {
      id: 2,
      name: "Team Beta",
      createDate: "2022-02-28",
      membersCount: 5,
      city: "Los Angeles",
      captain: "Jane Smith",
    },
    {
      id: 3,
      name: "Team Gamma",
      createDate: "2022-03-10",
      membersCount: 12,
      city: "Chicago",
      captain: "Michael Johnson",
    },
    {
      id: 4,
      name: "Team Delta",
      createDate: "2022-04-05",
      membersCount: 6,
      city: "Houston",
      captain: "Emily Brown",
    },
    {
      id: 5,
      name: "Team Epsilon",
      createDate: "2022-05-20",
      membersCount: 10,
      city: "San Francisco",
      captain: "David Wilson",
    },
    {
      id: 6,
      name: "Team Zeta",
      createDate: "2022-06-07",
      membersCount: 7,
      city: "Miami",
      captain: "Olivia Martinez",
    },
    {
      id: 7,
      name: "Team Eta",
      createDate: "2022-07-15",
      membersCount: 9,
      city: "Seattle",
      captain: "Daniel Taylor",
    },
    {
      id: 8,
      name: "Team Theta",
      createDate: "2022-08-22",
      membersCount: 11,
      city: "Boston",
      captain: "Sophia Anderson",
    },
    {
      id: 9,
      name: "Team Iota",
      createDate: "2022-09-03",
      membersCount: 8,
      city: "Denver",
      captain: "William Martinez",
    },
    {
      id: 10,
      name: "Team Kappa",
      createDate: "2022-10-18",
      membersCount: 6,
      city: "Atlanta",
      captain: "Isabella Garcia",
    },
  ];

  return (
    <div>
      <CustomSideBar selectedMenu="manage-teams" />
      <div style={{
         width: "calc(100% - 200px)",
         marginLeft: "200px"
      }}>
        <h1>Manage Teams</h1>
        <table>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Team Create Date</th>
              <th>Team Members Count</th>
              <th>City</th>
              <th>Captain</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamsData.map((team) => (
              <TeamRow key={team.id} team={team} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageTeams;
