import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space, Flex } from "antd";
const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: "#1677ff",
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const DeshboardTop = ({ deshtitle }) => {
    return (
        <Flex align="center" justify="space-between">
            <h2>{deshtitle}</h2>
            <Space direction="vertical">
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                />
            </Space>
        </Flex>
    );
};

export default DeshboardTop;
