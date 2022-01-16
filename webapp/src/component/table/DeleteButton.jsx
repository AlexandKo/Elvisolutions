import {IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {getUserById} from "../../redux/reducer/user_reducer";
import DeleteUser from "../DeleteUser";
import PropTypes from "prop-types";
import {TOOL_TIP_TEXT_DELETE} from "../../util/constants/constant_list";

const DeleteButton = ({id}) => {
    const dispatch = useDispatch();
    const [isDeleteWindowOpen, setIsDeleteWindowOpen] = useState(false);

    const deleteButtonHandler = () => {
        setIsDeleteWindowOpen(true);
        dispatch(getUserById(id));
    }
    return (
        <>
            <IconButton
                size="small"
                variant="contained"
                color="primary"
                title={TOOL_TIP_TEXT_DELETE}
                onClick={() => {
                    deleteButtonHandler()
                }}>
                <DeleteIcon/>
            </IconButton>
            {isDeleteWindowOpen &&
                <DeleteUser
                    id={id}
                    isDeleteWindowOpen={isDeleteWindowOpen}
                    setIsDeleteWindowOpen={setIsDeleteWindowOpen}/>
            }
        </>
    )
}

export default DeleteButton;

DeleteButton.propTypes = {
    id: PropTypes.number.isRequired
}