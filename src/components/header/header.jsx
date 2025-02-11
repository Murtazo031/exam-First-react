import "./header.css";
import Navbar from "@/components/header/navbar/navbar";
import Content from "@/components/header/content/content";


export default function Header() {
  return (
    <header className="header" style={{backgroundImage:{}}}>
      <Navbar />
      <Content />
    </header>
  );
}
