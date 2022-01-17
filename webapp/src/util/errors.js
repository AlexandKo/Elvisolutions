import {
    SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    UNKNOWN_ERROR,
    DELETE_OPERATION_WARNING, ADD_OPERATION_WARNING, UPDATE_OPERATION_WARNING
} from "./constants/errors_list";
import PropTypes from "prop-types";


export const errors = [
    {
        error: 500,
        description: SERVER_ERROR
    },
    {
        error: 501,
        description: NOT_IMPLEMENTED
    },
    {
        error: 502,
        description: BAD_GATEWAY
    },
    {
        error: 10001,
        description: DELETE_OPERATION_WARNING
    },
    {
        error: 10002,
        description: ADD_OPERATION_WARNING
    },
    {
        error: 10003,
        description: UPDATE_OPERATION_WARNING
    }
]

export const findError = (code) => {
    try {
        return errors.find(errorsList => errorsList.error === code).description;
    } catch (e) {
        return UNKNOWN_ERROR;
    }
}

findError.propTypes = {
    code: PropTypes.number.isRequired
}