import * as yup from 'yup';
import {birthday, identity, passportNumber, phoneNumber} from "./validator";
import {
    BIRTHDAY_REQUIRED,
    EMAIL_REQUIRED,
    ENTER_USER_BIRTHDAY,
    ENTER_USER_EMAIL,
    ENTER_USER_IDENTITY,
    ENTER_USER_NAME,
    ENTER_USER_PASSPORT_NUMBER, ENTER_USER_PASSWORD,
    ENTER_USER_PHONE_NUMBER,
    ENTER_USER_SURNAME,
    IDENTITY_REQUIRED,
    NAME_REQUIRED,
    PASSPORT_NUMBER_REQUIRED, PASSWORD_REQUIRED,
    PHONE_NUMBER_REQUIRED,
    SURNAME_REQUIRED,
    USER_BIRTHDAY_ERROR,
    USER_EMAIL_ERROR,
    USER_IDENTITY_ERROR,
    USER_NAME_ERROR,
    USER_PASSPORT_NUMBER_ERROR, USER_PASSWORD_ERROR,
    USER_PHONE_NUMBER_ERROR,
    USER_SURNAME_ERROR
} from "../../util/constants/constant_list";

export const validationSchema = yup.object({
    name: yup
        .string(ENTER_USER_NAME)
        .min(2, USER_NAME_ERROR)
        .required(NAME_REQUIRED),
    surname: yup
        .string(ENTER_USER_SURNAME)
        .min(2, USER_SURNAME_ERROR)
        .required(SURNAME_REQUIRED),
    birthDate: yup
        .string(ENTER_USER_BIRTHDAY)
        .matches(birthday, USER_BIRTHDAY_ERROR)
        .required(BIRTHDAY_REQUIRED),
    email: yup
        .string(ENTER_USER_EMAIL)
        .email(USER_EMAIL_ERROR)
        .required(EMAIL_REQUIRED),
    phone: yup
        .string(ENTER_USER_PHONE_NUMBER)
        .matches(phoneNumber, USER_PHONE_NUMBER_ERROR)
        .required(PHONE_NUMBER_REQUIRED),
    identity: yup
        .string(ENTER_USER_IDENTITY)
        .matches(identity, USER_IDENTITY_ERROR)
        .required(IDENTITY_REQUIRED),
    passportNumber: yup
        .string(ENTER_USER_PASSPORT_NUMBER)
        .matches(passportNumber, USER_PASSPORT_NUMBER_ERROR)
        .required(PASSPORT_NUMBER_REQUIRED),
    password: yup
        .string(ENTER_USER_PASSWORD)
        .min(5, USER_PASSWORD_ERROR)
        .required(PASSWORD_REQUIRED),
});