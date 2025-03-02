import { Button, Menu } from "antd";
import Webcam from "react-webcam";
import styled from "styled-components";

const CustomWebcam = styled(Webcam)`
  width: 100%;
  height: auto;
`;
const WebcamButton = styled(Button)`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 0.5rem;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const CustomLayoutMenu = styled(Menu)`
  &.ant-menu {
    border: 1px solid #d9d9d9;
    padding: 0.375rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border-radius: 0.5rem;
    min-width: 0;
    height: 100%;
    .ant-menu-item {
    }
  }
`;
export { CustomWebcam, CustomLayoutMenu, WebcamButton };
