import { Reviews } from '@/page/home/reviews';
import Carrossel from './page/home/carrossel';
import Footer from './page/home/footer';
import Header from './page/home/header';

export default function App() {
  return (
    <div className='bg-[#EBEFF2]'>
      <Header />
      <Carrossel />
      <Reviews />
      <Footer />
    </div>
  );
}
