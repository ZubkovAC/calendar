import React, {useState} from 'react';
import {Button, Col, Row} from "antd";
import 'antd/dist/antd.css';
import {WorkType} from './columnHeader';
import {Calendar} from "../calendar/calendar";

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
                    <a href="">
                        <h3>{data.name}</h3>
                    </a>
                </Col>
                <Col span={6}>
                    <h3>
                        {data.currentPosition}
                    </h3>
                </Col>
                <Col span={3}>
                    <h3>
                        {data.salary}
                    </h3>
                </Col>
                <Col span={2}>
                    <h3>
                        {data.bonus}
                    </h3>
                </Col>
                <Col span={6}>
                    <h3>
                        {data.monthlySalary}
                    </h3>
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

