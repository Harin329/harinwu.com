import { Layout, Divider, Image, Row, Col, Typography, Modal, InputNumber } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import logo from "./assets/Logo.png"
import setting from "./assets/Setting.png"

function App() {
  const { Header, Footer, Content } = Layout;
  const { Title, Text } = Typography;
  const [settingOpen, setSettingOpen] = useState(false);

  const [amountLeft, setAmountLeft] = useState(8000000)
  const [daysUntil, setDaysUntil] = useState(329)
  const [monthsUntil, setMonthsUntil] = useState(329)
  const [yearsUntil, setYearsUntil] = useState(329)

  const [foodCost, setFoodCost] = useState(30)
  const [rentCost, setRentCost] = useState(0)
  const [miscCost, setMiscCost] = useState(30)
  const [extraCapital, setExtraCapital] = useState(0)

  // DEAULT VALUES
  const [income, setIncome] = useState(370)
  const [investment, setInvestment] = useState(15000)
  // const [investmentGrowth, setInvestmentGrowth] = useState(5)
  const [bank, setBank] = useState(15000)
  const [assets, setAssets] = useState(5000)

  const calculateGoal = useCallback(() => {
    // Find Amount Required
    const endDate = new Date("03/29/2079")
    const now = new Date()
    const timeDiff = endDate.getTime() - now.getTime()
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

    const costLeft = daysLeft * (foodCost + rentCost + miscCost) + extraCapital

    setAmountLeft(costLeft)

    // Find Projected Days Until Goal
    const adjustedGoal = costLeft - (assets + bank + investment)

    // If Investment Plays a Bigger Role
    // let addedIncome = 0
    // let years = 0
    // let compound = investment
    // while (addedIncome < adjustedGoal) {
    //   years += 1
    //   compound *= investmentGrowth/100 + 1
    //   addedIncome = ((365 * years) * income) + (compound)
    // }

    const rawDate = Math.ceil(adjustedGoal / income)
    const rawYear = Math.ceil(rawDate / 365)

    const days = rawDate + (114 * rawYear)
    const months = Math.ceil(days / 12)
    const years = Math.ceil(days / 365)
    setDaysUntil(days)
    setMonthsUntil(months)
    setYearsUntil(years)
  }, [assets, bank, extraCapital, foodCost, income, investment, miscCost, rentCost])

  useEffect(() => {
    calculateGoal()
  }, [calculateGoal])

  const handleOk = () => {
    setSettingOpen(false);
    calculateGoal()
  };

  const handleCancel = () => {
    setSettingOpen(false);
  };

  return (
    <Layout className="App">
      <Header className="Header">
        <Image className="Logo" width={200} src={logo} preview={false} />
        <Divider style={{ marginTop: -20 }} className="Divider" />
      </Header>
      <Content className="Content" style={{ flex: 1 }}>
        <Row justify="center" align="middle" style={{ marginTop: 88 }}>
          <Title style={{ color: 'white', fontSize: 88 }} className="Text">
            ${amountLeft.toLocaleString("en-US")}
          </Title>
        </Row>
        <Row justify="center" style={{ marginBottom: 200, marginTop: -29 }}>
          <Text className="Text">
            to go!
          </Text>
        </Row>
        <Row justify="center">
          <Text className="Text">
            <b>{daysUntil} days</b> until goal achieved!
          </Text>
        </Row>
        <Row justify="center">
          <Text className="Text">
            <b>{monthsUntil} months</b> until goal achieved!
          </Text>
        </Row>
        <Row justify="center">
          <Text className="Text">
            <b>{yearsUntil} years</b> until goal achieved!
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
      <Modal visible={settingOpen} onOk={handleOk} onCancel={handleCancel}>
        <Text className="ModalText">
          Expense
        </Text>
        <br />
        <Text className="InputDesc">
          Daily Food Cost
        </Text>
        <InputNumber placeholder="Food" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          defaultValue={foodCost} onChange={(text) => setFoodCost(text)} />
        <Text className="InputDesc">
          Daily Rent Cost
        </Text>
        <InputNumber placeholder="Rent" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} defaultValue={rentCost} onChange={(text) => setRentCost(text)} />
        <Text className="InputDesc">
          Daily Misc Cost
        </Text>
        <InputNumber placeholder="Misc" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} defaultValue={miscCost} onChange={(text) => setMiscCost(text)} />
        <Text className="InputDesc">
          Extra Capital
        </Text>
        <InputNumber placeholder="Misc" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} defaultValue={extraCapital} onChange={(text) => setExtraCapital(text)} />
        <Text className="ModalText">
          Income
        </Text>
        <br />
        <Text className="InputDesc">
          Daily Income
        </Text>
        <InputNumber placeholder="Income" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} defaultValue={income} onChange={(text) => setIncome(text)} />
        <Text className="InputDesc">
          Bank Savings
        </Text>
        <InputNumber placeholder="Bank" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} defaultValue={bank} onChange={(text) => setBank(text)} />
        <Text className="InputDesc">
          Investments
        </Text>
        <InputNumber placeholder="Investments" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} defaultValue={investment} onChange={(text) => setInvestment(text)} />
        <Text className="InputDesc">
          Assets
        </Text>
        <InputNumber placeholder="Assets" className="Input" formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} defaultValue={assets} onChange={(text) => setAssets(text)} />
      </Modal>
    </Layout>
  );
}

export default App;
