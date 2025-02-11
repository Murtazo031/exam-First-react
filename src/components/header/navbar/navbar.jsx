import "./navbar.css";
import menu from "@/app/assets/img/menu.png";
import Logo from "@/components/header/navbar/logo/logo";
import Pages from "@/components/header/navbar/pages/pages";
import Enter from "@/components/header/navbar/enter/enter";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Pages />
      <div style={{display:"flex",gap:"2vh"}}>
      <Enter />
      <img className="img" style={{backgroundColor:"white",padding:"2vh",borderRadius:"4px"}} src={menu} alt="" />
      </div>
    </div>
  );
}
