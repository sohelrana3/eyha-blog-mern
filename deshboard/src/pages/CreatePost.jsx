import { useEffect, useState } from "react";
import DeshboardTop from "../components/DeshboardTop";
import baseUrl from "../utils/Content";
import { useSelector } from "react-redux";
import {
    Col,
    Row,
    Card,
    Flex,
    Button,
    DatePicker,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
    Space,
    message,
} from "antd";
const { TextArea } = Input;
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
const { RangePicker } = DatePicker;

const CreatePost = () => {
    const [input, setinput] = useState({});
    const [file, setfile] = useState("");
    const [img, setimg] = useState([]);
    let logData = useSelector((state) => state.logUser.loginUser);

    //
    useEffect(() => {
        // const getimg = async () => {
        //     const res = await axios.get(
        //         "http://localhost:8000/api/v1/auth/getimg"
        //     );
        //     setimg(res.data);
        //     console.log(res.data);
        // };
        // getimg();
    }, []);

    const props = {
        name: "file",
        action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
        headers: {
            authorization: "authorization-text",
        },
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info);
                console.log(info.file);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setinput({
            ...input,
            catagory: value,
        });
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

    const handleChange = (e) => {
        console.log(e.target.value);
        setinput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    const handlePost = () => {
        let data = {
            postAdmin: logData._id,
            title: input.title,
            categories: input.catagory,
            description: input.description,
            photo: input.photo,
            tags: input.tags,
            date: `${new Date().getFullYear()}-${
                new Date().getMonth() + 1
            }-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`,
        };
        axios
            .post(`${baseUrl}/api/v1/auth/createpost`, data)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    };

    return (
        <div className="deshboard ">
            <DeshboardTop deshtitle="Create Post" />

            <Row gutter={[32]} style={{ marginTop: "50px" }}>
                <Col span={24}>
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
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Card style={{ marginTop: "10px" }}>
                        <Input
                            name="title"
                            onChange={handleChange}
                            placeholder="title"
                        />
                        <label htmlFor="">Catagory : </label>
                        <Select
                            style={{ marginTop: "10px" }}
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={filterOption}
                            options={[
                                {
                                    value: "Education",
                                    label: "Education",
                                },
                                {
                                    value: "Food",
                                    label: "Food",
                                },
                                {
                                    value: "Lern",
                                    label: "Lern",
                                },
                                {
                                    value: "Medical",
                                    label: "Medical",
                                },
                                {
                                    value: "Lifestyle",
                                    label: "Lifestyle",
                                },
                                {
                                    value: "Healthy",
                                    label: "Healthy",
                                },
                            ]}
                        />
                        <br />
                        <label htmlFor="">Description:</label>
                        <TextArea
                            name="description"
                            onChange={handleChange}
                            rows={4}
                        />
                        <TextArea
                            name="photo"
                            onChange={handleChange}
                            placeholder="images url"
                            rows={1}
                        />
                        <TextArea
                            name="tags"
                            onChange={handleChange}
                            placeholder="tags"
                            rows={1}
                        />

                        <Button
                            onClick={handlePost}
                            style={{ marginTop: "10px" }}
                            type="primary"
                            block
                        >
                            Create Post
                        </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default CreatePost;
