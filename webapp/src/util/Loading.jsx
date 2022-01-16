import {CircularProgress} from "@material-ui/core";
import PropTypes from "prop-types";

const progressPosition = {
    top: '50%',
    left: '50%',
    position: 'absolute'
}

const Loading = ({open}) => {
    return (
        <>
            {open &&
                <CircularProgress
                    style={progressPosition}
                    color="inherit"
                />
            }
        </>
    )
}

export default Loading;

Loading.propTypes = {
    open: PropTypes.bool.isRequired
}