// // import React, { useState } from "react";
// // import "./Sidebar.scss";

// // export const Sidebar: React.FC = () => {
// //   const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
// //   const [selectedGender, setSelectedGender] = useState("all");
// //   const [selectedAge, setSelectedAge] = useState("all");
// //   const [selectedPurpose, setSelectedPurpose] = useState("all");
// //   const [selectedTaste, setSelectedTaste] = useState("all");

// //   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setPriceRange((prev) => ({
// //       ...prev,
// //       [name]: Number(value),
// //     }));
// //   };

// //   return (
// //     <div className="sidebar">
// //       <div className="sidebar__section">
// //         <h3 className="sidebar__title">Ціна</h3>
// //         <div className="sidebar__price">
// //           <input
// //             type="number"
// //             name="min"
// //             value={priceRange.min}
// //             onChange={handlePriceChange}
// //             className="sidebar__input"
// //           />
// //           <span>-</span>
// //           <input
// //             type="number"
// //             name="max"
// //             value={priceRange.max}
// //             onChange={handlePriceChange}
// //             className="sidebar__input"
// //           />
// //         </div>
// //         <div className="sidebar__slider">
// //           <input
// //             type="range"
// //             name="min"
// //             min="529"
// //             max={priceRange.max - 100}
// //             value={priceRange.min}
// //             onChange={handlePriceChange}
// //             className="sidebar__range"
// //           />
// //           <input
// //             type="range"
// //             name="max"
// //             min={priceRange.min + 100}
// //             max="7186"
// //             value={priceRange.max}
// //             onChange={handlePriceChange}
// //             className="sidebar__range"
// //           />
// //         </div>
// //       </div>

// //       <div className="sidebar__section">
// //         <h3 className="sidebar__title">Стать</h3>
// //         <ul className="sidebar__list">
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="gender"
// //                 value="all"
// //                 checked={selectedGender === "all"}
// //                 onChange={(e) => setSelectedGender(e.target.value)}
// //               />{" "}
// //               Всі
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="gender"
// //                 value="women"
// //                 checked={selectedGender === "women"}
// //                 onChange={(e) => setSelectedGender(e.target.value)}
// //               />{" "}
// //               Для жінок
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="gender"
// //                 value="men"
// //                 checked={selectedGender === "men"}
// //                 onChange={(e) => setSelectedGender(e.target.value)}
// //               />{" "}
// //               Для чоловіків
// //             </label>
// //           </li>
// //         </ul>
// //       </div>

// //       <div className="sidebar__section">
// //         <h3 className="sidebar__title">Вік</h3>
// //         <ul className="sidebar__list">
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="age"
// //                 value="all"
// //                 checked={selectedAge === "all"}
// //                 onChange={(e) => setSelectedAge(e.target.value)}
// //               />{" "}
// //               Всі
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="age"
// //                 value="under18"
// //                 checked={selectedAge === "under18"}
// //                 onChange={(e) => setSelectedAge(e.target.value)}
// //               />{" "}
// //               до 18 років
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="age"
// //                 value="18-50"
// //                 checked={selectedAge === "18-50"}
// //                 onChange={(e) => setSelectedAge(e.target.value)}
// //               />{" "}
// //               Від 18 до 50 років
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="age"
// //                 value="50plus"
// //                 checked={selectedAge === "50plus"}
// //                 onChange={(e) => setSelectedAge(e.target.value)}
// //               />{" "}
// //               Від 50 років
// //             </label>
// //           </li>
// //         </ul>
// //       </div>

// //       <div className="sidebar__section">
// //         <h3 className="sidebar__title">Призначення</h3>
// //         <ul className="sidebar__list">
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="all"
// //                 checked={selectedPurpose === "all"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Всі
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="sport"
// //                 checked={selectedPurpose === "sport"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Спорт
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="digestion"
// //                 checked={selectedPurpose === "digestion"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Травлення
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Мозкова активність
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Імунна система
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Стрес та порушення сну
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Краса (шкіра, волосся, нігті)
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Зачаття та вагітність
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Зір
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Простата
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Діти
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Серце і судини
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Спорт
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="purpose"
// //                 value="brain"
// //                 checked={selectedPurpose === "brain"}
// //                 onChange={(e) => setSelectedPurpose(e.target.value)}
// //               />{" "}
// //               Травлення
// //             </label>
// //           </li>
// //         </ul>
// //       </div>


// //       <div className="sidebar__section">
// //         <h3 className="sidebar__title">Форма випуску</h3>
// //         <ul className="sidebar__list">
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="all"
// //                 checked={selectedTaste === "all"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Всі
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="berry"
// //                 checked={selectedTaste === "berry"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Таблетки
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="lime"
// //                 checked={selectedTaste === "lime"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Капсули
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="berry"
// //                 checked={selectedTaste === "berry"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Питні пляшечки
// //             </label>
// //           </li>
// //         </ul>
// //       </div>


// //       <div className="sidebar__section">
// //         <h3 className="sidebar__title">Смак</h3>
// //         <ul className="sidebar__list">
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="all"
// //                 checked={selectedTaste === "all"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Всі
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="berry"
// //                 checked={selectedTaste === "berry"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Лісові ягоди
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="lime"
// //                 checked={selectedTaste === "lime"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Лайм-малина
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="berry"
// //                 checked={selectedTaste === "berry"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Апельсин
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="berry"
// //                 checked={selectedTaste === "berry"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Грейпфрут
// //             </label>
// //           </li>
// //         </ul>
// //       </div>

// //       <div className="sidebar__section">
// //         <h3 className="sidebar__title">Інші фільтри</h3>
// //         <ul className="sidebar__list">
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="all"
// //                 checked={selectedTaste === "all"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Всі
// //             </label>
// //           </li>
// //           <li>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="taste"
// //                 value="berry"
// //                 checked={selectedTaste === "berry"}
// //                 onChange={(e) => setSelectedTaste(e.target.value)}
// //               />{" "}
// //               Хіти продажу
// //             </label>
// //           </li>
// //         </ul>
// //       </div>
// //     </div>
// //   );
// // };
// import React, { useState } from "react";
// import "./Sidebar.scss";

// export const Sidebar: React.FC = () => {
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
//   const [selectedGender, setSelectedGender] = useState("all");
//   const [selectedAge, setSelectedAge] = useState("all");
//   const [selectedPurpose, setSelectedPurpose] = useState("all");
//   const [selectedTaste, setSelectedTaste] = useState("all");

//   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setPriceRange((prev) => ({
//       ...prev,
//       [name]: Number(value),
//     }));
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Ціна</h3>
//         <div className="sidebar__price">
//           <input
//             type="number"
//             name="min"
//             value={priceRange.min}
//             onChange={handlePriceChange}
//             className="sidebar__input"
//           />
//           <span>-</span>
//           <input
//             type="number"
//             name="max"
//             value={priceRange.max}
//             onChange={handlePriceChange}
//             className="sidebar__input"
//           />
//         </div>
//         <div className="sidebar__slider">
//           <input
//             type="range"
//             name="min"
//             min="529"
//             max={priceRange.max - 100}
//             value={priceRange.min}
//             onChange={handlePriceChange}
//             className="sidebar__range"
//           />
//           <input
//             type="range"
//             name="max"
//             min={priceRange.min + 100}
//             max="7186"
//             value={priceRange.max}
//             onChange={handlePriceChange}
//             className="sidebar__range"
//           />
//         </div>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Стать</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="all"
//                 checked={selectedGender === "all"}
//                 onChange={(e) => setSelectedGender(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="women"
//                 checked={selectedGender === "women"}
//                 onChange={(e) => setSelectedGender(e.target.value)}
//               />{" "}
//               Для жінок
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="men"
//                 checked={selectedGender === "men"}
//                 onChange={(e) => setSelectedGender(e.target.value)}
//               />{" "}
//               Для чоловіків
//             </label>
//           </li>
//         </ul>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Вік</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="all"
//                 checked={selectedAge === "all"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="under18"
//                 checked={selectedAge === "under18"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               до 18 років
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="18-50"
//                 checked={selectedAge === "18-50"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               Від 18 до 50 років
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="50plus"
//                 checked={selectedAge === "50plus"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               Від 50 років
//             </label>
//           </li>
//         </ul>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Призначення</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="all"
//                 checked={selectedPurpose === "all"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="sport"
//                 checked={selectedPurpose === "sport"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Спорт
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="digestion"
//                 checked={selectedPurpose === "digestion"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Травлення
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Мозкова активність
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Імунна система
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Стрес та порушення сну
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Краса (шкіра, волосся, нігті)
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Зачаття та вагітність
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Зір
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Простата
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Діти
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Серце і судини
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Спорт
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Травлення
//             </label>
//           </li>
//         </ul>
//       </div>


//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Форма випуску</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="all"
//                 checked={selectedTaste === "all"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Таблетки
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="lime"
//                 checked={selectedTaste === "lime"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Капсули
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Питні пляшечки
//             </label>
//           </li>
//         </ul>
//       </div>


//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Смак</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="all"
//                 checked={selectedTaste === "all"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Лісові ягоди
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="lime"
//                 checked={selectedTaste === "lime"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Лайм-малина
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Апельсин
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Грейпфрут
//             </label>
//           </li>
//         </ul>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Інші фільтри</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="all"
//                 checked={selectedTaste === "all"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Хіти продажу
//             </label>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// import React, { useState } from "react";
// import "./Sidebar.scss";

// export const Sidebar: React.FC = () => {
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
//   const [selectedGender, setSelectedGender] = useState("all");
//   const [selectedAge, setSelectedAge] = useState("all");
//   const [selectedPurpose, setSelectedPurpose] = useState("all");
//   const [selectedTaste, setSelectedTaste] = useState("all");

//   const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setPriceRange((prev) => ({
//       ...prev,
//       [name]: Number(value),
//     }));
//   };

//   return (
//     <div className="sidebar">
//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Ціна</h3>
//         <div className="sidebar__price">
//           <input
//             type="number"
//             name="min"
//             value={priceRange.min}
//             onChange={handlePriceChange}
//             className="sidebar__input"
//           />
//           <span>-</span>
//           <input
//             type="number"
//             name="max"
//             value={priceRange.max}
//             onChange={handlePriceChange}
//             className="sidebar__input"
//           />
//         </div>
//         <div className="sidebar__slider">
//           <input
//             type="range"
//             name="min"
//             min="529"
//             max={priceRange.max - 100}
//             value={priceRange.min}
//             onChange={handlePriceChange}
//             className="sidebar__range"
//           />
//           <input
//             type="range"
//             name="max"
//             min={priceRange.min + 100}
//             max="7186"
//             value={priceRange.max}
//             onChange={handlePriceChange}
//             className="sidebar__range"
//           />
//         </div>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Стать</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="all"
//                 checked={selectedGender === "all"}
//                 onChange={(e) => setSelectedGender(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="women"
//                 checked={selectedGender === "women"}
//                 onChange={(e) => setSelectedGender(e.target.value)}
//               />{" "}
//               Для жінок
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="men"
//                 checked={selectedGender === "men"}
//                 onChange={(e) => setSelectedGender(e.target.value)}
//               />{" "}
//               Для чоловіків
//             </label>
//           </li>
//         </ul>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Вік</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="all"
//                 checked={selectedAge === "all"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="under18"
//                 checked={selectedAge === "under18"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               до 18 років
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="18-50"
//                 checked={selectedAge === "18-50"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               Від 18 до 50 років
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="age"
//                 value="50plus"
//                 checked={selectedAge === "50plus"}
//                 onChange={(e) => setSelectedAge(e.target.value)}
//               />{" "}
//               Від 50 років
//             </label>
//           </li>
//         </ul>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Призначення</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="all"
//                 checked={selectedPurpose === "all"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="sport"
//                 checked={selectedPurpose === "sport"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Спорт
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="digestion"
//                 checked={selectedPurpose === "digestion"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Травлення
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Мозкова активність
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Імунна система
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Стрес та порушення сну
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Краса (шкіра, волосся, нігті)
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Зачаття та вагітність
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Зір
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Простата
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Діти
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Серце і судини
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Спорт
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="purpose"
//                 value="brain"
//                 checked={selectedPurpose === "brain"}
//                 onChange={(e) => setSelectedPurpose(e.target.value)}
//               />{" "}
//               Травлення
//             </label>
//           </li>
//         </ul>
//       </div>


//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Форма випуску</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="all"
//                 checked={selectedTaste === "all"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Таблетки
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="lime"
//                 checked={selectedTaste === "lime"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Капсули
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Питні пляшечки
//             </label>
//           </li>
//         </ul>
//       </div>


//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Смак</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="all"
//                 checked={selectedTaste === "all"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Лісові ягоди
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="lime"
//                 checked={selectedTaste === "lime"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Лайм-малина
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Апельсин
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Грейпфрут
//             </label>
//           </li>
//         </ul>
//       </div>

//       <div className="sidebar__section">
//         <h3 className="sidebar__title">Інші фільтри</h3>
//         <ul className="sidebar__list">
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="all"
//                 checked={selectedTaste === "all"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Всі
//             </label>
//           </li>
//           <li>
//             <label>
//               <input
//                 type="radio"
//                 name="taste"
//                 value="berry"
//                 checked={selectedTaste === "berry"}
//                 onChange={(e) => setSelectedTaste(e.target.value)}
//               />{" "}
//               Хіти продажу
//             </label>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };
import React from "react";
import "./Sidebar.scss";
import { SidebarProps } from "../../types/Filters";



export const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange }) => {
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

  const handleFilterChange = (key: keyof typeof filters, value: string | boolean) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="sidebar">
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
                  onChange={(e) => handleFilterChange("gender", e.target.value)}
                />
                {gender === "all" ? "Всі" : gender === "women" ? "Для жінок" : "Для чоловіків"}
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
            onChange={(e) => handleFilterChange("ageCategory", e.target.value)}
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
          {[
            { value: "all", label: "Всі" },
            { value: "Спорт", label: "Спорт" },
            { value: "Травлення", label: "Травлення" },
            { value: "Мозкова активність", label: "Мозкова активність" },
            { value: "мунна система", label: "Імунна система" },
            { value: "Стрес та порушення сну", label: "Стрес та порушення сну" },
            { value: "Краса (шкіра, волосся, нігті)", label: "Краса (шкіра, волосся, нігті)" },
            { value: "Зачаття та вагітність", label: "Зачаття та вагітність" },
            { value: "Зір", label: "Зір" },
            { value: "Простата", label: "Простата" },
            { value: "Діти", label: "Діти" },
            { value: "Серце і судини", label: "Серце і судини" },
          ].map(({ value, label }) => (
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
            onChange={(e) => handleFilterChange("shape", e.target.value)}
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
                  onChange={(e) => handleFilterChange("taste", e.target.value)}
                />
                {label}
              </label>
            </li>
          ))}
        </ul>
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




    </div>
  );
};
