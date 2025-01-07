import { User } from 'lucide-react';
import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <div className="bg-[url('./assets/background.png')] lg:bg-[url('./assets/background1.png')] mb-4 w-full h-[600px] md:h-screen bg-cover bg-center md:bg-center lg:bg-bottom clip-bottom-arc">
      <nav className='py-4 flex flex-col items-center md:flex md:flex-row md:items-center justify-around text-white bg-transparent '>
        <img src={logo} alt='logo' width={60} height={60} className='cursor-pointer' />

        <ul className='flex flex-col space-y-6 items-center justify-center md:flex md:flex-row md:items-center md:space-x-28 '>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Sobre
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Tabela
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Fale Conosco
            </a>
          </li>
        </ul>

        <div className='flex gap-8'>
          <a href='#' className='hover:text-gray-400 '>
            Entrar
          </a>
          <User className='text-white' />
        </div>
      </nav>
    </div>
  );
}
