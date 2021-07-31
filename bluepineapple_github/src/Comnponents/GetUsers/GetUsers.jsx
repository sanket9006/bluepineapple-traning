import React, { useState, useEffect } from 'react'
import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";
import axios from 'axios'

function GetUsers() {
    const [users, setusers] = useState([]);
    const [dataReceived, setdataReceived] = useState(false)


    let [loading, setLoading] = useState(true);
    const override = css`
                        display: block;
                        margin: 0 auto;
                        border-color: red;
                        margin-top:25vh;
                        `;

    const getuserdatafromservicenow = async () => {
        const res = await axios.get('https://dev116571.service-now.com/api/now/table/u_training_batch_june_2021?sysparm_limit=100', {
            auth: {
                username: 'admin',
                password: 'cYldQEeLd96J'
            }
        });
        setusers(res.data.result);
        setdataReceived(true);

        res.data.result.map((item) => {
            console.log(item.u_name)
        })
    }

    useEffect(() => {
        getuserdatafromservicenow();

        return () => {
        }
    }, [])


    return (
        <div>
            {dataReceived ? users.map((singleuser) => { return <li key={singleuser.sys_id}>{singleuser.u_name}</li> })
                : <div className="sweet-loading">
                    <MoonLoader  loading={loading} css={override} speedMultiplier="0.5" size={200} />
                    <h1 style={{textAlign:'center'}}>Loading</h1>
                </div>}
        </div>
    )
}

export default GetUsers
