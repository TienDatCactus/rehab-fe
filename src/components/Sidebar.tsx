import {
  Activity,
  Bell,
  Database,
  Gear,
  Lightbulb,
  Sliders,
  TreeStructure,
} from "@phosphor-icons/react";
import {
  Button,
  Divider,
  List,
  Progress,
  Select,
  Slider,
  Space,
  Switch,
  Tabs,
  TabsProps,
  Typography,
} from "antd";
import React, { useState } from "react";

const { Title, Text } = Typography;

interface WebcamSidebarContentProps {
  fps: number;
  brightness: number;
  setBrightness: (value: number) => void;
  contrast: number;
  setContrast: (value: number) => void;
  events: { timestamp: string; message: string }[];
  storageUsed: number;
  motionDetected: boolean;
  videoConstraints: { width: number; height: number; facingMode: string };
  setVideoConstraints: (value: {
    width: number;
    height: number;
    facingMode: string;
  }) => void;
  audio: boolean;
  setAudio: (value: boolean) => void;
  control: boolean;
  setControl: (value: boolean) => void;
}

const WebcamSidebarContent: React.FC<WebcamSidebarContentProps> = ({
  fps,
  brightness,
  setBrightness,
  contrast,
  setContrast,
  events,
  storageUsed,
  motionDetected,
  videoConstraints,
  setVideoConstraints,
  audio,
  setAudio,
  control,
  setControl,
}) => {
  const [items, setItems] = useState<TabsProps["items"]>([
    {
      label: "Controls",
      key: "1",
      children: (
        <div className="flex flex-col h-fit overflow-y-scroll p-2 z-0">
          <div className="flex items-center gap-1 my-2">
            <TreeStructure size={18} />
            <h1 className="font-semibold text-[1rem]">Parameters</h1>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <Text type="secondary">Status:</Text>
              <Text type="success">Active</Text>
            </div>
            <div className="flex justify-between mb-2">
              <Text type="secondary">Resolution:</Text>
              <Text>
                {videoConstraints.width} x {videoConstraints.height}
              </Text>
            </div>
            <div className="flex justify-between mb-2">
              <Text type="secondary">FPS:</Text>
              <Text>{fps}</Text>
            </div>
            <div className="flex justify-between mb-2">
              <Text type="secondary">Signal:</Text>
              <Text type="success">Strong</Text>
            </div>
          </div>

          <Divider style={{ margin: "8px 0" }} />
          <div className="flex items-center gap-1 my-2">
            <Gear size={18} />
            <h1 className="font-semibold text-[1rem]">Basic Configs</h1>
          </div>
          <div className="mb-4 flex flex-col gap-2">
            <div>
              <p className="text-[0.875rem] text-[#898989] my-1">Width</p>
              <Select
                defaultValue={videoConstraints.width.toString()}
                className="w-full"
                onChange={(value) =>
                  setVideoConstraints({
                    ...videoConstraints,
                    width: parseInt(value),
                  })
                }
                options={[
                  { value: "640", label: "640" },
                  { value: "800", label: "800" },
                  { value: "1024", label: "1024" },
                  { value: "1280", label: "1280" },
                  { value: "1920", label: "1920" },
                ]}
              />
            </div>
            <div>
              <p className="text-[0.875rem] text-[#898989] my-1">Height</p>
              <Select
                defaultValue={videoConstraints.height.toString()}
                className="w-full"
                onChange={(value) =>
                  setVideoConstraints({
                    ...videoConstraints,
                    height: parseInt(value),
                  })
                }
                options={[
                  { value: "480", label: "480" },
                  { value: "600", label: "600" },
                  { value: "768", label: "768" },
                  { value: "720", label: "720" },
                  { value: "1080", label: "1080" },
                ]}
              />
            </div>
            <div>
              <p className="text-[0.875rem] text-[#898989] my-1">Facing mode</p>
              <Select
                defaultValue={videoConstraints.facingMode}
                className="w-full"
                onChange={(value) =>
                  setVideoConstraints({
                    ...videoConstraints,
                    facingMode: value,
                  })
                }
                options={[
                  { value: "user", label: "User" },
                  { value: "environment", label: "Environment" },
                ]}
              />
            </div>
            <div className="flex items-center justify-between my-1">
              <p className="text-[0.875rem] text-[#898989] my-1">Audio</p>
              <Switch
                defaultChecked={audio}
                onChange={() => setAudio(!audio)}
              />
            </div>
            <div className="flex items-center justify-between my-1">
              <p className="text-[0.875rem] text-[#898989] my-1">Control</p>
              <Switch
                defaultChecked={control}
                onChange={() => setControl(!control)}
              />
            </div>
          </div>

          <Divider style={{ margin: "8px 0" }} />
          <div className="flex items-center gap-1 my-2">
            <Sliders size={18} />
            <h1 className="font-semibold text-[1rem]">Image Controls</h1>
          </div>
          <div className="mb-4">
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <Text type="secondary">Brightness: {brightness}%</Text>
              </div>
              <Slider
                min={50}
                max={150}
                value={brightness}
                onChange={(value) => setBrightness(value)}
              />
            </div>

            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <Text type="secondary">Contrast: {contrast}%</Text>
              </div>
              <Slider
                min={50}
                max={150}
                value={contrast}
                onChange={setContrast}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "System",
      key: "2",
      children: (
        <div className="flex flex-col h-screen overflow-auto p-2 z-0">
          <Title level={5} style={{ marginBottom: 8 }}>
            <Database size={18} style={{ marginRight: 6 }} />
            System Status
          </Title>
          <div className="mb-4">
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <Text type="secondary">Storage:</Text>
                <Text>{storageUsed.toFixed(2)}% used</Text>
              </div>
              <Progress
                percent={storageUsed}
                size="small"
                status={storageUsed > 80 ? "exception" : "normal"}
                showInfo={false}
              />
            </div>

            <div className="flex justify-between mb-2">
              <Text type="secondary">CPU Usage:</Text>
              <Text>{Math.floor(Math.random() * 20) + 10}%</Text>
            </div>

            <div className="flex justify-between mb-2">
              <Text type="secondary">Memory:</Text>
              <Text>{Math.floor(Math.random() * 300) + 200}MB</Text>
            </div>

            {motionDetected && (
              <div className="mt-2 p-1 bg-red-50 border border-red-200 rounded text-red-600 text-xs text-center">
                <Activity
                  size={14}
                  style={{ marginRight: 4, display: "inline" }}
                />
                Motion Detected
              </div>
            )}
          </div>

          <Divider style={{ margin: "8px 0" }} />

          <Title level={5} style={{ marginBottom: 8 }}>
            <Bell size={18} style={{ marginRight: 6 }} />
            Event Log
          </Title>
          <div className="border rounded p-2 bg-gray-50 h-24 overflow-y-auto mb-4 text-xs">
            {events.length > 0 ? (
              <List
                size="small"
                dataSource={events}
                renderItem={(event) => (
                  <List.Item style={{ padding: "2px 0" }}>
                    <Text type="secondary" style={{ fontSize: "0.7rem" }}>
                      {event.timestamp}:
                    </Text>{" "}
                    <Text style={{ fontSize: "0.7rem" }}>{event.message}</Text>
                  </List.Item>
                )}
              />
            ) : (
              <div className="text-gray-400 text-center">
                No events recorded
              </div>
            )}
          </div>

          <Divider style={{ margin: "8px 0" }} />

          <Title level={5} style={{ marginBottom: 8 }}>
            <Lightbulb size={18} style={{ marginRight: 6 }} />
            Quick Tips
          </Title>
          <div className="bg-blue-50 p-2 rounded border border-blue-100 text-xs">
            <ul className="pl-4 space-y-1 text-blue-800">
              <li>
                Press <kbd className="bg-gray-200 px-1 rounded">S</kbd> for
                screenshots
              </li>
              <li>
                Press <kbd className="bg-gray-200 px-1 rounded">R</kbd> to
                record
              </li>
              <li>Adjust lighting for better results</li>
            </ul>
          </div>

          <div className="mt-auto pt-4">
            <Space direction="vertical" style={{ width: "100%" }}>
              <Button type="primary" block>
                Capture Image
              </Button>
              <Button block>Start Recording</Button>
            </Space>
          </div>
        </div>
      ),
    },
  ]);
  return (
    <Tabs
      defaultActiveKey="1"
      type="card"
      style={{ marginBottom: 32 }}
      items={items}
    />
  );
};

export default WebcamSidebarContent;
