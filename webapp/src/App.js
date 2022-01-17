import {Routes} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import MainLoaderContainer from "./component/main/main_load_container";
import User from "./component/User";

export default function App() {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
                <Routes>
                    <Route path='/' element={<MainLoaderContainer/>}/>
                    <Route path='/add' element={<User title={'Add new user record'} isAddUser={true}/>}/>
                    <Route path='/edit' element={<User title={'Edit user record'} isAddUser={false}/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}