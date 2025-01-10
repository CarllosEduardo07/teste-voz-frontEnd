import { Reviews } from '@/page/home/reviews';
import Carrossel from './page/home/carrossel';
import Footer from './page/home/footer';
import NavBar from './page/home/navbar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Carrossel />
      <Reviews />
      <Footer />
    </div>
  );
}
