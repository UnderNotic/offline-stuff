import React, {useState} from "react";
import {Layout as AntdLayout, Breadcrumb, Input, Menu} from 'antd';
import styles from "./Layout.module.scss";
import {SearchOutlined} from '@ant-design/icons';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const {Header, Sider, Content} = AntdLayout;




export default function Layout() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggle = () => setIsCollapsed(!isCollapsed);

    return (
        <AntdLayout>
            <Sider trigger={null} collapsible collapsed={isCollapsed}>
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined/>}>
                        nav 3
                    </Menu.Item>
                </Menu>
            </Sider>

            <Header className={styles["header"]}>

                {isCollapsed ? <MenuUnfoldOutlined className={styles["toggle"]} onClick={toggle}/> : <MenuFoldOutlined className={styles["toggle"]} onClick={toggle}/>}

                <div className={styles["logo"]}>MyLogo</div>
                <Input className={styles["search"]} prefix={<SearchOutlined/>} placeholder="Search"/>
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