import {DataGrid} from '@mui/x-data-grid';
import {useDispatch} from "react-redux";
import {
    GetMessage, GetSearchMode, GetSearchString,
    GetTotalElementsInDatabase,
    GetTotalPages,
    GetUsersDataPage
} from "../../redux/selector/user_selector";
import {Pagination} from "@mui/material";
import {getUsersPageList, searchUser} from "../../redux/reducer/user_reducer";
import {columns} from "./columns"
import styles from "../../style/style.module.css";
import AddButton from "./AddButton";
import {useEffect, useState} from "react";
import Message from "../../util/Message";
import Loading from "../../util/Loading";
import Search from "./Search";

export default function UsersTable() {
    const [showMessage, setShowMessage] = useState(false);
    const [showLoad, setShowLoad] = useState(true);
    const pageContent = GetUsersDataPage();
    const totalElements = GetTotalElementsInDatabase();
    const getTotalPages = GetTotalPages();
    const getMessage = GetMessage();
    const searchMode = GetSearchMode();
    const searchString = GetSearchString();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchMode) {
            dispatch(getUsersPageList(0));
        }
    }, [searchMode, dispatch])

    useEffect(() => {
        if (getMessage.type !== undefined) {
            setShowMessage(true);
        }
    }, [getMessage, setShowMessage])

    const handleTableStateChange = () => {
        setShowLoad(false);
    }

    const handlePageChange = (event, value) => {
        setShowLoad(true);
        if (searchMode) {
            dispatch(searchUser(value - 1, searchString));
        } else {
            dispatch(getUsersPageList(value - 1));
        }
    }

    return (
        <>
            <h3 className={styles.title}>User's table</h3>
            <div className={styles.newUserButton}>
                <AddButton/>
                <Search/>
            </div>
            <DataGrid
                className={styles.tableBorder}
                data
                autoHeight
                rows={pageContent}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                rowHeight={40}
                hideFooterPagination
                hideFooter
                rowCount={totalElements}
                disableColumnMenu
                onStateChange={handleTableStateChange}/>
            <Pagination
                className={styles.title}
                count={getTotalPages}
                size="small"
                onChange={handlePageChange}
                color="primary"/>
            {showMessage &&
                <Message
                    type={getMessage.type}
                    text={getMessage.text}
                    setShowMessage={setShowMessage}
                    dispatch={dispatch}/>
            }
            <Loading
                open={showLoad}/>
        </>
    )
}