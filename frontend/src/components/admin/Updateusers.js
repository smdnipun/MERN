import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Updateusers() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    address: "",
    id: "",
    faculty: "",
    specialization: "",

  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:5000/user/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const user = await response.json();
      if (!user) {
        window.alert(`User with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(user);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    console.log("dd");
    const editedUser = {
      name: form.name,
      position: form.position,
      email: form.email,
      phone: form.phone,
      address: form.address,
      id: form.id,
      faculty: form.faculty,
      specialization: form.specialization,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/user/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/userlist");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div className="container">
        <h3>Update User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              id="position"
              value={form.position}
              onChange={(e) => updateForm({ position: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={form.phone}
              onChange={(e) => updateForm({  phone: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={form.address}
              onChange={(e) => updateForm({ address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="id">User ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              value={form.id}
              onChange={(e) => updateForm({ id: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="faculty">Faculty</label>
            <input
              type="text"
              className="form-control"
              id="faculty"
              value={form.faculty}
              onChange={(e) => updateForm({ faculty: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization</label>
            <input
              type="text"
              className="form-control"
              id="specialization"
              value={form.specialization}
              onChange={(e) => updateForm({ specialization: e.target.value })}
            />
          </div>

      <div className="form-group">
        <input
          type="submit"
          value="Update User"
          className="btn btn-primary"
        />
      </div>
      </form>
    </div>
  );
}
