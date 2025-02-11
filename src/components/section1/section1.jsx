import "./section1.css";
import Desc from "@/components/section1/description/desc";
import Desc1 from "@/components/section1/description1/desc1";
import Image from "@/components/section1/image/image";
import Image1 from "@/components/section1/image1/image1";


export default function Section1() {
  return (
    <> 
      <h2 className="h2">Наши услуги</h2>
      <div className="section1">
        <Desc />
        <Image />
      </div>
      <div className="section1 section11">
        <Image1 />
        <Desc1/>
      </div>
    </>
  );
}
