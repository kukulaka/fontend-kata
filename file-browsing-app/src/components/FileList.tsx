import React from 'react';
import { Row, Col } from 'antd';

type Props = {
    files: object,
   
  };

const FileList = ({  files }: Props) => {


    return (

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={6}>
                woohoo
            </Col>
            
        </Row>

    );
};

export default FileList;
