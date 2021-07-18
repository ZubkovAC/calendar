import React, {useState} from 'react';
import './App.css';
import {ListEmployee} from "./listEmployee/listEmployee";
import {ColumnHeader} from "./columnData/columnHeader";
import {Input} from "antd";

function App() {
    const [edit, setEdit] = useState(true)
    return (
        <div className="App">



            <ColumnHeader />
            <br/>
            <ListEmployee />
            {/*{*/}
            {/*    edit && <Calendar/>*/}
            {/*}*/}

        </div>
    );
}

export default App;
