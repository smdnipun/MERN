import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    address: "",
    id: "",
    faculty: "",
    specialization: "",
    password:"",
    rpassword:"",
  });

//   const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newItem = { ...form };

    await fetch("http://localhost:5000/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
        name: "",
        position: "",
        email: "",
        phone: "",
        address: "",
        id: "",
        faculty: "",
        specialization: "",
        password:"",
        rpassword:"",
    });
    // navigate("/reg");
  }

  // This following section will display the form that takes the input from the user.
  return (
      <div className="container">
        <h3>Registration</h3>
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
            <label htmlFor="password">Enter the Password</label>
            <input
              type="text"
              className="form-control"
              id="password"
              value={form.password}
              onChange={(e) => updateForm({ password: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rpassword">Re enter the password</label>
            <input
              type="text"
              className="form-control"
              id="rpassword"
              value={form.rpassword}
              onChange={(e) => updateForm({ rpassword: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}
