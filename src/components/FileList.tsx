import React from 'react';
import moment from 'moment';
import { Row, Col, Table, Image } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { UserDrive } from "../types/userDrive";
import { AllFiles } from 'src/types/allFiles';
import { FilePdfTwoTone, FileExcelTwoTone, FolderTwoTone, FileTwoTone, VideoCameraTwoTone } from '@ant-design/icons';



const FileList: React.FC<UserDrive> = ({ files }) => {

    // to do - add sort to filesize,
    //expand folder to have child table
    const columns: ColumnsType<AllFiles> = [
        {
            key: "key",
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend', 'ascend'],
            render: (name, row) => {
                switch (row.type) {
                    case "pdf": {
                        return (<p><FilePdfTwoTone twoToneColor="#eb2f96" /> {name}</p>)
                        break;
                    }
                    case "csv": {
                        return (<p><FileExcelTwoTone twoToneColor="#52c41a" /> {name}</p>)
                        break;
                    }
                    case "folder": {
                        return (<p><FolderTwoTone /> {name}</p>)
                        break;
                    }
                    case "doc": {
                        return (<p><FileTwoTone /> {name}</p>)
                        break;
                    }
                    case "mov": {
                        return (<p><VideoCameraTwoTone twoToneColor="#000000" /> {name}</p>)
                        break;
                    }
                    default: {
                        return (<p>{name}</p>)
                        break;
                    }
                }


            },
        },
        {
            key: "dateAdded",
            title: "Date Added",
            dataIndex: "dateAdded",
            sorter: (a, b) => moment(a.dateAdded).unix() - moment(b.dateAdded).unix(),
            sortDirections: ['descend', 'ascend'],
            render: (dateAdded) => {
                if (dateAdded) {
                    return (<p>{moment(dateAdded).format("DD/MM/YYYY")}</p>)
                } else {
                    return ("--")
                }
            }
        },
        {
            key: "fileSize",
            title: "File Size",
            dataIndex: "fileSize",

            render: (fileSize) => {
                if (fileSize) {
                    return (<p>{fileSize} MB</p>)
                } else {
                    return ("--")
                }
            }
        },




    ];

    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={24}>
                <Table<AllFiles> columns={columns} dataSource={files} expandable={{
                    expandedRowRender: record => <div><p style={{ margin: 0 }}>This would contain a table of children files for <strong>{record.name}</strong> if I implemented this! Instead it has a cat photo</p> <br /><Image
                        preview={false}
                        src="http://placekitten.com/g/200/300"
                        width={200}
                    /></div>,
                    rowExpandable: record => record.type === 'folder',
                }} />
            </Col>
        </Row>

    );
};

export default FileList;
