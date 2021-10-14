import React, { useEffect, useState } from "react";

import CreateProject from './CreateProject'

import './../css/sidebar.css'

function SideBar() {
    const [toggle, setToggle] = useState(false)
    
    useEffect(() => {
        if(toggle) {
            <CreateProject isOpen={toggle} chageToggle={setToggle} />
        }
    }, [toggle])

    //
    const data = [
        {data_name: "hello"},
        {data_name: "world"},
        {data_name: "kan"},
        {data_name: "yaho"},
        {data_name: "sai"}
    ]

    const createProject = () => {
        //ダイアログを表示する。
        setToggle(!toggle)
    }

    return(
        <div className='sidebar'>
            <div className='sidebar-menu'>
                <ul>
                    {data.map((item, index) => {
                        console.log(item.data_name)
                        return (
                            <li key={index}>
                                <span>{item.data_name}</span>
                            </li>
                        )
                    })}
                    <li className='create-project' onClick={() => createProject()}>
                        新規プロジェクト作成 +
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;