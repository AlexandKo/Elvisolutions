import {IconButton} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getUserById} from "../../redux/reducer/user_reducer";
import ShowUser from "../ShowUser";
import PropTypes from "prop-types";
import {TOOL_TIP_TEXT_SHOW} from "../../util/constants/constant_list";

const ShowButton = ({id}) => {
    const dispatch = useDispatch();
    const [isShowWindowOpen, setIsShowWindowOpen] = useState(false);

    const showButtonHandler = () => {
        setIsShowWindowOpen(true);
        dispatch(getUserById(id));
    }

    return (
        <>
            <IconButton
                size="small"
                variant="contained"
                color="primary"
                title={TOOL_TIP_TEXT_SHOW}
                onClick={() => {
                    showButtonHandler()
                }}>
                <VisibilityIcon/>
            </IconButton>
            {isShowWindowOpen &&
                <ShowUser
                    isShowWindowOpen={isShowWindowOpen}
                    setIsShowWindowOpen={setIsShowWindowOpen}/>
            }
        </>
    )
}

export default ShowButton;

ShowUser.propTypes = {
    id: PropTypes.number.isRequired
};