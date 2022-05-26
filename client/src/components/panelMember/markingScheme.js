import React from "react";
import NavBar from "../common/navBar";
import Table from 'react-bootstrap/Table'

export default function MarkingSchemes(){

    return(

        <div>
            <NavBar/>
<div className="container">
           
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Criterion</th>
      <th>Comment</th>
      <th>Mark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
       <td>Understanding</td>
      <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
    <tr>
       <td>Scientific
Practice</td>
       <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
    <tr>
       <td>Effort</td>
       <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
    <tr>
       <td>Initiative and
self-motivation </td>
       <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
    <tr>
       <td>Achievement </td>
      <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
    <tr>
       <td>Report Content </td>
      <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
    <tr>
       <td>Report
Presentation </td>
      <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
    <tr>
       <td> Oral Exam</td>
      <td><input type='text'/></td>
      <td><input type='text'/></td>
    </tr>
  
  </tbody>
</Table>

</div>
        </div>


    )
}