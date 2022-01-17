import {Button} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router";
import {BUTTON_TITLE_ADD_NEW_USER, USER_ADD_LINK} from "../../util/constants/constant_list";

const AddButton = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate(USER_ADD_LINK);
    }

    return (
        <>
            <Button
                variant={'contained'}
                size={'small'}
                onClick={() => {
                    handleAddClick()}}>
                {BUTTON_TITLE_ADD_NEW_USER}
            </Button>
        </>
    )
}

export default AddButton;