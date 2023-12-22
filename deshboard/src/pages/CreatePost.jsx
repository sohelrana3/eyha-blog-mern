import { useState } from "react";
import DeshboardTop from "../components/DeshboardTop";
import {
    Col,
    Row,
    Card,
    Flex,
    Avatar,
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from "antd";
const { TextArea } = Input;
import { PlusOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

const CreatePost = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    const normFile = (e) => {
        console.log(e);
        if (Array.isArray(e)) {
           
            return e;
        }
        return e?.fileList;
    };
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div className="deshboard ">
            <DeshboardTop deshtitle="Create Post" />

            <Row gutter={[32]} style={{ marginTop: "50px" }}>
                <Col span={32}>
                    <Card>
                        <Flex justify="space-between">
                            <div>
                                <h2>Create Posts</h2>
                                <p>View and edit your latest posts</p>
                            </div>
                            <Button type="primary" size="default">
                                View More
                            </Button>
                        </Flex>
                        <Flex>
                            <Form
                                labelCol={{
                                    span: 32,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                wrapperCol={{
                                    span: 14,
                                }}
                                layout="horizontal"
                                style={{
                                    maxWidth: 600,
                                }}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Categories">
                                    <TreeSelect
                                        treeData={[
                                            {
                                                title: "Light",
                                                value: "light",
                                            },
                                            {
                                                title: "dight",
                                                value: "dight",
                                            },
                                        ]}
                                    />
                                </Form.Item>
                                <Form.Item
                                    label="Upload"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                >
                                    <Upload
                                        listType="picture-card"
                                    >
                                        <div>
                                            <PlusOutlined />
                                            <div
                                                style={{
                                                    marginTop: 8,
                                                }}
                                            >
                                                Upload
                                            </div>
                                        </div>
                                    </Upload>
                                </Form.Item>

                                {/* <Form.Item label="Categories">
                                    <TreeSelect
                                        treeData={[
                                            {
                                                title: "Light",
                                                value: "light",
                                            },
                                            {
                                                title: "dight",
                                                value: "dight",
                                            },
                                        ]}
                                    />
                                </Form.Item>

                                <Form.Item label="TextArea">
                                    <TextArea rows={32} />
                                </Form.Item>

                                <Form.Item
                                    label="Upload"
                                    valuePropName="fileList"
                                    getValueFromEvent={normFile}
                                >
                                    <Upload
                                        action="/upload.do"
                                        listType="picture-card"
                                    >
                                        <div>
                                            <PlusOutlined />
                                            <div
                                                style={{
                                                    marginTop: 8,
                                                }}
                                            >
                                                Upload
                                            </div>
                                        </div>
                                    </Upload>
                                </Form.Item> */}
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
                        </Flex>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CreatePost;
