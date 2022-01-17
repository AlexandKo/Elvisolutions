import {Grid} from "@mui/material";
import ShowButton from "./ShowButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

export const columns = [
    {field: 'id', headerName: 'ID', headerAlign: 'center', width: 50},
    {field: 'name', headerName: 'Name', headerAlign: 'center', width: 120},
    {field: 'surname', headerName: 'Surname', headerAlign: 'center', width: 120},
    {field: 'birthDate', headerName: 'Birthday', headerAlign: 'center', width: 120},
    {field: 'email', headerName: 'Email', headerAlign: 'center', width: 200},
    {field: 'phone', headerName: 'Phone', headerAlign: 'center', width: 140},
    {field: 'identity', headerName: 'Identity', headerAlign: 'center', width: 120},
    {field: 'passportNumber', headerName: 'Passport Nr', headerAlign: 'center', width: 120},
    {field: 'password', headerName: 'Password', headerAlign: 'center', width: 140},
    {
        field: "Actions", headerAlign: 'center', width: 130,
        renderCell: (cellValues) => {
            return (
                <>
                    <Grid
                        container
                        direction="row"
                        alignItems="center">
                        <Grid
                            item>
                            <ShowButton
                                id={cellValues.id}/>
                        </Grid>
                        <Grid
                            item>
                            <EditButton
                                id={cellValues.id}/>
                        </Grid>
                        <Grid
                            item>
                            <DeleteButton
                                id={cellValues.id}/>
                        </Grid>
                    </Grid>
                </>
            );
        }
    },
]