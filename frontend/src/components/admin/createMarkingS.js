import React from "react";
import NavBar from "../common/navBar";
import Table from 'react-bootstrap/Table'

export default function CreateMarkingSchemes(){

    return(

        <div>
            <NavBar/>
<div className="container">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Section</th>
      <th>Content</th>
      <th>Mark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Task</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
   
      <td>Criteria</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
   
      <td>Maximum mark</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
   
  </tbody>
</Table>

</div>
        </div>


    )
}