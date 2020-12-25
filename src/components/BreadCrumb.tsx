import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons'

//to do filter function 

const BreadCrumb = (props: any) => {

    return (
        <div className="left">
            <Breadcrumb>
                <Breadcrumb.Item href="">
                    <HomeOutlined /> Shared Drive
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>
    );
};

export default BreadCrumb;
