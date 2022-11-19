// import Navbar from "../component/navbar"

// function Profile() {
//     return(
//         <div>
//             <Navbar/>
//         </div>
//     )
// }
// export default Profile



import React, { useState } from "react";
import Alert from "../component/alert";
import Button from "../component/button";
import Checkbox from "../component/checkbox";
// import CSFullScreenLoader from "../Components/CSFullScreenLoader";
import Radio from "../component/radio";
// import ScreenHeader from "../component/screenheader";
// import CSSmallLoader from "../Components/CSSmallLoader";
import Switch from "../component/switch";
import { resetpass } from "../config/firebasemethod";
export default function Tester() {
  const [statement, setstatement] = useState(false);
  const [radiostatement, setradiostatement] = useState('');

  const [alertMessage, setAlertMessage] = useState("hdgsbciufjbiulvkjbfoilk");
  const [severity, setServerity] = useState("error");

  console.log(radiostatement)
  let checking = (e) => {
    console.log(e.target.checked);
    setstatement(e.target.checked);
  };

  let radiochecking = (e) => {
    // console.log(e.target.value);
    setradiostatement(e.target.value);
  };
  return (
    <div>
        {/* <Button label={'Login'} color='success' variant='contained' onClick={resetpass} /> */}
<Switch  label={'rwhjb'} onChange={(e)=>console.log(e.target.checked)} />
        {/* <Alert alertMessage={alertMessage} severity={severity}  /> */}
      {/* <Checkbox label="Are you sure?" checked={statement} onChange={checking} /> */}
      {/* <Radio topic={"Gender"} id={'gender'} label={['Male','Female']} onChange={radiochecking}   /> */}
      {/* <CSSmallLoader width='20%'  height='20%' /> */}
      {/* <CSFullScreenLoader/> */}
      {/* <ScreenHeader text={'overview'}/> */}
    </div>
  );
}