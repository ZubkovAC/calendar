import React, {useState} from 'react';
import {Button, Col, Input, Row} from "antd";
import 'antd/dist/antd.css';
import {WorkType} from './columnHeader';
import {Calendar} from "../calendar/calendar";
import {SalaryColor} from "./otherComponent/salaryColor";
import {CurrentPositionColor} from "./otherComponent/currentPositionColor";
import NameColor from "./otherComponent/nameColor";

type ColumnWorkPropsType = {
    data: WorkType
}



export const ColumnWork: React.FC<ColumnWorkPropsType> = ({data}) => {
    const [edit, setEdit] = useState(false)
    let  colorL = 'white'
    if( data.id %2!==0) colorL='rgb(219, 219, 219)'
    const colorLine ={
        backgroundColor:colorL,
        paddingTop:'10px',
        alignContent:'center'
    }
    return (
        <>
            <Row style={colorLine} justify="space-around">
                <Col span={1}>
                    <h3>
                        {data.id}
                    </h3>
                </Col>
                <Col span={6}>
                    <NameColor name={data.name} />
                </Col>
                <Col span={6}>
                    <CurrentPositionColor  CurrentPosition={data.currentPosition} />
                </Col>
                <Col span={3}>
                    <SalaryColor salary={data.salary}/>
                </Col>
                <Col span={2}>
                     <Input size={'small'} type='number' style={{width:'100px'}} placeholder={data.bonus.toString() }/>
                </Col>
                <Col span={6}>
                    <span style={{padding:'20px',fontWeight:600,fontSize:'16px'}}>{data.monthlySalary}</span>

                    <Button type="primary" size={'small'} onClick={() => setEdit(!edit)}>Calculation</Button>
                </Col>
            </Row>
            <Row justify="space-around">
                <Col span={12}>
                    {edit && <Calendar />}
                </Col>
            </Row>
        </>
    );
};

