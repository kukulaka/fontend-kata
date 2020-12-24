import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Alert } from 'antd';
import { getFileData } from '../api/getFileData';
import { ApiResponse } from '../types/apiResponse';
import SearchBox  from '../components/SearchBox';


const Home = (props: any) => {
    const allData: ApiResponse[] = [];
    const [allFiles, setAllFiles]: [ApiResponse[], (allFiles: ApiResponse[]) => void] = useState(allData);
    const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
    const [error, setError]: [string, (error: string) => void] = useState("");



    useEffect(() => {
        try {
            getFileData()
                .then(response => {
                    setAllFiles(response.data);
                    setLoading(false);
                });
        } catch (error) {
            setError(error);
        }
    }, []);



    if (loading) {
        console.log(allFiles);
        return (
            <Row justify="center" align="middle" style={{ height: '80vh' }}>
                <Col span={24}>
                    <div className="loading">
                        <Spin size="large" />
                        <p><strong>Loading your drive, please wait</strong></p>
                    </div>
                </Col>
            </Row>

        );
    }

    if (error) {
        const errorDesc = `Oh no! There has been an error:${error}`;
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col className="gutter-row" span={24}>
                <div className="loading">
                    <Alert
                        message="Error"
                        description={errorDesc}
                        showIcon
                    />
                </div>
            </Col>
        </Row>
    }

    return (

        <Row justify="center" align="top" style={{ height: '80vh' }}>
        <Col span={24}>
            <div className="loading">
                <SearchBox />
            </div>
        </Col>
    </Row>

    );
};

export default Home;
