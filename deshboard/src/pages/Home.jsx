import { useState } from "react";
import { Col, Row } from "antd";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import logo from "../assets/logo.svg";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem("Deshboard", "1", <PieChartOutlined  />),
    getItem("Comments", "2", <DesktopOutlined />),
    getItem("Posts", "sub1", <MailOutlined />, [
        getItem("All Post", "5", <DesktopOutlined />),
        getItem("Add To Post", "6", <MailOutlined />),
   
    ]),

];
const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    let handdleDeshboard = ()=> {

    }
    return (
        <>
            <Row>
                <Col span={4}>
                    <div className="rootlaout">
                        <img src={logo} alt="logo" />
                        <p style={{ color: "#C7C7C7" , marginBottom: "28px"}}>MAIN MENU</p>

                        {/* menu */}
                        <div
                            style={{
                                width: 246,
                            }}
                        >
                            
                            <Menu
                                defaultSelectedKeys={["1"]}
                                defaultOpenKeys={["sub1"]}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={collapsed}
                                items={items}
                               
                            />
                        </div>
                    </div>
                </Col>
                <Col span={20}>
                    <div className="deshboard">col</div>
                </Col>
            </Row>
        </>
    );
};

export default Home;
