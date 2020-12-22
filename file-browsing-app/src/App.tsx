import React, { FC } from 'react';
import {  Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App: FC = () => (
  <div className="App">

<Layout style={{height:"100vh"}}>
      <Sider width={200} className="site-layout-background">will put our file explorer component in here</Sider>
      <Layout>
        <Header className="header"><h1>File Explorer</h1></Header>
        <Content><p>Just checking page loads</p></Content>
        <Footer>Tanya Byrne</Footer>
      </Layout>
    </Layout>
  </div>
);

export default App;
