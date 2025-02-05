import React from "react";
import "./PrivacyPolicyPage.scss";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    
    <div className="privacy-policy">
    <div className="privacy-policy__container">
      <h1 className="privacy-policy__title">Політика конфіденційності</h1>
      <p className="privacy-policy__info">
        Конфіденційність користувачів нашого веб-сайту Orthomol має велике
        значення для нас. Ми докладаємо всіх зусиль для її захисту. Ця
        політика пояснює, як ми збираємо, використовуємо та захищаємо вашу
        персональну інформацію.
      </p>

      <h2 className="privacy-policy__subtitle">1. Збір персональних даних</h2>
      <p className="privacy-policy__info">Ми можемо збирати такі типи даних:</p>
      <ul className="privacy-policy__list">
        <li className="privacy-policy__list--link">Інформація про ваш пристрій (IP-адреса, тип браузера тощо);</li>
        <li className="privacy-policy__list--link">Дані про ваші відвідування нашого сайту (сторінки, час перебування);</li>
        <li className="privacy-policy__list--link">Ім'я, email, номер телефону, які ви вводите при реєстрації або покупці;</li>
        <li className="privacy-policy__list--link">Інформація про ваші замовлення та платежі;</li>
        <li className="privacy-policy__list--link">Будь-які повідомлення, які ви надсилаєте нам.</li>
      </ul>

      <h2 className="privacy-policy__subtitle">2. Використання вашої інформації</h2>
      <p className="privacy-policy__info">Ми використовуємо вашу інформацію для:</p>
      <ul className="privacy-policy__list">
        <li className="privacy-policy__list--link">Обробки замовлень і надання сервісу;</li>
        <li className="privacy-policy__list--link">Покращення роботи нашого сайту;</li>
        <li className="privacy-policy__list--link">Забезпечення безпеки та захисту від шахрайства;</li>
        <li className="privacy-policy__list--link">Надсилання інформаційних або рекламних повідомлень (якщо ви дали згоду);</li>
        <li className="privacy-policy__list--link">Аналізу даних для покращення наших продуктів та послуг.</li>
      </ul>

      <h2 className="privacy-policy__subtitle">3. Розкриття інформації</h2>
      <p className="privacy-policy__info">Ми можемо передавати вашу інформацію лише у випадках:</p>
      <ul className="privacy-policy__list">
        <li className="privacy-policy__list--link">Якщо цього вимагає закон;</li>
        <li className="privacy-policy__list--link">Для виконання замовлень (платіжні системи, служби доставки);</li>
        <li className="privacy-policy__list--link">З метою захисту наших прав та безпеки клієнтів.</li>
      </ul>
      <p className="privacy-policy__info"><strong>Ми не передаємо ваші персональні дані третім особам</strong> для маркетингових цілей без вашої згоди.</p>

      <h2 className="privacy-policy__subtitle">4. Захист даних</h2>
      <p className="privacy-policy__info">Ми вживаємо всіх необхідних заходів для захисту вашої інформації:</p>
      <ul className="privacy-policy__list">
        <li className="privacy-policy__list--link">Зберігаємо дані на захищених серверах;</li>
        <li className="privacy-policy__list--link">Використовуємо шифрування для фінансових операцій;</li>
        <li className="privacy-policy__list--link">Не передаємо паролі та конфіденційну інформацію третім особам.</li>
      </ul>

      <h2 className="privacy-policy__subtitle">5. Cookies</h2>
      <p className="privacy-policy__info">Наш сайт використовує cookies для:</p>
      <ul className="privacy-policy__list">
        <li className="privacy-policy__list--link">Покращення роботи сайту та персоналізації контенту;</li>
        <li className="privacy-policy__list--link">Збереження ваших налаштувань та уподобань;</li>
        <li className="privacy-policy__list--link">Аналізу поведінки користувачів.</li>
      </ul>
      <p className="privacy-policy__info">Ви можете змінити налаштування cookies у своєму браузері.</p>

      <h2 className="privacy-policy__subtitle">6. Ваші права</h2>
      <p className="privacy-policy__info">Ви маєте право:</p>
      <ul className="privacy-policy__list">
        <li className="privacy-policy__list--link">Отримати копію ваших персональних даних;</li>
        <li className="privacy-policy__list--link">Виправити або видалити свої дані;</li>
        <li className="privacy-policy__list--link">Відмовитися від отримання маркетингових повідомлень.</li>
      </ul>
      <p className="privacy-policy__info">Для реалізації цих прав зв’яжіться з нами.</p>

      <h2 className="privacy-policy__subtitle">7. Зміни в політиці конфіденційності</h2>
      <p className="privacy-policy__info">
        Ми можемо оновлювати цю політику час від часу. Оновлення будуть
        публікуватися на цій сторінці. Рекомендуємо вам періодично
        переглядати політику конфіденційності.
      </p>
    </div>
  </div>
);
};
