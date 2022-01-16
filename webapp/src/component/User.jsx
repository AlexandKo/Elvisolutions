import {GetUserById} from "../redux/selector/user_selector";
import styles from "../style/style.module.css";
import PropTypes from 'prop-types';
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router";
import {
    USER_BUTTON_ADD,
    USER_BUTTON_CANCEL,
    USER_BUTTON_UPDATE,
    USER_MAIN_TABLE_LINK
} from "../util/constants/constant_list";
import {useDispatch} from "react-redux";
import {clearUserByIdAction} from "../redux/action/user_action";
import {useFormik} from "formik";
import {validationSchema} from "./validation/shema";
import {addUser, updateUser} from "../redux/reducer/user_reducer";

const textBoxSetMargin = {
    marginTop: '8px',
    marginBottom: '8px'
}

const User = ({title, isAddUser}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userById = GetUserById();

    const state = useFormik({
        initialValues: {
            name: userById.name,
            surname: userById.surname,
            birthDate: userById.birthDate,
            email: userById.email,
            phone: userById.phone,
            identity: userById.identity,
            passportNumber: userById.passportNumber,
            password: userById.password,
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit:
            (user) => {
                user['id'] = userById.id || null;
                if (isAddUser) {
                    dispatch(addUser(user));
                } else {
                    dispatch(updateUser(user));
                }
                dispatch(clearUserByIdAction());
                navigate(USER_MAIN_TABLE_LINK)
            },
    })

    const handleCancelClick = () => {
        dispatch(clearUserByIdAction());
        navigate(USER_MAIN_TABLE_LINK)
    }

    return (
        <>
            <h3 className={styles.title}>
                {isAddUser ? title : `${title} ${userById.name} ${userById.surname}`}
            </h3>
            <form
                className={styles.userForm}
                onSubmit={state.handleSubmit}>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Name'
                    name={'name'}
                    onChange={state.handleChange}
                    value={state.values.name}
                    error={state.touched.name && Boolean(state.errors.name)}
                    // helperText={state.touched.name && state.errors.name}
                    InputLabelProps={{
                        shrink: true
                    }}/>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Surname'
                    name={'surname'}
                    onChange={state.handleChange}
                    value={state.values.surname}
                    error={state.touched.surname && Boolean(state.errors.surname)}
                    // helperText={state.touched.surname && state.errors.surname}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Birthday'
                    name={'birthDate'}
                    type='date'
                    onChange={state.handleChange}
                    value={state.values.birthDate}
                    error={state.touched.birthDate && Boolean(state.errors.birthDate)}
                    // helperText={state.touched.birthDate && state.errors.birthDate}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Email'
                    name={'email'}
                    onChange={state.handleChange}
                    value={state.values.email}
                    error={state.touched.email && Boolean(state.errors.email)}
                    // helperText={state.touched.email && state.errors.email}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Phone'
                    name={'phone'}
                    onChange={state.handleChange}
                    value={state.values.phone}
                    error={state.touched.phone && Boolean(state.errors.phone)}
                    // helperText={state.touched.phone && state.errors.phone}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Identity'
                    name={'identity'}
                    onChange={state.handleChange}
                    value={state.values.identity}
                    error={state.touched.identity && Boolean(state.errors.identity)}
                    // helperText={state.touched.identity && state.errors.identity}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Passport Number'
                    name={'passportNumber'}
                    onChange={state.handleChange}
                    value={state.values.passportNumber}
                    error={state.touched.passportNumber && Boolean(state.errors.passportNumber)}
                    // helperText={state.touched.passportNumber && state.errors.passportNumber}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                <TextField
                    style={textBoxSetMargin}
                    size={'small'}
                    variant='outlined' label='Password'
                    name={'password'}
                    type={'password'}
                    onChange={state.handleChange}
                    value={state.values.password}
                    error={state.touched.password && Boolean(state.errors.password)}
                    // helperText={state.touched.password && state.errors.password}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
                <Button
                    type={'submit'}
                    style={{marginTop: '20px'}}
                    variant={'contained'}>
                    {isAddUser ? USER_BUTTON_ADD : USER_BUTTON_UPDATE}
                </Button>
                <Button
                    style={{marginTop: '10px'}}
                    variant={'outlined'}
                    onClick={() => {
                        handleCancelClick()
                    }}>
                    {USER_BUTTON_CANCEL}
                </Button>
            </form>
        </>
    )
}

export default User;

User.propTypes = {
    title: PropTypes.string.isRequired,
    isAddUser: PropTypes.bool.isRequired
};