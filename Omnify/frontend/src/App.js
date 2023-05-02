import "./App.css";
import HomePage from "./Components/HomePage";

import { Layout, Space } from "antd";
const { Header, Footer, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
};

function App() {
  return (
    <div className='App'>
      <Space
        direction='vertical'
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <Header className='header'>Weather App</Header>
          <Content style={contentStyle}>
            <HomePage />
          </Content>
        </Layout>
      </Space>
    </div>
  );
}

export default App;
