import "./section4.css";
import fatima from "@/app/assets/img/fatima.png";
import arrow from "@/app/assets/img/arrow.png";

export default function Section4() {
  return (
    <div className="section4">
      <h2 className="sec4h2">С какими рынками мы работаем?</h2>
      <div className="region">
        <p className="bg">Ближний восток</p>
        <p>Азия</p>
        <p>Латинская Америка</p>
        <p>Африка</p>
      </div>
      <div className="statistic">
        <div className="right">
          <h2>
            Чем интересен <br />
            <span style={{color:"#07AF91"}}>Рынок MENA:</span>
          </h2>
          <p>
            ОАЭ, Саудовская Аравия, Израиль, Оман, Бахрейн, Катар, Тунис, Йемен,
            Египет, Алжир
          </p>
          <button>Выйти на рынок</button>
          <div className="fatima">
            <img src={fatima} alt="" />
            <div>
                <h4>Фатима</h4>
                <p>Менеджер по MENA</p>
            </div>
          </div>
        </div>
        <div className="left">
            <div>
                <h1> {">"}5,5 Млрд</h1>
                <p>Инвестиции pre-seed, seed</p>
            </div>
            <div>
                <h1>{">"} 300</h1>
                <p>Акселераторов, инкубаторов</p>
            </div>
            <div>
                <h1>73</h1>
                <p>Венчурных фонда</p>
            </div>
            <div className="arrow">
                <img src={arrow} alt="" />
                <p>Скачать отчет
                по рынку MENA</p>
            </div>
        </div>
      </div>
    </div>
  );
}
