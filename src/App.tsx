import { Avaliacoes } from '@/components/avaliacoes';
import Carrossel from './components/carrossel/carrossel';
import Footer from './components/footer/footer';
import NavBar from './components/header/navbar';

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
