import React from "react";
import DeshboardTop from "../components/DeshboardTop";
import { UserOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Col, Row, Card, Flex, Avatar, Button } from "antd";
const Deshboard = () => {
    return (
        <div className="deshboard">
            <DeshboardTop deshtitle="DeshBoard" />
            <Row gutter={[32]} style={{ marginTop: "50px" }}>
                <Col span={6}>
                    <Card>
                        <h2>Comments</h2>
                        <p>You have 34 comments</p>
                        {/* map */}
                        <Flex style={{ paddingTop: "20px" }} gap="20px">
                            <Avatar
                                shape="square"
                                size={64}
                                icon={<UserOutlined />}
                            />
                            <div style={{ width: "80%" }}>
                                <h3>name</h3>
                                <p>sharrrrshhf</p>
                            </div>
                            <EyeOutlined />
                        </Flex>
                    </Card>
                </Col>
                <Col span={18}>
                    <Card>
                        <Flex justify="space-between">
                            <div>
                                <h2>Recent Posts</h2>
                                <p>View and edit your latest posts</p>
                            </div>
                            <Button type="primary" size="default">
                                View More
                            </Button>
                        </Flex>
                        {/* map */}
                        <Flex style={{ paddingTop: "20px" }} gap="20px">
                            <Flex style={{ width: "80%" }} gap="20px">
                                <Avatar
                                    shape="square"
                                    size={64}
                                    icon={<UserOutlined />}
                                />
                                <div>
                                    <Flex gap="10px">
                                        <p>rezaiimohammad@gmail.com</p>
                                        <p>October 25th, 2020 08:55 AM</p>
                                    </Flex>

                                    <h3>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit,
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua Lorem ipsum dolor sit
                                    </p>
                                </div>
                            </Flex>
                            <Flex gap="20px">
                                <DeleteOutlined style={{color: "red"}} />
                                <EditOutlined style={{color: "green"}}/>
                                <UserOutlined style={{color: "#1565D8"}} />
                            </Flex>
                        </Flex>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Deshboard;
