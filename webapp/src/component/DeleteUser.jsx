import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {GetCurrentPages, GetNumberOfElementsOnPage, GetUserById} from "../redux/selector/user_selector";
import styles from "../style/style.module.css";
import {useDispatch} from "react-redux";
import {clearUserByIdAction} from "../redux/action/user_action";
import {deleteUserById} from "../redux/reducer/user_reducer";
import PropTypes from "prop-types";
import {
    ONE_ELEMENT_ON_PAGE,
    ONE_PAGE,
    MOUSE_BACK_DROP_CLICK,
    BUTTON_CONFIRM,
    BUTTON_CLOSE
} from "../util/constants/constant_list";

const DeleteUser = ({id, isDeleteWindowOpen, setIsDeleteWindowOpen}) => {
    const dispatch = useDispatch();
    const userById = GetUserById();
    const currentPage = GetCurrentPages();
    const numberOfElements = GetNumberOfElementsOnPage();

    const closeModalWindow = () => {
        dispatch(clearUserByIdAction());
        setIsDeleteWindowOpen(false);
    }

    const getPageNumber = () => {
        return numberOfElements === ONE_ELEMENT_ON_PAGE ? currentPage - ONE_PAGE : currentPage;
    }

    const handleButtonConfirm = (event) => {
        event.preventDefault();
        dispatch(deleteUserById(id, getPageNumber()));
        closeModalWindow();
    }

    const handleButtonClose = (event) => {
        event.preventDefault();
        closeModalWindow();
    }

    const handleModalClose = (event, reason) => {
        event.preventDefault();
        if (reason !== MOUSE_BACK_DROP_CLICK) {
            dispatch(clearUserByIdAction());
            setIsDeleteWindowOpen(false);
        }
    }

    return (
        <>
            <Dialog
                open={isDeleteWindowOpen}
                onClose={handleModalClose}
                fullWidth
                disableEscapeKeyDown
                maxWidth={'xs'}>
                <DialogTitle>Confirm delete record</DialogTitle>
                <DialogContent>
                    <p className={styles.userInfo}>
                        Are You sure, delete record <b>{userById.name} {userById.surname}</b></p>
                </DialogContent>
                <DialogActions>
                    <Button
                        color='primary'
                        onClick={handleButtonConfirm}>
                        {BUTTON_CONFIRM}
                    </Button>
                    <Button
                        color='primary'
                        onClick={handleButtonClose}>
                        {BUTTON_CLOSE}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default DeleteUser;

DeleteUser.propTypes = {
    id: PropTypes.number.isRequired,
    isDeleteWindowOpen: PropTypes.bool.isRequired,
    setIsDeleteWindowOpen: PropTypes.func.isRequired
};