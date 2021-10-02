import { Layout, Divider, Image, Row, Col, Typography, Space } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';
import logo from "./assets/Logo.png"
import setting from "./assets/Setting.png"

function App() {
  const { Header, Footer, Content } = Layout;
  const { Title, Text } = Typography;
  const [settingOpen, setSettingOpen] = useState(false);

  const [amountLeft, setAmountLeft] = useState(8000000)
  const [daysUntil, setDaysUntil] = useState(329)
  
  const [foodCost, setFoodCost] = useState(30)
  const [rentCost, setRentCost] = useState(0)
  const [miscCost, setMiscCost] = useState(30)

  const [income, setIncome] = useState(370)
  const [investment, setInvestment] = useState(15000)
  const [investmentGrowth, setInvestmentGrowth] = useState(5)
  const [bank, setBank] = useState(15000)
  const [assets, setAssets] = useState(5000)

  useEffect(() => {
    calculateGoal()
  }, [])

  function calculateGoal() {
    // Find Amount Required
    const endDate = new Date("03/29/2079")
    const now = new Date()
    const timeDiff = endDate.getTime() - now.getTime()
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    
    const costLeft = daysLeft * (foodCost + rentCost + miscCost)

    setAmountLeft(costLeft)

    // Find Projected Days Until Goal
    const adjustedGoal = costLeft - (assets + bank)

    let addedIncome = 0
    let years = 0

    while (addedIncome < adjustedGoal) {
      addedIncome = ((365 * years) * income) + investment
      years += 1
    }

    const rawDate = Math.ceil(adjustedGoal / income)
    const rawYear = Math.ceil(rawDate / 365)
    console.log(rawDate)
    console.log(rawYear)
  }

  return (
    <Layout className="App">
      <Header className="Header">
        <Image className="Logo" width={200} src={logo} preview={false} />
        <Divider style={{ marginTop: -20 }} className="Divider" />
      </Header>
      <Content className="Content" style={{flex: 1}}>

        <Row justify="center" align="middle" style={{marginTop: 88}}>
          <Title style={{ color: 'white', fontSize: 88 }} className="Text">
            ${amountLeft.toLocaleString("en-US")}
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
