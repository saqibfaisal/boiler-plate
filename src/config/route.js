import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Home from "../pages/home";
import Login from '../pages/login';
import Profile from '../pages/screens/profile';
import SignUp from '../pages/signup';
function Approuter() {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </div>
        </Router>

    )
}

export default Approuter