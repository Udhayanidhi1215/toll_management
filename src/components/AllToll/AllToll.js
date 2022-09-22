import React from "react";
import styled from "styled-components";
const TABLE = styled.div`
  position: absolute;
  top: 200px;
  left: 100px;

  table {
    border-collapse: separate;
    border-spacing: 100px 55px;
  }
`;
const AllToll = () => {
  return (
    <div>
      <TABLE>
        <table>
          <th>TOLL NAME</th>
          <th>CAR/JEEP/VAN</th>
          <th>LCV</th>
          <th>TRUCK/BUS</th>
          <th>HEAVY VEHICLE</th>

          <tr>
            <td>Chengalpattu</td>
            <td>60/30</td>
            <td>95/50</td>
            <td>205/100</td>
            <td>320/160</td>
          </tr>
          <tr>
            <td>Kappalur</td>
            <td>75/50</td>
            <td>125/80</td>
            <td>260/120</td>
            <td>400/200</td>
          </tr>
          <tr>
            <td>Krishnagiri</td>
            <td>70/40</td>
            <td>110/65</td>
            <td>235/130</td>
            <td>355/200</td>
          </tr>
        </table>
      </TABLE>
    </div>
  );
};

export default AllToll;
