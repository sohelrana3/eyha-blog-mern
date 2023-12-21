import React, { useEffect, useState } from "react";
import DeshboardTop from "../components/DeshboardTop";
import axios from "axios";
import baseUrl from "../utils/Content";
import {
    UserOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { Col, Row, Card, Flex, Avatar, Button } from "antd";

const AllPost = () => {
    let [data, setdata] = useState([]);

    // useEffect create
    useEffect(() => {
        const getdata = async () => {
            const res = await axios.get(`${baseUrl}/api/v1/auth/getpost`);
            setdata(res.data);
            console.log(res.data);
        };
        getdata();
    }, []);
    return (
        <div className="deshboard">
            <DeshboardTop deshtitle="All Post" />
            <Row gutter={[32]} style={{ marginTop: "50px" }}>
                <Col span={32}>
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
                        {data.map((item) => (
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
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit,
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua Lorem ipsum
                                            dolor sit
                                        </p>
                                    </div>
                                </Flex>
                                <Flex gap="20px">
                                    <DeleteOutlined style={{ color: "red" }} />
                                    <EditOutlined style={{ color: "green" }} />
                                    <UserOutlined
                                        style={{ color: "#1565D8" }}
                                    />
                                </Flex>
                            </Flex>
                        ))}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AllPost;
