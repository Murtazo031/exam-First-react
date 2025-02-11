import "./play.css" ;
import play from "@/app/assets/img/play.png";

export default function Play (){
    return <div className="play">
        <p>Об акселерационной программе</p>
        <img src={play} alt="" />
    </div>
}