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
    return (
        <span style={{marginLeft: '30px'}}>
            <Row justify="space-around">
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
                     <Input size={'large'} type='number' style={{width:'100px'}} placeholder={data.bonus.toString() }/>
                </Col>
                <Col span={6}>
                    <span style={{padding:'20px',fontWeight:600,fontSize:'16px'}}>{data.monthlySalary}</span>

                    <Button type="primary" onClick={() => setEdit(!edit)}>Calculation</Button>
                </Col>
            </Row>
            <Row justify="space-around">
                <Col span={12}>
                    {edit && <Calendar/>}
                </Col>
            </Row>
        </span>
    );
};

