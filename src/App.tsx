import React, { FC } from 'react';
import { Layout } from 'antd';
import { FolderTwoTone } from '@ant-design/icons';
import Home from './pages/Home';

const { Header, Footer, Content } = Layout;
const layoutStyle = { minHeight: "100vh" };
const contentStyle = { padding: "5px"};

const App: FC = () => (
  
  <div>
    <Layout style={layoutStyle}>
      <Header className="header">
        <h1 style={{ color: "#ffffff" }}>
          <FolderTwoTone twoToneColor="#eb2f96" /> File Explorer Kata
        </h1>
      </Header>
      <Content style={contentStyle}><Home /></Content>
      <Footer>Tanya Byrne</Footer>
    </Layout>
  </div>
);

export default App;
