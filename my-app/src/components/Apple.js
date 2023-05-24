import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from "react";
import { TextField } from "@mui/material";
import { Popover } from "@mui/material";
import { Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

export const Apple = () => {
    const [name, setName] = useState("mitul");
    const [email, setEmail] = useState("mitul@gmail.com");
    const [open, setOpen] = useState(false);
    const [anchorE1, setAnchorE1] = useState(null);
    const Navigate = useNavigate();
    
    const onHomePageButtonClick = () => {
        Navigate("/");
        console.log("Name: ", name);
        console.log("Email: ", email);
        // alert("Button has been click");
    };

    const handleClick = (event) => {
        console.log(123);
        setAnchorE1(event.currentTarget);
        setOpen(true);
    }

    const handleClose = () => {
        setAnchorE1(null);
        setOpen(false);
    }

    return (
        <div style={{
            padding: 15,
        }}>
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
            }}

            >
                <div onClick={handleClick}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        columnGap: "5px",
                    }}>
                    <Avatar sx={{ bgcolor: "blue" }}>MP</Avatar>
                </div>
            </div>
            <div style={{
                padding: 5,
                display: "flex",
                flexDirection: "column",
                rowGap: 8

            }}>
                {/* <div style={{
                    padding: 5
                }}>Apple</div> */}

                <TextField
                    variant="outlined"
                    type="text"
                    label="Name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}>

                </TextField>
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                ></TextField>

                <Button variant="contained" onClick={onHomePageButtonClick}>Submit</Button>

            </div>
            <Popover
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                anchorEl={anchorE1}
                onClose={handleClose}
            >
                <div style={{
                    padding: 5
                }}>
                    <h5>Mitul Patel</h5>
                    <LogoutIcon onClick={onHomePageButtonClick} />
                </div>
            </Popover>


        </div>

    )
}