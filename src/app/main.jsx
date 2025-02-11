import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Header from '@/components/header/header';
import Section1 from '@/components/section1/section1';
import Who from '@/components/Who`sAreFor/who';
import Sec3 from '@/components/section3/sec3';
import Section4 from '@/components/section4/section4';
import Section5 from '@/components/section5/section5';
import Play from '@/components/play/play';
import Selects from '@/components/selects/selects';
import Invest from '@/components/invest/invest';
import Section9 from '@/components/section9/section9';
import Price from '@/components/price/price';
import Till from '@/components/tillfooter/tillfooter';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Section1/>
    <Who/>
    <Sec3/>
    <Section4/>
    <Section5/>
    <Play/>
    <Selects/>
    <Invest/>
    <Section9/>
    <Price/>
    <Till/>
  </StrictMode>,
)
