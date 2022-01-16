import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {searchUser} from "../../redux/reducer/user_reducer";
import {setSearchModeAction, setSearchStringAction} from "../../redux/action/user_action";
import {GetSearchString} from "../../redux/selector/user_selector";

const Search = () => {
    const searchString = GetSearchString();
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchString.length !== 0) {
            dispatch(searchUser(0, searchString));
        } else {
            dispatch(setSearchModeAction(false));
        }
    }, [searchString, dispatch])

    const handleSearchChange = (event) => {
        event.preventDefault();
        const lastSymbol = event.target.value.slice(-1);
        if (lastSymbol !== '\\') {
            dispatch(setSearchStringAction(event.target.value));
        }
        dispatch(setSearchModeAction(true));
    }

    return (
        <>
            <TextField style={{marginLeft: '930px', display: 'inline'}}
                       variant="standard"
                       placeholder={'Search user'}
                       type='text'
                       value={searchString}
                       autoFocus
                       onChange={handleSearchChange}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchIcon style={{color: 'blue'}}/>
                               </InputAdornment>)
                       }}/>
        </>
    )
}

export default Search;