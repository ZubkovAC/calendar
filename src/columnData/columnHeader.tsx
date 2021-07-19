import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col, Divider, Input ,Pagination} from 'antd';
import {ColumnWork} from "./columnWork";

export type WorkType = {
    id:number
    name:string
    currentPosition:Array<string>
    salary:string
    bonus:number
    monthlySalary:number
    hours:Array<number>
}

export const workers: Array<WorkType>= [
    {id:1,name:'Alex Zybkov',currentPosition:['frontend', 'junior'], salary:'5$', bonus:0, monthlySalary:0,
        hours:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {id:2,name:'Vlad Ivanov',currentPosition:['backend', 'middle'], salary:'8$', bonus:0, monthlySalary:0,
        hours:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {id:3,name:'Vladislav Crysh',currentPosition:['director'], salary:'25$', bonus:0, monthlySalary:0,
        hours:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
    {id:4,name:'Arcadyi Dryi',currentPosition:[ 'frontend', 'senior'], salary:'15$', bonus:0, monthlySalary:0,
        hours:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] },
]

export const ColumnHeader = () => {
    return (
        <div style={{width:'80%',marginLeft:'30px',marginTop:'30px'}}>
            <div style={{display:'flex',marginLeft:'15px'}}>
                <Input placeholder="Name" style={{ width: 400,fontWeight:600,fontSize:'20px' }} size={'large'} />
            </div>
            <Divider orientation="left">Salary Accounting</Divider>
            <Row justify="space-around">
                <Col span={1}>
                    <h2>id</h2>
                    </Col>
                <Col span={6}><h2>Name</h2></Col>
                <Col span={6}><h2>Current Position</h2></Col>
                <Col span={3}><h2>Salary / hour</h2></Col>
                <Col span={2}><h2>bonus (%)</h2></Col>
                <Col span={6}><h2>monthly salary</h2></Col>
            </Row>
            {
                workers.map(w=>{
                    return <span key={w.id}>
                        <ColumnWork key={w.id}  data={w}/>
                    </span>
                })
            }
            <div style={{margin:'30px'}}>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    );
};
