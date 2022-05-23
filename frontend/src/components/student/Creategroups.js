import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Registration() {
  const [form, setForm] = useState({
    gid: "",
    first: "",
    second: "",
    third: "",
    forth: "",
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

    await fetch("http://localhost:5000/group/add", {
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
        gid: "",
        first: "",
        second: "",
        third: "",
        forth: "",
    });
    // navigate("/reg");
  }

  // This following section will display the form that takes the input from the user.
  return (
      <div className="container">
        <h3>Registration</h3>
        <form onSubmit={onSubmit}>

        
         <div className="form-group">
            <label htmlFor="gid">Group ID</label>
            <input
              type="text"
              className="form-control"
              id="gid"
              value={form.gid}
              onChange={(e) => updateForm({ gid: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="first">First Member Name</label>
            <input
              type="text"
              className="form-control"
              id="first"
              value={form.first}
              onChange={(e) => updateForm({ first: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="second">Second Member Name</label>
            <input
              type="text"
              className="form-control"
              id="second"
              value={form.second}
              onChange={(e) => updateForm({ second: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="second">Third Member Name</label>
            <input
              type="text"
              className="form-control"
              id="third"
              value={form.third}
              onChange={(e) => updateForm({ third: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="second">Forth Member Name</label>
            <input
              type="text"
              className="form-control"
              id="forth"
              value={form.forth}
              onChange={(e) => updateForm({ forth: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  );
}
