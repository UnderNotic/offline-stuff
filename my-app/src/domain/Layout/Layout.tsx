import React from "react";
import { Layout as AntdLayout, Breadcrumb, Input } from 'antd';
import styles from "./Layout.module.scss";
import { SearchOutlined } from '@ant-design/icons';

const { Header, Content } = AntdLayout;

export default function Layout(){
    return (
        <AntdLayout>
            <Header className={styles["header"]}>
                <div className={styles["logo"]}>MyLogo</div>
                <Input className={styles["search"]} prefix={<SearchOutlined />} placeholder="Search"/>
                <div className={styles["right"]}/>
            </Header>
            <Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 380}}>
                    Content
                </div>
            </Content>
        </AntdLayout>
    );
}