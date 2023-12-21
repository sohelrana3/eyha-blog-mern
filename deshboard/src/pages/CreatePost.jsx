import React from "react";
import DeshboardTop from "../components/DeshboardTop";
import { Col, Row, Card, Flex, Avatar, Button } from "antd";

const CreatePost = () => {
    return (
        <div className="deshboard">
            <DeshboardTop deshtitle="Create Post" />

            <Row gutter={[32]} style={{ marginTop: "50px" }}>
                <Col span={32}>
                    
                </Col>
            </Row>
        </div>
    );
};

export default CreatePost;
