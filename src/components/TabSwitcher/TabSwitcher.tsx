import React, { useState } from "react";
import "./TabSwitcher.scss";

import { Description } from "../Description";
import { Reviews } from "../Reviews";

export const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

  return (
    <div className="tab-switcher">
      <div className="tab-switcher__buttons">
        <button
          className={`tab-switcher__button ${activeTab === "description" ? "active" : ""}`}
          onClick={() => setActiveTab("description")}
        >
          Опис
        </button>
        <button
          className={`tab-switcher__button ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Відгуки
        </button>
      </div>

      <div className="tab-switcher__content">
        {activeTab === "description" ? <Description /> : <Reviews />}
      </div>
    </div>
  );
};
