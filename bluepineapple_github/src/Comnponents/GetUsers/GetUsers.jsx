import React, { useState, useEffect } from 'react'
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import { MDBInput, MDBBtn  } from "mdbreact";

import axios from 'axios'

function GetUsers() {

    const [userid, setuserid] = useState();
    const handle_userid = (e) => setuserid(e.target.value);

    const [password, setpassword] = useState();
    const handle_password = (e) => setpassword(e.target.value);


    const [users, setusers] = useState([]);
    const [dataReceived, setdataReceived] = useState(false);

    useEffect(() => {
        {dataReceived?  getgithubuserdata() : getuserdatafromservicenow()}

        return () => {
        }
    }, [dataReceived])

    const override = css`
                        display: block;
                        margin: 0 auto;
                        border-color: red;
                        margin-top:25vh;
                        `;

    const getuserdatafromservicenow = async () => {
        const res = await axios.get('https://dev116571.service-now.com/api/now/table/incident?sysparm_limit=100', {
            auth: {
                username: 'admin',
                password: 'cYldQEeLd96J'
            }
        });
        setusers(res.data.result);
        setdataReceived(true);
    }

    const getgithubuserdata = async() => {
    // eslint-disable-next-line array-callback-return
    // users.map((singleuser_) => {
    //     let github_url = singleuser_.u_git_repository_url.split('m/');
    //     console.log(github_url[1]);

    //    axios.get(`https://api.github.com/users/${github_url[1]}`)
    //     .then(response => console.log(response.data))
    // })
    }

    return (
        <div>
          <MDBInput type="text" value={userid} onChange={handle_userid} />
          <MDBInput type="text" value={password} onChange={handle_password} />

            {dataReceived ? users.map((singleuser) => { return <div>
                <li key={singleuser.sys_id}>Short_description : -{singleuser.short_description}</li>
                <li key={singleuser.sys_id}>Category : -{singleuser.category}</li>
                <br></br>
            </div>})
                : <div className="sweet-loading">
                    <MoonLoader  css={override} speedMultiplier="0.5" size={200} />
                    <h1 style={{textAlign:'center'}}>Loading</h1>
                </div>}
            
        </div>
    )
}

export default GetUsers
