import "./section5.css";
import globus  from "@/app/assets/img/globus.png";
import person  from "@/app/assets/img/person.png";

export default function Section5() {
  return (
    <div className="sec5">
      <h2 className="sec5h2">Об акселераторе IT бизнеса</h2>
      <p className="sec5p">
        Программа акселератора расчитана на 8 недель интенсивного онлайн курса с
        вебинарами приглашенных экспертов по международным рынкам, разборами
        ваших идей и проектов{" "}
      </p>
      <div className="threediv">
        <div>
            <h1>3</h1>
            <p>Месяца обучения</p>
        </div>
        <div>
            <img src={globus} alt="" />
            <p>Приглашенные эксперты</p>
        </div>
        <div>
            <img src={person} alt="" />
            <p>Персональный менеджер</p>
        </div>
      </div>
    </div>
  );
}
