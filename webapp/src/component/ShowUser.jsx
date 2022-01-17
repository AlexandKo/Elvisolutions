import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {GetUserById} from "../redux/selector/user_selector";
import styles from "../style/style.module.css";
import {useDispatch} from "react-redux";
import {clearUserByIdAction} from "../redux/action/user_action";
import PropTypes from "prop-types";
import {BUTTON_CLOSE, MOUSE_BACK_DROP_CLICK} from "../util/constants/constant_list";

const ShowUser = ({isShowWindowOpen, setIsShowWindowOpen}) => {
    const dispatch = useDispatch();
    const userById = GetUserById();

    const closeModalWindow = () => {
        dispatch(clearUserByIdAction());
        setIsShowWindowOpen(false);
    }

    const handleButtonClose = (event) => {
        event.preventDefault();
        closeModalWindow();
    }

    const handleModalClose = (event, reason) => {
        event.preventDefault();
        if (reason !== MOUSE_BACK_DROP_CLICK) {
            closeModalWindow();
        }
    }

    return (
        <>
            <Dialog
                open={isShowWindowOpen} onClose={handleModalClose}
                fullWidth
                disableEscapeKeyDown
                maxWidth={'xs'}>
                <DialogTitle>User Information</DialogTitle>
                <DialogContent>
                    <p className={styles.userInfo}><b>ID:</b> {userById.id}</p>
                    <p className={styles.userInfo}><b>Name:</b> {userById.name}</p>
                    <p className={styles.userInfo}><b>Surname:</b> {userById.surname}</p>
                    <p className={styles.userInfo}><b>Birthday:</b> {userById.birthDate}</p>
                    <p className={styles.userInfo}><b>Email:</b> {userById.email}</p>
                    <p className={styles.userInfo}><b>Phone:</b> {userById.phone}</p>
                    <p className={styles.userInfo}><b>Identity:</b> {userById.identity}</p>
                    <p className={styles.userInfo}><b>Passport Number:</b> {userById.passportNumber}</p>
                    <p className={styles.userInfo}><b>Password:</b> {userById.password}</p>
                </DialogContent>
                <DialogActions>
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

export default ShowUser;

ShowUser.propTypes = {
    isShowWindowOpen: PropTypes.bool.isRequired,
    setIsShowWindowOpen: PropTypes.func.isRequired
};