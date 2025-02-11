import "./sstyle.css";
import dash from "@/app/assets/img/dash.png";
import roman from "@/app/assets/img/roman.png";
import gallery from "@/app/assets/img/gallary.png";
import photo from "@/app/assets/img/photo.png";
import select from "@/app/assets/img/select.png";
import photo1 from "@/app/assets/img/invest1.png";
import photo2 from "@/app/assets/img/invest2.png";
import photo3 from "@/app/assets/img/invest3.png";
import photo4 from "@/app/assets/img/invest4.png";
import photo5 from "@/app/assets/img/photo5.png";
import photo6 from "@/app/assets/img/invest6.png";
import photo7 from "@/app/assets/img/invest5.png";

export default function Till() {
  return (
    <>
      <Kto />
      <Roman />
      <Gallery />
      <Trackers />
      <Partners />
    </>
  );
}

function Kto() {
  return (
    <div className="kto">
      <h2 className="h2kto">Кто мы?</h2>
      <div className="flex">
        <div>
          <img src={dash} alt="" />
        </div>
        <div className="textkto">
          <p>
            <span> INNOMA.VC</span>- Международное аналитическое агентство по
            запуску IT бизнеса на локальных рынках регионов Азии, Ближнего
            Востока, Латинской Америки, Африки.
          </p>
          <p>
            Наша команда состоит из профессионалов своего дела и основной нашей
            целью является помощь IT компаниям получить необходимые знания и
            пакеты документов, чтобы успешно запустить свой продукт на
            международных рынках.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

function Roman() {
  return (
    <div className="roman">
      <div>
        <img src={roman} alt="" />
      </div>
      <div className="p">
        <p>Всем привет! Меня зовут Роман. Последние 6 лет я являюсь частью
          инновационной экосистемы СНГ, прошел путь от проектного менеджера до
          руководителя продукта по автоматизированному скаутингу и скорингу
          стартапов за 6 лет работы я увидел множество ошибок и отсутствие
          ориентации акселерационных программ под запросы стартапов все
          акселераторы выполнялись ради акселераторв и выполнения КПЭ</p>
        <div className="prof">
            <h4>Роман Гайн</h4>
            <p>Основатель INNOMA.VC</p>
        </div>
      </div>
    </div>
  );
}

function Gallery (){
  return <div className="gal">
    <img src={gallery} alt="" />
  </div>
}

function Trackers (){
  return <div className="track">
      <h2>Эксперты и трекеры программы</h2>
      <div className="trflex">
        <img style={{transform:"rotate(-90deg)"}} src={select} alt="" />
        <div>
          <img src={photo} alt="" />
          <h3>Юрий Ким</h3>
          <p>Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
        </div>
        <div>
          <img src={photo} alt="" />
          <h3>Юрий Ким</h3>
          <p>Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
        </div>
        <div>
          <img src={photo} alt="" />
          <h3>Юрий Ким</h3>
          <p>Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
        </div>
        <div>
          <img src={photo} alt="" />
          <h3>Юрий Ким</h3>
          <p>Проведение исследования целевой аудитории позволит сформировать Product market fit</p>
        </div>
        <img style={{transform:"rotate(90deg)"}} src={select} alt="" />
      </div>
  </div>
}

function Partners () {
  return <div className="part">
       <h2>Наши партнеры</h2>
    <div className="flex">
      <img src={photo1} alt="" />
      <img src={photo2} alt="" />
      <img src={photo3} alt="" />
      <img src={photo4} alt="" />
      <img src={photo5} alt="" />
      <img src={photo6} alt="" />
      <img src={photo7} alt="" />
  </div>
</div>
}