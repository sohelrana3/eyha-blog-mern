import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginData } from "../Slice/user/userSlice";
import { Card, Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import baseUrl from "../utils/Content";

const Login = () => {
    let [error, seterror] = useState({});
    let [lodding, setlodding] = useState(false);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let logData = useSelector((state) => state.logUser.loginUser);
    const onFinish = async (values) => {
        console.log("Success:", values);
        setlodding(true);
        let data = {
            email: values.email,
            password: values.password,
        };
        let userdata = await axios.post(` ${baseUrl}/api/v1/auth/Login`, data);
        seterror(userdata.data);
        dispatch(loginData(userdata.data));
        localStorage.setItem("user", JSON.stringify(userdata.data));
        console.log(userdata);
        if (userdata.data.error) {
            setlodding(false);
        } else {
            navigate("/");
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="box">
            <Card
                title="Login"
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
                        <p>
                            <Link to="/ForgotPassword">Forgot Pasword</Link>
                        </p>
                        {lodding ? (
                            <Button type="primary" loading>
                                Login
                            </Button>
                        ) : (
                            <Button type="primary" htmlType="submit">
                                Login
                            </Button>
                        )}
                    </Form.Item>
                </Form>
                <p>
                    Don’t have an account ?{" "}
                    <Link to="/Registration" className="reglink">
                        Sign up
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default Login;
