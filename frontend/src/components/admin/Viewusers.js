import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.position}</td>
    <td>{props.user.email}</td>
    <td>{props.user.phone}</td>
    <td>{props.user.address}</td>
    <td>{props.user.id}</td>
    <td>{props.user.faculty}</td>
    <td>{props.user.specialization}</td>
    <td>
      <Link className="btn btn-link" to={`/edituser/${props.user._id}`}>
        Edit
      </Link>{" "}
      |
      <button
        className="btn btn-link"
        onClick={() => {
          props.deleteUser(props.user._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function Viewusers() {
  const [users, setUsers] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getUsers() {
      const response = await fetch(`http://localhost:5000/user/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const users = await response.json();
      setUsers(users);
    }

    getUsers();

    return;
  }, [users.length]);

  //This method will delete a record
  async function deleteUser(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newUsers = users.filter((el) => el._id !== id);
    setUsers(newUsers);
  }

  // This method will map out the records on the table
  function userList() {
    return users.map((user) => {
      return (
        <User
          user={user}
          deleteUser={() => deleteUser(user._id)}
          key={user._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
  
      <div>
        <h3>Users</h3>
        <table
          className="table table-striped"
          style={{ marginTop: 50, width: 700 }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Address</th>
              <th>User ID</th>
              <th>Faculty</th>
              <th>Specialization</th>
            </tr>
          </thead>
          <tbody>{userList()}</tbody>
        </table>
      </div>
  )
}
