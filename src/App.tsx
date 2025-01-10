import { Avaliacoes } from '@/page/home/avaliacoes';
import Carrossel from './page/home/carrossel';
import Footer from './page/home/footer';
import NavBar from './page/home/navbar';

export default function App() {
  return (
    <div>
      <NavBar />
      <Carrossel />
      <Avaliacoes />
      <Footer />
    </div>
  );
}
