import "./price.css";
import analys from "@/app/assets/img/analys.png";
import seting from "@/app/assets/img/seting.png";

export default function Price() {
  return (
    <div className="price">
      <h2 className="prh2">Стоимость</h2>
      <div className="gridprice">
        <div className="div">
          <img src={analys} alt="" />
          <h3>Анализ международных рынков </h3>
          <div className="chto">
            <h4>Что входит в отчет?</h4>
            <li>1. Анализ конкурентов</li>
            <li>2. Анализ инвесторов</li>
            <li>3. Размеры рынка (TAM,SAM,SOM)</li>
            <li>4. Анализ СМИ</li>
            <li>5. Анализ запрос в сети интернет</li>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Готовность</h4>
            <p>7 раб. дней</p>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Язык</h4>
            <p>рус. / англ.</p>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Стоимость</h4>
            <span>$1 000</span>
          </div>
          <button>Оставить заявку</button>
        </div>
        <div className="div">
          <img src={seting} alt="" />
          <h3>Анализ международных рынков </h3>
          <div className="chto">
            <h4>Что входит в отчет?</h4>
            <li>1. Анализ локальных рынков</li>
            <li>2.Бизнес план</li>
            <li>3. Питч презентация</li>
            <li>4. Финансовый план  </li>
            <li>5. Расчет юнит экономики</li>
            <li>6. Проведение каст дева </li>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Готовность</h4>
            <p>7 раб. дней</p>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Язык</h4>
            <p>рус. / англ.</p>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Стоимость</h4>
            <span>$1 000</span>
          </div>
          <button>Оставить заявку</button>
        </div>
        <div className="div">
          <img src={analys} alt="" />
          <h3>Анализ международных рынков </h3>
          <div className="chto">
            <h4>Что входит в отчет?</h4>
            <li>1. Анализ конкурентов</li>
            <li>2. Анализ инвесторов</li>
            <li>3. Размеры рынка (TAM,SAM,SOM)</li>
            <li>4. Анализ СМИ</li>
            <li>5. Анализ запрос в сети интернет</li>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Готовность</h4>
            <p>7 раб. дней</p>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Язык</h4>
            <p>рус. / англ.</p>
          </div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0vh 3vh"}}>
            <h4>Стоимость</h4>
            <span>$1 000</span>
          </div>
          <button>Оставить заявку</button>
        </div>
      </div>
    </div>
  );
}
