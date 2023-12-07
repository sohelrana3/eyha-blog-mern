import React, { useState } from "react";
import { Card, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import baseUrl from "../utils/Content";

const Registration = () => {
    let [error, seterror] = useState({});
    const onFinish = async (values) => {
        console.log("Success:", values);
        let data = {
            username: values.username,
            email: values.email,
            password: values.password,
        };
        let userdata = await axios.post(` ${baseUrl}/auth/registration`, data);
        console.log(userdata.data);
        seterror(userdata.data);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="box">
            <Card
                title="Registration"
                style={{
                    width: 300,
                }}
            >
                {error.error && <h4 style={{ color: "red" }}>{error.error}</h4>}
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Sing Up
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Registration;
