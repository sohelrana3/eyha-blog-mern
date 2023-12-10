import { useEffect, useState } from "react";
import { Col, Row, Avatar, Space } from "antd";
import {
    CommentOutlined,
    DesktopOutlined,
    CodeOutlined,
    DashboardOutlined,
    ProfileOutlined,
    PoweroffOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import logo from "../assets/logo.svg";
import { useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

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
    getItem("Deshboard", "/", <DashboardOutlined />),
    getItem("Comments", "/comments", <CommentOutlined />),
    getItem("Posts", "sub1", <ProfileOutlined />, [
        getItem("All Post", "/allPost", <DesktopOutlined />),
        getItem("Crate to post", "/createPost", <CodeOutlined />),
    ]),
];
const Home = () => {
    let navigate = useNavigate();
    let logData = useSelector((state) => state.logUser.loginUser);
    const [collapsed, setCollapsed] = useState(false);
    const handlelogOut = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };
    let handleClick = (key) => {
        navigate(key);
    };
    useEffect(() => {
        if (logData == null) {
            return navigate("/login");
        }
    }, []);
    return (
        <>
            <Row>
                <Col span={4}>
                    <div className="rootlaout">
                        {/* menu */}
                        <div>
                            <img src={logo} alt="logo" />
                            <p
                                style={{
                                    color: "#C7C7C7",
                                    marginBottom: "28px",
                                }}
                            >
                                MAIN MENU
                            </p>
                            <Menu
                                defaultSelectedKeys={["1"]}
                                defaultOpenKeys={["sub1"]}
                                mode="inline"
                                theme="light"
                                inlineCollapsed={collapsed}
                                items={items}
                                onClick={({ key }) => handleClick(key)}
                            />
                        </div>

                        <div className="profile">
                            {logData ? <img src={logData.avatar} alt="profile" /> : <img />}
                            {logData ? <h2>{logData.username}</h2> : <h2></h2>}

                            <Button
                                icon={<PoweroffOutlined />}
                                onClick={handlelogOut}
                            />
                        </div>
                    </div>
                </Col>
                <Col span={20}>
                    <Outlet />
                </Col>
            </Row>
        </>
    );
};

export default Home;
