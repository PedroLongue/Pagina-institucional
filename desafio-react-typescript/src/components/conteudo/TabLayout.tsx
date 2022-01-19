import React, { FC, useState } from "react";
import CustomForm from "../form/CustomForm";
import ArrayContent, { IContent } from "./TabLayoutContent";
import "./TabLayout.css";
import "../../Global.css";

const TabLayout: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const SelectedTitle = ArrayContent[selectedTab]?.Title;
  const SelectedContent = ArrayContent[selectedTab]?.Content;

  return (
    <div className="TabLayout-Container">
      <h2 className="TabLayout-Title">Institucional</h2>
      <div className="TabLayout-Wrapper">
        <ul className="TabLayout-Ul">
          {ArrayContent.map((item: IContent, index) => {
            return (
              <li
                className={`TabLayout-Li TabLayout-Dropdown ${
                  item.Title === SelectedTitle ? "selected" : ""
                }`}
                key={index}
                onClick={() => setSelectedTab(index)}
              >
                {item.Title}
              </li>
            );
          })}
        </ul>

        <section className="TabLayout-Form">
          <h3 className="TabLayout-Subtitle">
            {SelectedTitle === "Contato" ? `` : SelectedTitle}
          </h3>
          <div className="TabLayout-Content">
            {SelectedTitle === "Contato" ? <CustomForm /> : SelectedContent}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TabLayout;
