import "./style.css";
import select from "@/app/assets/img/select.png";

export default function Selects() {
    return <div className="selects">
        <h2 className="selh2">Программа акселератора</h2>
        <div className="select">
            <div className="sel">
                <h3>Модуль 1</h3>
                <p>Тенденции и тренды современного мира</p>
                <img src={select} alt="" />
            </div>
            <div>
                <p>Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний</p>
            </div>
            <div>
                <p>Тема 2. Рынки Ближнего Востока, Азии, Латинской АмерикиТема</p>
            </div>
            <div>
                <p> 3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?</p>
            </div>
            <div>
                <p>9 видео роликов, вебинар с приглашенным экспертом</p>
            </div>
            <div className="sel">
                <h3>Модуль 2</h3>
                <p>Бизнес моделирование и поиск Product Market Fit</p>
                <img src={select} alt="" />
            </div>
            <div className="sel">
                <h3>Модуль 3</h3>
                <p>Определение рынка, поиск и исследование Целевой аудитории
                </p>
                <img src={select} alt="" />
            </div>
            <div className="sel">
                <h3>Модуль 4</h3>
                <p>Что такое MVP и почему это важно</p>
                <img src={select} alt="" />
            </div>
            <div className="sel">
                <h3>Модуль 5</h3>
                <p>Unit экономика и финансовое моделирование</p>
                <img src={select} alt="" />
            </div>
            <div className="sel">
                <h3>Модуль 6</h3>
                <p>Что такое дорожная карта продукта?</p>
                <img src={select} alt="" />
            </div>
            <div className="sel">
                <h3>Модуль 7</h3>
                <p>Документы дя международных инвесторов</p>
                <img src={select} alt="" />
            </div>
            <div className="sel">
                <h3>Модуль 8</h3>
                <p>Открытие юридического лица. Возможности для стартапов
                </p>
                <img src={select} alt="" />
            </div>
            <div className="sel">
                <h3>Демо день </h3>
            </div>
            
        </div>
        <button className="btnsel">Получить полную программу</button>
    </div>
}