import { Layout, Divider, Image, Row, Col, Typography, Space } from 'antd';
import { useState } from 'react';
import './App.css';
import logo from "./assets/Logo.png"
import setting from "./assets/Setting.png"

function App() {
  const { Header, Footer, Content } = Layout;
  const { Title, Text } = Typography;
  const [settingOpen, setSettingOpen] = useState(false);

  return (
    <Layout className="App">
      <Header className="Header">
        <Image className="Logo" width={200} src={logo} preview={false} />
        <Divider style={{ marginTop: -20 }} className="Divider" />
      </Header>
      <Content className="Content" style={{flex: 1}}>

        <Row justify="center" align="middle" style={{marginTop: 88}}>
          <Title style={{ color: 'white', fontSize: 88 }} className="Text">
            $8,000,000
          </Title>
        </Row>
        <Row justify="center" style={{marginBottom: 200}}>
          <Text className="Text">
            to go!
          </Text>
        </Row>


        <Row justify="center">
          <Text className="Text">
            329 days until
          </Text>
        </Row>
        <Row justify="center">
          <Text className="Text">
            12 months until
          </Text>
        </Row>
        <Row justify="center">
          <Text className="Text">
            1 years until
          </Text>
        </Row>
      </Content>
      <Footer className="Footer">
        <Row>
          <Col span={23} />
          <Col span={1}>
            <Image onClick={() => {
              setSettingOpen(true)
            }} className="Setting" width={50} src={setting} preview={false} />
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default App;
