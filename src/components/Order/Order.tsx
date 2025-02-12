// import React, { useEffect, useState } from "react";
// import { useBasket } from "../../context/BasketContextType";
// import "./Order.scss";
// import "../../styles/container.scss";
// import {
//   fetchCities,
//   fetchOblasts,
//   fetchWarehouses,
// } from "../../api/novaPoshtaService";
// import { NavLink } from "react-router-dom";

// export const Order: React.FC = () => {
//   const { basketItems, updateQuantity, removeFromBasket, clearBasket } =
//     useBasket();
//     const [errors, setErrors] = useState<Record<string, string>>({});
//   const [basketError, setBasketError] = useState<string | null>(null);
//   const [oblasts, setOblasts] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [warehouses, setWarehouses] = useState([]);
//   const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     surname: "",
//     phone: "",
//     email: "",
//     deliveryMethod: "",
//     oblast: "",
//     misto: "",
//     viddilennia: "",
//     paymentMethod: "",
//   });

//   useEffect(() => {
//     fetchOblasts().then(setOblasts);
//   }, []);

//   const calculateTotal = () =>
//     basketItems.reduce(
//       (sum, item) => sum + item.product.priceRegular * item.quantity,
//       0
//     );

//   const validateField = (field: string, value: string) => {
//     switch (field) {
//       case "name":
//         return value.trim().length < 2
//           ? "Ім’я обов’язкове і має бути не менше 2 символів."
//           : "";
//       case "surname":
//         return value.trim().length < 2
//           ? "Прізвище обов’язкове і має бути не менше 2 символів."
//           : "";
//       case "phone":
//         const phoneRegex = /^\+?\d{10,12}$/;
//         return !phoneRegex.test(value) ? "Введіть дійсний номер телефону." : "";
//       case "email":
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return !emailRegex.test(value)
//           ? "Введіть дійсну електронну адресу."
//           : "";
//       default:
//         return "";
//     }
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));

//     const error = validateField(field, value);
//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       if (!error) {
//         delete newErrors[field];
//       } else {
//         newErrors[field] = error;
//       }
//       return newErrors;
//     });
//   };

//   const handleOrderSubmit = () => {
//     if (basketItems.length === 0) {
//       setBasketError(
//         "Ваша корзина порожня. Додайте товари перед оформленням замовлення."
//       );
//       return;
//     } else {
//       setBasketError(null);
//     }
//     const newErrors: Record<string, string> = {};

//     Object.keys(formData).forEach((field) => {
//       const error = validateField(
//         field,
//         formData[field as keyof typeof formData]
//       );
//       if (error) newErrors[field] = error;
//     });

//     if (!formData.deliveryMethod) {
//       newErrors.deliveryMethod = "Оберіть спосіб доставки.";
//     }
//     if (!formData.oblast) {
//       newErrors.oblast = "Оберіть область.";
//     }
//     if (!formData.misto) {
//       newErrors.misto = "Оберіть місто.";
//     }
//     if (!formData.viddilennia) {
//       newErrors.viddilennia = "Оберіть відділення.";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setErrors({});
//     setIsOrderConfirmed(true);
//     clearBasket();
//     setFormData({
//       name: "",
//       surname: "",
//       phone: "",
//       email: "",
//       deliveryMethod: "",
//       oblast: "",
//       misto: "",
//       viddilennia: "",
//       paymentMethod: "",
//     });

//     setTimeout(() => {
//       setIsOrderConfirmed(false);
//     }, 3000);
//   };

//   const handleOblastChange = async (
//     e: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const oblastRef = e.target.value;

//     setFormData((prev) => ({
//       ...prev,
//       oblast: oblastRef,
//       misto: "",
//       viddilennia: "",
//     }));

//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors.oblast;
//       delete newErrors.misto;
//       delete newErrors.viddilennia;
//       return newErrors;
//     });

//     const fetchedCities = await fetchCities(oblastRef);
//     setCities(fetchedCities);
//     setWarehouses([]);
//   };

//   const handleCityChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const cityRef = e.target.value;

//     setFormData((prev) => ({
//       ...prev,
//       misto: cityRef,
//       viddilennia: "",
//     }));

//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors.misto;
//       delete newErrors.viddilennia;
//       return newErrors;
//     });

//     try {
//       const fetchedWarehouses = await fetchWarehouses(cityRef);

//       const filteredWarehouses = fetchedWarehouses.filter((warehouse: any) =>
//         formData.deliveryMethod === "nova-poshta-terminal"
//           ? warehouse.Description.startsWith("Поштомат")
//           : !warehouse.Description.startsWith("Поштомат")
//       );

//       setWarehouses(filteredWarehouses);
//     } catch (error) {
//       console.error("Ошибка при загрузке отделений:", error);
//     }
//   };

//   const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const deliveryMethod = e.target.value;

//     setFormData((prev) => ({ ...prev, deliveryMethod }));

//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors.deliveryMethod;
//       return newErrors;
//     });

//     if (formData.misto) {
//       fetchWarehouses(formData.misto).then((fetchedWarehouses) => {
//         const filteredWarehouses = fetchedWarehouses.filter((warehouse: any) =>
//           deliveryMethod === "nova-poshta-terminal"
//             ? warehouse.Description.startsWith("Поштомат")
//             : !warehouse.Description.startsWith("Поштомат")
//         );

//         setWarehouses(filteredWarehouses);
//       });
//     }
//   };

//   const handleWarehouseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFormData((prev) => ({ ...prev, viddilennia: e.target.value }));

//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors.viddilennia;
//       return newErrors;
//     });
//   };

//   return (
//     <div className="orderPage container">
//       <h2 className="orderPage__title">Оформлення замовлення</h2>
//       <hr />
//       <div className="orderPage__container">
//         <div className="orderPage__form">
//           <div className="orderPage__section">
//             <h3 className="orderPage__subtitle">Ваші дані:</h3>
//             <div className="orderPage__inputs">
//               <div>
//                 <input
//                   className={`orderPage__inputs--input ${
//                     errors.name ? "error" : ""
//                   }`}
//                   type="text"
//                   placeholder="Ваше ім’я"
//                   value={formData.name}
//                   onChange={(e) => handleInputChange("name", e.target.value)}
//                 />
//                 {errors.name && <p className="error-message">{errors.name}</p>}
//               </div>
//               <div>
//                 <input
//                   className={`orderPage__inputs--input ${
//                     errors.surname ? "error" : ""
//                   }`}
//                   type="text"
//                   placeholder="Ваше прізвище"
//                   value={formData.surname}
//                   onChange={(e) => handleInputChange("surname", e.target.value)}
//                 />
//                 {errors.surname && (
//                   <p className="error-message">{errors.surname}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   className={`orderPage__inputs--input ${
//                     errors.phone ? "error" : ""
//                   }`}
//                   type="tel"
//                   placeholder="Ваш телефон"
//                   value={formData.phone}
//                   onChange={(e) => handleInputChange("phone", e.target.value)}
//                 />
//                 {errors.phone && (
//                   <p className="error-message">{errors.phone}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   className={`orderPage__inputs--input ${
//                     errors.email ? "error" : ""
//                   }`}
//                   type="email"
//                   placeholder="Ваш email"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange("email", e.target.value)}
//                 />
//                 {errors.email && (
//                   <p className="error-message">{errors.email}</p>
//                 )}
//               </div>
//             </div>
//             <hr style={{ marginTop: "50px" }} />
//           </div>

//           <div className="orderPage__section">
//             <h3 className="orderPage__subtitle">Адреса доставки:</h3>
//             <p className="orderPage__subtitle--text">Спосіб доставки:</p>
//             <div className="orderPage__delivery">
//               <label className="orderPage__delivery--text">
//                 <input
//                   type="radio"
//                   name="delivery"
//                   value="nova-poshta"
//                   checked={formData.deliveryMethod === "nova-poshta"}
//                   onChange={(e) => handleDeliveryChange(e)}
//                 />
//                 Нова Пошта (відділення)
//               </label>
//               <label className="orderPage__delivery--text">
//                 <input
//                   type="radio"
//                   name="delivery"
//                   value="nova-poshta-terminal"
//                   checked={formData.deliveryMethod === "nova-poshta-terminal"}
//                   onChange={(e) => handleDeliveryChange(e)}
//                 />
//                 Нова Пошта (Поштомат)
//               </label>
//             </div>
//             {errors.deliveryMethod && (
//               <p className="orderPage__error-message">
//                 {errors.deliveryMethod}
//               </p>
//             )}

//             <div className="address">
//               <div className="address__select-group">
//                 <label className="address__label">Область:</label>
//                 <select
//                   className={`address__select ${errors.oblast ? "error" : ""}`}
//                   value={formData.oblast}
//                   onChange={handleOblastChange}
//                 >
//                   <option value="">Оберіть область</option>
//                   {oblasts.map((oblast: any) => (
//                     <option key={oblast.Ref} value={oblast.Ref}>
//                       {oblast.Description}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.oblast && (
//                   <p className="orderPage__error-message">{errors.oblast}</p>
//                 )}
//               </div>

//               <div className="address__select-group">
//                 <label className="address__label">Місто:</label>
//                 <select
//                   className={`address__select ${errors.misto ? "error" : ""}`}
//                   value={formData.misto}
//                   onChange={handleCityChange}
//                   disabled={!formData.oblast}
//                 >
//                   <option value="">Оберіть місто</option>
//                   {cities.map((city: any) => (
//                     <option key={city.Ref} value={city.Ref}>
//                       {city.Description}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.misto && (
//                   <p className="orderPage__error-message">{errors.misto}</p>
//                 )}
//               </div>

//               <div className="address__select-group">
//                 <label className="address__label">Відділення:</label>
//                 <select
//                   className={`address__select ${
//                     errors.viddilennia ? "error" : ""
//                   }`}
//                   value={formData.viddilennia}
//                   onChange={handleWarehouseChange}
//                   disabled={!formData.misto}
//                 >
//                   <option value="">Оберіть відділення</option>
//                   {warehouses.map((warehouse: any) => (
//                     <option key={warehouse.Ref} value={warehouse.Description}>
//                       {warehouse.Description}
//                     </option>
//                   ))}
//                 </select>
//                 {errors.viddilennia && (
//                   <p className="orderPage__error-message">
//                     {errors.viddilennia}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="orderPage__summary">
//           <div className="orderPage__summary--content">
//             <h3 className="orderPage__subtitle">Ваше замовлення</h3>

//             <div className="basketPage__items">
//               {basketItems.map(({ product, quantity }) => (
//                 <div key={product.id} className="basketPage__item">
//                   <img
//                     className="basketPage__img"
//                     src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
//                     alt={product.name}
//                   />
//                   <div className="basketPage__info">
//                     <h3 className="basketPage__name">{product.name}</h3>
//                     <p className="basketPage__price">
//                       {product.priceRegular.toString().replace(/^(\d)/, "$1 ")}{" "}
//                       грн
//                     </p>
//                     <div className="basketPage__quantity">
//                       <button
//                         className="basketPage__counter"
//                         onClick={() => updateQuantity(product.id, quantity - 1)}
//                       >
//                         -
//                       </button>
//                       <p className="basketPage__count">
//                         {quantity} <span>уп.</span>
//                       </p>
//                       <button
//                         className="basketPage__counter"
//                         onClick={() => updateQuantity(product.id, quantity + 1)}
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <button
//                     className="basketPage__remove"
//                     onClick={() => removeFromBasket(product.id)}
//                   >
//                     ✖
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <hr />
//               <div className="orderPage__total">
//                 <p>Всього:</p>
//                 <p>{calculateTotal().toLocaleString()} грн</p>
//               </div>
//             </div>
//           </div>

//           <div className="payment">
//             <h2 className="payment__title">Спосіб оплати</h2>
//             <div className="payment__method">
//               <div className="payment__radio">
//                 <input
//                   type="radio"
//                   id="cash-on-delivery"
//                   name="payment"
//                   value="cash-on-delivery"
//                   checked={formData.paymentMethod === "cash-on-delivery"}
//                   onChange={(e) =>
//                     handleInputChange("paymentMethod", e.target.value)
//                   }
//                 />
//                 <label htmlFor="payment-method" className="payment__label">
//                   Оплата при отриманні
//                 </label>
//               </div>
//               <p className="payment__info">
//                 Ваші персональні дані будуть використовуватися для обробки
//                 вашого <br /> замовлення, підтримки вашого досвіду на цьому
//                 сайті та для інших цілей, <br /> описаних у цьому посиланні -
//                 <NavLink to="privacy" className="payment__link">
//                   політика конфіденційності
//                 </NavLink>
//                 .
//               </p>
//             </div>
//           </div>
//           <div>
//             <div>
//               {basketError && (
//                 <p className="orderPage__error-message">{basketError}</p>
//               )}
//               <button
//                 className="basketPage__order--text basketPage__order orderPage__button"
//                 onClick={handleOrderSubmit}
//               >
//                 Оформити замовлення
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isOrderConfirmed && (
//         <div className="orderPage__popup">
//           <div className="orderPage__popup-content">
//             <h3>Замовлення прийнято!</h3>
//             <p>
//               Дякуємо за ваше замовлення. Ми зв’яжемося з вами найближчим часом.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import { useBasket } from "../../context/BasketContextType";
import "./Order.scss";
import "../../styles/container.scss";
import {
  fetchCities,
  fetchOblasts,
  fetchWarehouses,
} from "../../api/novaPoshtaService";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { City, Oblast, Warehouse } from "../../types";
export const Order: React.FC = () => {
  const { basketItems, updateQuantity, removeFromBasket, clearBasket } =
    useBasket();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [basketError, setBasketError] = useState<string | null>(null);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  // Состояние для отделения

  const [oblasts, setOblasts] = useState<Oblast[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  // const [inputCity, setInputCity] = useState(""); // Текст в поле города
  // const [inputWarehouse, setInputWarehouse] = useState(""); // Текст в поле отделения


  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    deliveryMethod: "",
    oblast: "",
    misto: "",
    viddilennia: "",
    paymentMethod: "",
  });

  useEffect(() => {
    fetchOblasts().then(setOblasts);
  }, []);

  const calculateTotal = () =>
    basketItems.reduce(
      (sum, item) => sum + item.product.priceRegular * item.quantity,
      0
    );

  const validateField = (field: string, value: string) => {
    switch (field) {
      case "name":
        return value.trim().length < 2
          ? "Ім’я обов’язкове і має бути не менше 2 символів."
          : "";
      case "surname":
        return value.trim().length < 2
          ? "Прізвище обов’язкове і має бути не менше 2 символів."
          : "";
      case "phone":
        const phoneRegex = /^\+?\d{10,12}$/;
        return !phoneRegex.test(value) ? "Введіть дійсний номер телефону." : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
          ? "Введіть дійсну електронну адресу."
          : "";
      default:
        return "";
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    const error = validateField(field, value);
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (!error) {
        delete newErrors[field];
      } else {
        newErrors[field] = error;
      }
      return newErrors;
    });
  };

  const handleOrderSubmit = () => {
    if (basketItems.length === 0) {
      setBasketError(
        "Ваша корзина порожня. Додайте товари перед оформленням замовлення."
      );
      return;
    } else {
      setBasketError(null);
    }
    const newErrors: Record<string, string> = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(
        field,
        formData[field as keyof typeof formData]
      );
      if (error) newErrors[field] = error;
    });

    if (!formData.deliveryMethod) {
      newErrors.deliveryMethod = "Оберіть спосіб доставки.";
    }
    if (!formData.oblast) {
      newErrors.oblast = "Оберіть область.";
    }
    if (!formData.misto) {
      newErrors.misto = "Оберіть місто.";
    }
    if (!formData.viddilennia) {
      newErrors.viddilennia = "Оберіть відділення.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsOrderConfirmed(true);
    clearBasket();
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      deliveryMethod: "",
      oblast: "",
      misto: "",
      viddilennia: "",
      paymentMethod: "",
    });

    setTimeout(() => {
      setIsOrderConfirmed(false);
    }, 3000);
  };

  const handleOblastChange = async (selectedOption: Oblast | null) => {
    if (!selectedOption) return;

    setFormData((prev) => ({
      ...prev,
      oblast: selectedOption.Ref, // Сохраняем именно `Ref`
      misto: "", // Сбрасываем город
      viddilennia: "", // Сбрасываем отделение
    }));

    // setInputCity(""); // Очищаем отображаемый текст города
    // setInputWarehouse(""); // Очищаем отделение
    setErrors((prev) => ({
      ...prev,
      oblast: "",
      misto: "",
      viddilennia: "",
    }));

    const fetchedCities = await fetchCities(selectedOption.Ref);
    setCities(fetchedCities);
    setWarehouses([]); // Очищаем отделения
  };

  const handleCityChange = async (selectedOption: City | null) => {
    if (!selectedOption) return;

    setFormData((prev) => ({
      ...prev,
      misto: selectedOption.Ref, // Сохраняем `Ref`
      viddilennia: "", // Сбрасываем отделение
    }));

    // setInputCity(selectedOption.Description); // Отображаем текст города
    setErrors((prev) => ({
      ...prev,
      misto: "",
      viddilennia: "",
    }));

    const fetchedWarehouses = await fetchWarehouses(selectedOption.Ref);
    setWarehouses(fetchedWarehouses);
  };

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const deliveryMethod = e.target.value;

    setFormData((prev) => ({ ...prev, deliveryMethod }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors.deliveryMethod;
      return newErrors;
    });

    if (formData.misto) {
      fetchWarehouses(formData.misto).then((fetchedWarehouses) => {
        const filteredWarehouses = fetchedWarehouses.filter((warehouse: any) =>
          deliveryMethod === "nova-poshta-terminal"
            ? warehouse.Description.startsWith("Поштомат")
            : !warehouse.Description.startsWith("Поштомат")
        );

        setWarehouses(filteredWarehouses);
      });
    }
  };

  const handleWarehouseChange = (selectedOption: Warehouse | null) => {
    if (!selectedOption) return;

    setFormData((prev) => ({
      ...prev,
      viddilennia: selectedOption.Ref, // Сохраняем `Ref`
    }));

    // setInputWarehouse(selectedOption.Description); // Отображаем текст отделения
    setErrors((prev) => ({ ...prev, viddilennia: "" }));
  };

  return (
    <div className="orderPage container">
      <h2 className="orderPage__title">Оформлення замовлення</h2>
      <hr />
      <div className="orderPage__container">
        <div className="orderPage__form">
          <div className="orderPage__section">
            <h3 className="orderPage__subtitle">Ваші дані:</h3>
            <div className="orderPage__inputs">
              <div>
                <input
                  className={`orderPage__inputs--input ${
                    errors.name ? "error" : ""
                  }`}
                  type="text"
                  placeholder="Ваше ім’я"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div>
                <input
                  className={`orderPage__inputs--input ${
                    errors.surname ? "error" : ""
                  }`}
                  type="text"
                  placeholder="Ваше прізвище"
                  value={formData.surname}
                  onChange={(e) => handleInputChange("surname", e.target.value)}
                />
                {errors.surname && (
                  <p className="error-message">{errors.surname}</p>
                )}
              </div>
              <div>
                <input
                  className={`orderPage__inputs--input ${
                    errors.phone ? "error" : ""
                  }`}
                  type="tel"
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  className={`orderPage__inputs--input ${
                    errors.email ? "error" : ""
                  }`}
                  type="email"
                  placeholder="Ваш email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
            </div>
            <hr style={{ marginTop: "50px" }} />
          </div>

          <div className="orderPage__section">
            <h3 className="orderPage__subtitle">Адреса доставки:</h3>
            <p className="orderPage__subtitle--text">Спосіб доставки:</p>
            <div className="orderPage__delivery">
              <label className="orderPage__delivery--text">
                <input
                  type="radio"
                  name="delivery"
                  value="nova-poshta"
                  checked={formData.deliveryMethod === "nova-poshta"}
                  onChange={(e) => handleDeliveryChange(e)}
                />
                Нова Пошта (відділення)
              </label>
              <label className="orderPage__delivery--text">
                <input
                  type="radio"
                  name="delivery"
                  value="nova-poshta-terminal"
                  checked={formData.deliveryMethod === "nova-poshta-terminal"}
                  onChange={(e) => handleDeliveryChange(e)}
                />
                Нова Пошта (Поштомат)
              </label>
            </div>
            {errors.deliveryMethod && (
              <p className="orderPage__error-message">
                {errors.deliveryMethod}
              </p>
            )}

            <div className="address">
              <div className="address__select-group">
                <label className="address__label">Область:</label>
                <Select<Oblast>
                  className={`address__select ${errors.oblast ? "error" : ""}`}
                  options={oblasts}
                  getOptionLabel={(option) => option.Description}
                  getOptionValue={(option) => option.Ref}
                  value={
                    oblasts.find((oblast) => oblast.Ref === formData.oblast) ||
                    null
                  }
                 
                  onChange={(selectedOption) => {
                    if (!selectedOption) {
                      setFormData((prev) => ({
                        ...prev,
                        oblast: "",
                        misto: "",
                        viddilennia: "",
                      }));
                      // ✅ Очистка текста
                
                      return;
                    }
                  
                    // Вызываем обработчик выбора отделения
                    handleOblastChange(selectedOption);
                  }}
                  placeholder="Оберіть область"
                  isSearchable
                  isClearable
                />

                {errors.oblast && (
                  <p className="orderPage__error-message">{errors.oblast}</p>
                )}
              </div>

              <div className="address__select-group">
                <label className="address__label">Місто:</label>
                <Select<City>
                  className={`address__select ${errors.misto ? "error" : ""}`}
                  options={cities}
                  getOptionLabel={(city) => city.Description}
                  getOptionValue={(city) => city.Ref}
                  value={
                    cities.find((city) => city.Ref === formData.misto) || null
                  }
                  // onChange={handleCityChange}
                  onChange={(selectedOption) => {
                    if (!selectedOption) {
                      setFormData((prev) => ({
                        ...prev,
                        misto: "",
                        viddilennia: "",
                      }));
                      // ✅ Очистка текста
                     
                      return;
                    }
                  
                    // Вызываем обработчик выбора отделения
                    handleCityChange(selectedOption);
                  }}
                  
                  // inputValue={inputCity}
                  // onInputChange={(inputValue) => setInputCity(inputValue)}
                  isDisabled={!formData.oblast}
                  placeholder="Оберіть місто"
                  isSearchable
                  isClearable
                  filterOption={(option, inputValue) =>
                    option.label.toLowerCase().startsWith(inputValue.toLowerCase())
                  }
                />

                {errors.misto && (
                  <p className="orderPage__error-message">{errors.misto}</p>
                )}
              </div>

              <div className="address__select-group">
                <label className="address__label">Відділення:</label>
                <Select<Warehouse>
                  className={`address__select ${
                    errors.viddilennia ? "error" : ""
                  }`}
                  options={warehouses}
                  getOptionLabel={(warehouse) => warehouse.Description}
                  getOptionValue={(warehouse) => warehouse.Ref}
                  value={
                    warehouses.find(
                      (warehouse) => warehouse.Ref === formData.viddilennia
                    ) || null
                  }
                  onChange={(selectedOption) => {
                    if (!selectedOption) {
                      setFormData((prev) => ({
                        ...prev,
                        viddilennia: "",
                      }));
                      // setInputCity(""); // ✅ Очистка текста
                
                      return;
                    }
                  
                    // Вызываем обработчик выбора отделения
                    handleWarehouseChange(selectedOption);
                  }}
                  
                  // inputValue={inputWarehouse}
                  // onInputChange={(inputValue) => setInputWarehouse(inputValue)}
                  isDisabled={!formData.misto}
                  placeholder="Оберіть відділення"
                  isSearchable
                  isClearable
                />

                {errors.viddilennia && (
                  <p className="orderPage__error-message">
                    {errors.viddilennia}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="orderPage__summary">
          <div className="orderPage__summary--content">
            <h3 className="orderPage__subtitle">Ваше замовлення</h3>

            <div className="basketPage__items">
              {basketItems.map(({ product, quantity }) => (
                <div key={product.id} className="basketPage__item">
                  <img
                    className="basketPage__img"
                    src={`${process.env.PUBLIC_URL}/${product.imgProductRef}`}
                    alt={product.name}
                  />
                  <div className="basketPage__info">
                    <h3 className="basketPage__name">{product.name}</h3>
                    <p className="basketPage__price">
                      {product.priceRegular.toString().replace(/^(\d)/, "$1 ")}{" "}
                      грн
                    </p>
                    <div className="basketPage__quantity">
                      <button
                        className="basketPage__counter"
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        -
                      </button>
                      <p className="basketPage__count">
                        {quantity} <span>уп.</span>
                      </p>
                      <button
                        className="basketPage__counter"
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="basketPage__remove"
                    onClick={() => removeFromBasket(product.id)}
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
            <div>
              <hr />
              <div className="orderPage__total">
                <p>Всього:</p>
                <p>{calculateTotal().toLocaleString()} грн</p>
              </div>
            </div>
          </div>

          <div className="payment">
            <h2 className="payment__title">Спосіб оплати</h2>
            <div className="payment__method">
              <div className="payment__radio">
                <input
                  type="radio"
                  id="cash-on-delivery"
                  name="payment"
                  value="cash-on-delivery"
                  checked={formData.paymentMethod === "cash-on-delivery"}
                  onChange={(e) =>
                    handleInputChange("paymentMethod", e.target.value)
                  }
                />
                <label htmlFor="payment-method" className="payment__label">
                  Оплата при отриманні
                </label>
              </div>
              <p className="payment__info">
                Ваші персональні дані будуть використовуватися для обробки
                вашого <br /> замовлення, підтримки вашого досвіду на цьому
                сайті та для інших цілей, <br /> описаних у цьому посиланні -
                <NavLink to="privacy" className="payment__link">
                  політика конфіденційності
                </NavLink>
                .
              </p>
            </div>
          </div>
          <div>
            <div>
              {basketError && (
                <p className="orderPage__error-message">{basketError}</p>
              )}
              <button
                className="basketPage__order--text basketPage__order orderPage__button"
                onClick={handleOrderSubmit}
              >
                Оформити замовлення
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOrderConfirmed && (
        <div className="orderPage__popup">
          <div className="orderPage__popup-content">
            <h3>Замовлення прийнято!</h3>
            <p>
              Дякуємо за ваше замовлення. Ми зв’яжемося з вами найближчим часом.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
