import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Col, Divider, Row } from 'antd';
import {
  ShoppingFilled,
  DollarOutlined,
  MessageOutlined,
  SkinOutlined
} from '@ant-design/icons';
import { Space } from 'antd';
import { Progress } from 'antd';



const { Header, Content, Footer, Sider } = Layout;

const DashboardPage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['5']}>
              <Menu.Item>
                <Link to={'/admin/dash'}>Dashboard</Link>
              </Menu.Item>
             
              <Menu.Item>
                <Link to={'/admin/category'}>Category</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={'/admin/products'}>Products</Link>
              </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0'}}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer,backgroundColor:"#E7E7E7" }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
              <div style={{backgroundColor:"#FFFFFF",padding:"30px 15px 0px 0px",textAlign:"center",borderRadius:"14px"}}>
                  <Row>
                    <Col span={7} >
                      <Space >
                        <ShoppingFilled className='' />
                      </Space>
                    </Col>
                    <Col span={13}>
                      <h2 style={{fontSize:"20px"}}>Category</h2>
                      <p style={{fontSize:"18px"}}>3</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
              <div style={{backgroundColor:"#FFFFFF",padding:"30px 15px 0px 0px",textAlign:"center",borderRadius:"14px"}}>
                  <Row>
                    <Col span={7} >
                      <Space >
                      <SkinOutlined />
                       </Space>
                    </Col>
                    <Col span={13}>
                      <h2 style={{fontSize:"20px"}}>Product</h2>
                      <p style={{fontSize:"18px"}}>2</p>
                    </Col>
                  </Row>
                </div>              </Col>
              <Col className="gutter-row" span={6}>
              <div style={{backgroundColor:"#FFFFFF",padding:"30px 15px 0px 0px",textAlign:"center",borderRadius:"14px"}}>
                  <Row>
                    <Col span={7} >
                      <Space >
                      <DollarOutlined />                      
                      </Space>
                    </Col>
                    <Col span={13}>
                      <h2 style={{fontSize:"20px"}}>Total</h2>
                      <p style={{fontSize:"18px"}}>50000</p>
                    </Col>
                  </Row>
                </div>              </Col>
              <Col className="gutter-row" span={6}>
              <div style={{backgroundColor:"#FFFFFF",padding:"30px 15px 0px 0px",textAlign:"center",borderRadius:"14px"}}>
                  <Row>
                    <Col span={7} >
                      <Space >
                      <MessageOutlined />                      
                      </Space>
                    </Col>
                    <Col span={13}>
                      <h2 style={{fontSize:"20px"}}>Message</h2>
                      <p style={{fontSize:"18px"}}>8</p>
                    </Col>
                  </Row>
                </div>              
                </Col>
            </Row>
            <div className='' style={{marginTop:"100px"}}>
          <Row>
            <Col span={12}>
                <>
                  <Progress percent={30} />
                  <Progress percent={50} status="active" />
                  <Progress percent={70} status="exception" />
                  <Progress percent={100} />
                  <Progress percent={50} showInfo={false} />
                </>
            </Col>
            <Col span={12}>
              <Space wrap>
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
              </Space>
            </Col>
          </Row>
          </div>
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardPage