import React, {useState} from 'react';
import {Input, Table, Space, Tag, Button} from "antd";
import 'antd/dist/antd.css';
import  css from './listEmployee.module.css'
import {Calendar} from "../calendar/calendar";


type ColumnsType = {
    key: string
    name: string
    age: number
    address: string
    tags: Array<string>
}





const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: '0',
        tags: ['fronted','junior'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: '0',
        tags: ['backend','middle'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: '0',
        tags: ['director'],
    },
];

export const ListEmployee = () => {
    const [edit, setEdit] = useState(false)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'Name',
            render: (text: ColumnsType) => <a >{text}</a>,
        },
        {
            title: 'Current Position',
            key: 'Current Position',
            dataIndex: 'tags',
            render: (tags: any) => (
                <>
                    {tags.map((tag: string) => {
                        let color = tag === 'fronted' || tag === 'backend'   ?  'green' : 'geekblue' ;
                        if (tag === 'junior') {
                            color = 'volcano';
                        }
                        if (tag === 'director') {
                            color = 'grey';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Salary / hour',
            dataIndex: 'age',
            key: 'Salary / hour',
        },
        {
            title: 'bonus (%)',
            key: 'bonus',
            render: (text: ColumnsType, record: any) => (
                <Space size="middle">
                    <Input placeholder={'0'} type={"number"} style={{ width: 100 }}/>
                </Space>
            ),
        },
        {
            title: 'monthly salary',
            dataIndex: 'address',
            key: 'monthly salary',
            render: (text: ColumnsType, record: any) => (
                <div>
                    <span style={{marginRight:'20px'}}>{text}</span>
                    <Button type="primary" onClick={()=>setEdit(!edit)}>Primary Button</Button>
                </div>
            )

        },
    ];
    return (
        <div className={css.containerList}>
            <div style={{display:'flex',marginLeft:'15px'}}>
                <Input placeholder="Name" style={{ width: 400 }} />
            </div>
            <div>
                <Table columns={columns} dataSource={data}/>
                {edit && <Calendar/>}
            </div>
        </div>
    );
};

