import { Atom, CaretDown, Gear, Globe } from "@phosphor-icons/react";
import { Button, Dropdown } from "antd";
import React from "react";
const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 ">
      <div className="flex items-center gap-1">
        <Button icon={<Atom size={20} />} shape="circle" />
        <h1>Rehab Neural</h1>
      </div>
      <div className="flex items-center gap-2">
        <Dropdown
          menu={{
            items: [
              {
                key: "en",
                label: "English",
              },
              {
                key: "id",
                label: "Bahasa Indonesia",
              },
            ],
          }}
        >
          <div className="flex items-center gap-1">
            <Globe />
            <span>Language</span>
            <CaretDown />
          </div>
        </Dropdown>
        <Dropdown
          menu={{
            items: [
              {
                key: "en",
                label: "English",
              },
              {
                key: "id",
                label: "Bahasa Indonesia",
              },
            ],
          }}
        >
          <div className="flex items-center gap-1">
            <Gear />
            <span>Settings</span>
            <CaretDown />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
