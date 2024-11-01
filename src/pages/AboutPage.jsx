import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  const handleButtonClick = () => {
    alert("Заказ звонка отправлен!");
  };

  return (
    <div className="about-page">
      <div className="content">
        <h1>
          Loadstone - это интернет-пространство, где встречаются мода и
          современные технологии.
        </h1>

        <section id="about-us">
          <h2>О Нас</h2>
          <p>
            Добро пожаловать в Loadstone , вашего партнера в стильном и
            высококачественном производстве модной одежды.
          </p>
          <p>
            Торговая марка Loadstone производит и продает различные модели
            стильной и молодежной одежды. Мы заинтересованы в надежных
            региональных партнерах.Мы рады предложить Вашему вниманию коллекции
            от лучших мировых брендов и помочь с выбором идеального гардероба на
            все случаи жизни. А также предоставить для Вас высококлассный
            сервис, быструю доставку и выгодную систему лояльности. Мы с любовью
            создаем одежду из натуральных материалов и аксессуары из экокожи.
            Продукция, выпускаемая нашим предприятием, отличается высоким
            качеством и строгим контролем технологического процесса.
          </p>
        </section>

        <section id="advantages">
          <h2>Преимущества сотрудничества</h2>
          <ul>
            <li>Эксклюзивный ассортимент продукции.</li>
            <li>Гарантированные поставки.</li>
            <li>Высококачественная продукция.</li>
            <li>Полная линейка размеров.</li>
            <li>Еженедельный выпуск новинок.</li>
          </ul>
        </section>

        <section id="strengths">
          <h2>Наши Преимущества</h2>
          <ul>
            <li>
              Собственные производственные мощности - объем производства от
              10,000 единиц в месяц.
            </li>
            <li>Гибкие условия сотрудничества.</li>
            <li>Широкий ассортимент товара.</li>
            <li>Конкурентоспособные оптовые цены и гибкая ценовая политика.</li>
            <li>
              Производство малыми партиями - минимальный заказ от 300 единиц.
            </li>
            <li>Постоянный контроль качества продукции.</li>
            <li>
              Изготовление моделей по образцам клиентов - без дублирования
              моделей в массовом производстве.
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Контактная Информация</h2>
          <p>
            Моб. (Бишкек): +996 (551) 979919
            <br />
            E-mail: loadstone _style@mail.ru
            <br />
            Skype: Loadstone_style
          </p>
        </section>

        <section id="business-hours">
          <h2>Расписание Работы</h2>
          <p>
            Бишкек: понедельник-пятница, 09:00 - 18:00
            <br />
            Москва: понедельник-пятница, 07:00 - 16:00
          </p>
        </section>

        <section id="additional-info">
          <h2>Дополнительная Информация</h2>
          <p>
            +996 (551) 979 919 Менеджер Фарида
            <br />
            Валюта: (вставьте валюту здесь)
            <br />
            <button className="button" onClick={handleButtonClick}>
              Заказать звонок
            </button>
          </p>
        </section>

        <section id="useful-links">
          <h2>Полезные Ссылки</h2>
          <ul>
            <li>
              <a href="#about-us">О Нас</a>
            </li>
            <li>
              <a href="#advantages">Преимущества сотрудничества</a>
            </li>
            <li>
              <a href="#strengths">Наши Преимущества</a>
            </li>
            <li>
              <a href="#contact">Контактная Информация</a>
            </li>
            <li>
              <a href="#business-hours">Расписание Работы</a>
            </li>
            <li>
              <a href="#additional-info">Дополнительная Информация</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
