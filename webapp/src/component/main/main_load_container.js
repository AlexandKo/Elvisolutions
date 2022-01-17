import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import UsersTable from "../table/UsersTable";
import {getUsersPageList} from "../../redux/reducer/user_reducer";
import {GetMessage, GetUsersDataPage} from "../../redux/selector/user_selector";
import {LOAD_MESSAGE} from "../../util/constants/constant_list";
import Message from "../../util/Message";

const textProperties = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: '20px',
    fontWeight: 'bold'
}

export default function MainLoaderContainer() {
    const [isStartUp, setIsStartUp] = useState(true);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const getMessage = GetMessage();
    const pageContent = GetUsersDataPage();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isStartUp) {
            dispatch(getUsersPageList(0));
            setIsStartUp(false);
        }
    }, [isStartUp, dispatch, setIsStartUp])

    useEffect(() => {
        if (pageContent !== undefined) {
            setIsDataLoaded(true);
        }
    }, [pageContent, setIsDataLoaded])

    useEffect(() => {
        if (getMessage.type !== undefined) {
            setShowMessage(true);
        }
    }, [getMessage, setShowMessage])

    return (
        <>
            {!isDataLoaded && <p style={textProperties}>{LOAD_MESSAGE}</p>}
            {isDataLoaded && <UsersTable/>}
            {showMessage && !isDataLoaded &&
                <Message
                    type={getMessage.type}
                    text={getMessage.text}
                    setShowMessage={setShowMessage}
                    dispatch={null}/>
            }
        </>
    );
}