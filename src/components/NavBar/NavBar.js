import React from "react";

import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const styling = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 80,
  height: 20,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const HEADER = styled.div`
    height: auto;
    width: 100%;
    background-color: #e2e7e1;
  `;
  const ITEM = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 70px;

    input {
      border-radius: 5px;
      cursor: pointer;
    }
    button {
      color: rgb(255, 255, 255);
      background-color: rgb(4, 40, 147);
      border: 1px solid rgb(4, 40, 147);
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      left: 400px;
    }
  `;
  const TABLE = styled.div`
    position: absolute;
    top: 200px;
    left: 100px;

    table {
      border-collapse: separate;
      border-spacing: 100px 55px;
    }
  `;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [On, setOn] = React.useState(false);
  const handleOn = () => setOn(true);
  const handleOff = () => setOn(false);
  const [drop, setDrop] = React.useState(false);
  const handleYes = () => setDrop(true);
  const handleNo = () => setDrop(false);

  //const navigate = useNavigate();

  return (
    <div>
      <HEADER>
        <h3>Toll Management Application</h3>
      </HEADER>
      <ITEM>
        <h4>Toll entries/Vehicle entries</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FiFilter onClick={handleYes} />
        ; &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Search Vehicle" name="search" />
        &nbsp;&nbsp;
        <button onClick={handleOpen}>Add vehicle entry</button>&nbsp;&nbsp;
        <button onClick={handleOn}>Add new toll</button>&nbsp;&nbsp;
        {/* <button>View all tolls</button>&nbsp;&nbsp; */}
        <span>
          <Link to="/toll" style={{ position: "relative", left: "400px" }}>
            View All Tolls
          </Link>
        </span>
      </ITEM>

      <TABLE>
        <table>
          <thead>
            <tr>
              <th>VEHICLE TYPE</th>
              <th>VEHICLE NUMBER</th>
              <th>DATE/TIME</th>
              <th>TOLLNAME</th>
              <th>TARIFF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Car/Jeep/Van</td>
              <td>TN24AQ4644</td>
              <td>09/09/2022, 16:43:48</td>
              <td>Chengalpattu</td>
              <td>60</td>
            </tr>
            <tr>
              <td>Car/Jeep/Van</td>
              <td>TN19QQ1234</td>
              <td>09/09/2022,15:30:34</td>
              <td>Kappalur</td>
              <td>75</td>
            </tr>
            <tr>
              <td>Heavy Vehicle</td>
              <td>TN24AA1234</td>
              <td>09/09/2022,12:12:34</td>
              <td>Kappalur</td>
              <td>400</td>
            </tr>
          </tbody>
        </table>
      </TABLE>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h4 style={{ textAlign: "center" }}>Add new Entry</h4>
          <label>Search Vehicle type*</label>
          <br />
          <select placeholder="Car\Jeep\Van" style={{ width: "150px" }}>
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy Vehicle</option>
          </select>
          <br />
          <br />
          <label>Vehicle Number*</label>
          <br />
          <TextField placeholder="Enter your Login ID" />
          <br />
          <br />
          <label>Tariff*</label>
          <br />
          <br />
          <TextField placeholder="Tariff Amount" type="disabled" />
          <br />
          <br />
          <Button variant="contained">Add Entry</Button>
        </Box>
      </Modal>
      <Modal open={On} onClose={handleOff}>
        <Box sx={styles}>
          <h5>Add New Toll</h5>
          <br />
          <br />
          <label>
            Toll Name<span>*</span>
          </label>
          <br />
          <br />
          <TextField placeholder="Enter toll name" />
          <br />
          <br />
          <label>
            Vehicle fare details<span>*</span>
          </label>
          <br />
          <select
            placeholder="Car\Jeep\Van"
            style={{ width: "150px", height: "50px" }}
          >
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy Vehicle</option>
          </select>
          &nbsp;
          <TextField placeholder="Single Journey" />
          &nbsp;
          <TextField placeholder="Return Journey" />
          <select
            placeholder="Car\Jeep\Van"
            style={{ width: "150px", height: "50px" }}
          >
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy Vehicle</option>
          </select>
          &nbsp;
          <TextField placeholder="Single Journey" />
          &nbsp;
          <TextField placeholder="Return Journey" />
          <select
            placeholder="Car\Jeep\Van"
            style={{ width: "150px", height: "50px" }}
          >
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy Vehicle</option>
          </select>
          &nbsp;
          <TextField placeholder="Single Journey" />
          &nbsp;
          <TextField placeholder="Return Journey" />
          <select
            placeholder="Car\Jeep\Van"
            style={{ width: "150px", height: "50px" }}
          >
            <option>Car/Jeep/Van</option>
            <option>LCV</option>
            <option>Truck/Bus</option>
            <option>Heavy Vehicle</option>
          </select>
          &nbsp;
          <TextField placeholder="Single Journey" />
          &nbsp;
          <TextField placeholder="Return Journey" />
          <br />
          <br />
          <Button
            variant="contained"
            style={{ width: "300px", position: "absolute", right: "200px" }}
          >
            Add Details
          </Button>
        </Box>
      </Modal>

      <Modal open={drop} onClose={handleNo}>
        <Box sx={styling}>
          <select
            placeholder="Car\Jeep\Van"
            style={{
              width: "100px",
              height: "50px",
              position: "absolute",
              top: "15px",
              right: "15px",
            }}
          >
            <option>All</option>
            <option>Kappalur</option>
            <option>Chengalpattu</option>
            <option>Krishnagiri</option>
          </select>
        </Box>
      </Modal>
    </div>
  );
};
export default Navbar;
