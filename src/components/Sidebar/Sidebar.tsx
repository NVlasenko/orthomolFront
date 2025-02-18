import React, { useState } from "react";
import "./Sidebar.scss";
import { SidebarProps } from "../../types/Filters";

export const Sidebar: React.FC<SidebarProps> = ({
  filters,
  onFilterChange,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllVitamins, setShowAllVitamins] = useState(false);
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [name]: Number(value),
      },
    });
  };

  const handleFilterChange = (
    key: keyof typeof filters,
    value: string | boolean
  ) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  const resetFilters = () => {
    onFilterChange({
      priceRange: { min: 0, max: 100000 },
      gender: "all",
      ageCategory: "all",
      purpose: "all",
      shape: "all",
      taste: "all",
      hit: false,
      details: "all",
      traceElements: "all",
    });
  };
  const categories = [
    { value: "all", label: "Всі" },
    { value: "Спорт", label: "Спорт" },
    { value: "Травлення", label: "Травлення" },
    { value: "Мозкова активність", label: "Мозкова активність" },
    { value: "Імунна система", label: "Імунна система" },
    { value: "Стрес та порушення сну", label: "Стрес та порушення сну" },
    {
      value: "Краса (шкіра, волосся, нігті)",
      label: "Краса (шкіра, волосся, нігті)",
    },
    { value: "Зачаття та вагітність", label: "Зачаття та вагітність" },
    { value: "Зір", label: "Зір" },
    { value: "Простата", label: "Простата" },
    { value: "Діти", label: "Діти" },
    { value: "Серце і судини", label: "Серце і судини" },
  ];

  const vitaminsAndElements = [
    { value: "all", label: "Всі" },
    { value: "A", label: "Вітамін A" },
    { value: "B", label: "Вітамін B" },
    { value: "C", label: "Вітамін C" },
    {
      value: "D",
      label: "Вітамін D",
      subcategories: ["400-5000ME", "5000-25000ME"],
    },
    { value: "E", label: "Вітамін E" },
    { value: "K", label: "Вітамін K" },
    { value: "Магній", label: "Магній" },
    { value: "Залізо", label: "Залізо" },
    { value: "Біотин", label: "Біотин" },
    { value: "Фолієва кислота", label: "Фолієва кислота" },
  ];

  return (
    <div className="sidebar--wrapper">
      {/* Кнопка "Фільтри" только для мобильных и планшетов */}
      <button
        className="sidebar__toggle--btn"
        onClick={() => setIsSidebarOpen(true)}
      >
        Фільтри
      </button>

      {/* Оверлей для моб и планшетов */}
      {isSidebarOpen && (
        <div
          className="sidebar__overlay"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className={`sidebar ${isSidebarOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__header">
          <h2 className="sidebar__header--title">Фільтри</h2>
          <button
            className="sidebar__close--btn"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="sidebar__section">
          <h3 className="sidebar__title">Ціна</h3>
          <div className="sidebar__price">
            <input
              type="number"
              name="min"
              value={filters.priceRange.min}
              onChange={handlePriceChange}
              className="sidebar__input"
            />
            <span>-</span>
            <input
              type="number"
              name="max"
              value={filters.priceRange.max}
              onChange={handlePriceChange}
              className="sidebar__input"
            />
          </div>
          <div className="sidebar__slider">
            <input
              type="range"
              name="min"
              min="0"
              max={filters.priceRange.max - 100}
              value={filters.priceRange.min}
              onChange={handlePriceChange}
              className="sidebar__range"
            />
            <input
              type="range"
              name="max"
              min={filters.priceRange.min + 100}
              max="10000"
              value={filters.priceRange.max}
              onChange={handlePriceChange}
              className="sidebar__range"
            />
          </div>
        </div>

        <div className="sidebar__section">
          <h3 className="sidebar__title">Стать</h3>
          <ul className="sidebar__list">
            {["all", "women", "men"].map((gender) => (
              <li key={gender}>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={filters.gender === gender}
                    onChange={(e) =>
                      handleFilterChange("gender", e.target.value)
                    }
                  />
                  {gender === "all"
                    ? "Всі"
                    : gender === "women"
                    ? "Для жінок"
                    : "Для чоловіків"}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__section">
          <h3 className="sidebar__title">Вік</h3>
          <ul className="sidebar__list">
            {[
              { value: "all", label: "Всі" },
              { value: "до 18 років", label: "До 18 років" },
              { value: "від 18 до 50 років", label: "Від 18 до 50 років" },
              { value: "від 50 років", label: "Від 50 років" },
            ].map(({ value, label }) => (
              <li key={value}>
                <label>
                  <input
                    type="radio"
                    name="ageCategory"
                    value={value}
                    checked={filters.ageCategory === value}
                    onChange={(e) =>
                      handleFilterChange("ageCategory", e.target.value)
                    }
                  />
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__section">
  <h3 className="sidebar__title">Призначення</h3>
  <ul className="sidebar__list">
    {(showAllCategories ? categories : categories.slice(0, 5)).map(({ value, label }) => (
      <li key={value}>
        <label>
          <input
            type="radio"
            name="purpose"
            value={value}
            checked={filters.purpose === value}
            onChange={(e) => handleFilterChange("purpose", e.target.value)}
          />
          {label}
        </label>
      </li>
    ))}
  </ul>

  {categories.length > 5 && (
    <button className="sidebar__showMore" onClick={() => setShowAllCategories(!showAllCategories)}>
      {showAllCategories ? "Приховати" : "Дивитися все"}
    </button>
  )}
</div>

        <div className="sidebar__section">
          <h3 className="sidebar__title">Форма випуску</h3>
          <ul className="sidebar__list">
            {[
              { value: "all", label: "Всі" },
              { value: "Таблетки", label: "Таблетки" },
              { value: "Капсули", label: "Капсули" },
              { value: "Питні пляшечки", label: "Питні пляшечки" },
            ].map(({ value, label }) => (
              <li key={value}>
                <label>
                  <input
                    type="radio"
                    name="shape"
                    value={value}
                    checked={filters.shape === value}
                    onChange={(e) =>
                      handleFilterChange("shape", e.target.value)
                    }
                  />
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__section">
          <h3 className="sidebar__title">Смак</h3>
          <ul className="sidebar__list">
            {[
              { value: "all", label: "Всі" },
              { value: "Лісові ягоди", label: "Лісові ягоди" },
              { value: "Лайм-малина", label: "Лайм-малина" },
              { value: "Апельсин", label: "Апельсин" },
              { value: "Грейпфрут", label: "Грейпфрут" },
            ].map(({ value, label }) => (
              <li key={value}>
                <label>
                  <input
                    type="radio"
                    name="taste"
                    value={value}
                    checked={filters.taste === value}
                    onChange={(e) =>
                      handleFilterChange("taste", e.target.value)
                    }
                  />
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="sidebar__section">
          <h3 className="sidebar__title">Вітаміни та мікроелементи</h3>
          <ul className="sidebar__list">
            {vitamins.map(({ value, label, subcategories }) => (
              <li key={value}>
                <label>
                  <input
                    type="radio"
                    name="vitamin"
                    value={value}
                    checked={filters.vitamin === value}
                    onChange={(e) => handleFilterChange("vitamin", e.target.value)}
                  />
                  {label}
                </label>
                {subcategories && filters.vitamin === value && (
                  <ul className="sidebar__sublist">
                    {subcategories.map((sub, index) => (
                      <li key={index}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div> */}
  

<div className="sidebar__section">
  <h3 className="sidebar__title">Вітаміни та мікроелементи</h3>
  <ul className="sidebar__list">
    {(showAllVitamins ? vitaminsAndElements : vitaminsAndElements.slice(0, 5)).map(({ value, label, subcategories }) => (
      <li key={value}>
        <label>
          <input
            type="radio"
            name="traceElements"
            value={value}
            checked={filters.traceElements === value}
            onChange={(e) => handleFilterChange("traceElements", e.target.value)}
          />
          {label}
        </label>

        {subcategories && filters.traceElements === value && (
          <ul className="sidebar__sublist">
            {subcategories.map((sub, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="details"
                    value={sub}
                    checked={filters.details === sub}
                    onChange={(e) => handleFilterChange("details", e.target.value)}
                  />
                  {sub}
                </label>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>

  {vitaminsAndElements.length > 5 && (
    <button className="sidebar__showMore" onClick={() => setShowAllVitamins(!showAllVitamins)}>
      {showAllVitamins ? "Приховати" : "Дивитися все"}
    </button>
  )}
</div>


        <div className="sidebar__section">
          <h3 className="sidebar__title">Інші фільтри</h3>
          <ul className="sidebar__list">
            {[
              { value: "all", label: "Всі" },
              { value: "true", label: "Хіти продажу" }, // "true" передается как строка
            ].map(({ value, label }) => (
              <li key={value}>
                <label>
                  <input
                    type="radio"
                    name="hit"
                    value={value}
                    checked={filters.hit === (value === "true")} // Приводим к boolean
                    onChange={(e) =>
                      onFilterChange({
                        ...filters,
                        hit: e.target.value === "true" ? true : false, // Преобразуем строку в boolean
                      })
                    }
                  />
                  {label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__reset">
          <button onClick={resetFilters} className="sidebar__reset--btn">
            Скинути всі фільтри
          </button>
        </div>
      </div>
    </div>
  );
};
