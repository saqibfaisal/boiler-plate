import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Dashboard from '../component/dashboard';
import Loader from '../component/loader';
import RadioButton from '../component/radiobutton';
import Home from "../pages/home";
import Login from '../pages/login';
import Tester from '../pages/profile';
// import Profile from '../pages/profile';
import SignUp from '../pages/signup';
function Approuter() {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path='/login' element={<Login/>}/>
                    {/* <Route path='/profile' element={<Profile/>}/> */}
                    <Route path='/admin/*' element={<Dashboard/>}/>
                    <Route path='/Tester' element={<Tester/>}/>
                </Routes>
            </div>
        </Router>

    )
}

export default Approuter