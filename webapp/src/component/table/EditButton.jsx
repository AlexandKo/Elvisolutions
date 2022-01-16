import {IconButton} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router";
import {getUserById} from "../../redux/reducer/user_reducer";
import {useDispatch} from "react-redux";
import {TOOL_TIP_TEXT_EDIT, USER_EDIT_LINK} from "../../util/constants/constant_list";
import PropTypes from "prop-types";
import {GetUserById} from "../../redux/selector/user_selector";
import {useEffect, useState} from "react";

const EditButton = ({id}) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = GetUserById();

    useEffect(() => {
        if (isEditMode && user.id !== undefined) {
            navigate(USER_EDIT_LINK);
            setIsEditMode(false);
        }
    }, [isEditMode, user, navigate, setIsEditMode])

    const handleEditClick = () => {
        dispatch(getUserById(id));
        setIsEditMode(true);
    }

    return (
        <>
            <IconButton
                size="small"
                variant="contained"
                color="primary"
                title={TOOL_TIP_TEXT_EDIT}
                onClick={() => {
                    handleEditClick()
                }}>
                <EditIcon/>
            </IconButton>
        </>
    )
}

export default EditButton;

EditButton.propTypes = {
    id: PropTypes.number.isRequired
}