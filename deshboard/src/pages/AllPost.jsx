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
                                <div className="post-img">
                                    <img
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "5px",
                                        }}
                                        src={item.photo}
                                        alt="logo"
                                    />
                                </div>
                                <Flex style={{ width: "80%" }} gap="20px">
                                    <div>
                                        <Flex gap="10px">
                                            <p>{item.postAdmin}</p>
                                            <p>October 25th, 2020 08:55 AM</p>
                                        </Flex>

                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
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
