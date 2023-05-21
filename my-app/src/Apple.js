import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const Apple = () => {

    const Navigate = useNavigate();

    const onHomePageButtonClick = () => {
        // Navigate("/");
        alert('the button has been clicked');
    };
    return(
    <div>
    <div>Apple Page</div>

    {/* <button onClick={onHomePageButtonClick}>Navigate To Home Page</button> */}
    <Button variant="contained" onClick={onHomePageButtonClick}>Navigate To Home Page</Button>
    </div> 
)};