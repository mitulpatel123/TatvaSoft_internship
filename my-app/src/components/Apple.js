import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Avatar, Popover } from "@mui/material";
// import { blue } from "@mui/material/colors";
import LogoutIcon from '@mui/icons-material/Logout';

export const Apple = () => {
  const [name, setName] = useState("Mitul");
  const [email, setEmail] = useState("me@gmail.com");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const Navigate = useNavigate();

  const onHomePageButtonClick = () => {
    // Navigate("/");
    console.log("the button has been clicked");
    console.log("Name:", name);
    console.log("Email:", email);
    Navigate("/");
  };

  const handleClick = (event) => {
    console.log(123);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <div style={{ padding: 5 }}>
      {/* <div>Apple Page</div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          onClick={handleClick}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            columnGap: 5,
          }}
        >
          <Avatar sx={{ bgcolor: "blue" }}>MP</Avatar>
          <span>Mitul Patel</span>
        </div>
      </div>
      <div
        style={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          rowGap: 8,
          cursor:"pointer",
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {/* <button onClick={onHomePageButtonClick}>Navigate To Home Page</button> */}
        <Button variant="contained" onClick={onHomePageButtonClick}>
          Submit
        </Button>
      </div>

      <Popover
        open={open}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <div style={{padding:5}}>
        <Button variant="contained" onClick={onHomePageButtonClick}>
        <LogoutIcon/>
        </Button>
            </div>
      </Popover>
    </div>
  );
};
