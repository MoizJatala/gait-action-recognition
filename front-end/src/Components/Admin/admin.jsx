import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const admin = () => {
  const [suc, setSuc ] = useState()
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(()=> {
        axios.get('http://localhost:3001/adminpanel')
        .then(res => {
            console.log("dashboad: " + res.data);
            if(res.data.status === "Success") {
                setSuc("Successded OK")
            } else {
                navigate('/home', { state: { user: res.data.user } });
            }
        }).catch(err => console.log(err))
    }, [])
    return ( 
        <div>
            <h2>dashboard</h2>
            <p>{suc}</p>
        </div>

     );
}

export default admin
