import { MonitorArrowUp, UserFocus } from "@phosphor-icons/react";
import { Col, MenuProps, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CustomLayoutMenu } from "../styles/Customs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import style from "antd/es/affix/style";
import WebcamSidebarContent from "../components/Sidebar";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <MonitorArrowUp size={22} />,
    label: "Camera",
  },
  {
    key: "2",
    icon: <UserFocus size={22} />,
  },
  {
    key: "3",
    icon: <MonitorArrowUp size={22} />,
  },
];

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Row
        gutter={[6, { xs: 8, sm: 16, md: 24, lg: 32 }]}
        className="max-h-dvh h-auto"
      >
        <Col span={4}>
          <CustomLayoutMenu
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={20}>
          <Row gutter={[6, { xs: 8, sm: 16, md: 24, lg: 32 }]}>{children}</Row>
        </Col>
      </Row>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
