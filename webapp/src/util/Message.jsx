import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {useState} from "react";
import PropTypes from "prop-types";
import {clearMessageAction} from "../redux/action/user_action";

const position = {
    vertical: "top",
    horizontal: "center"
}

export const Message = ({text, type, setShowMessage, dispatch}) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
        setShowMessage(false);
        if (dispatch !== null) {
            dispatch(clearMessageAction());
        }
    }

    return (
        <>
            <Snackbar
                open={open}
                anchorOrigin={position}
                autoHideDuration={3000}
                onClose={handleClose}>
                <Alert
                    variant="filled"
                    severity={type}>
                    {text}
                </Alert>
            </Snackbar>
        </>
    )
}

export default Message;

Message.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setShowMessage: PropTypes.func.isRequired,
    dispatch: PropTypes.func || null
};