import { Menu, User } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className='relative md:absolute z-10 md:w-full'>
        {/* Menu Desktop */}
        <nav className='hidden py-4 md:flex md:items-center md:flex-row md:justify-around md:text-white bg-transparent'>
          <img
            src={logo}
            alt='logo'
            width={60}
            height={60}
            className='cursor-pointer'
          />

          <ul className='flex flex-col space-y-6 items-center justify-center md:flex-row md:items-center md:space-y-0 md:space-x-20 lg:space-x-28'>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Home
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Tabela
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-400'>
                Fale Conosco
              </a>
            </li>
          </ul>

          <div className='flex gap-8'>
            <a href='#' className='hover:text-gray-400'>
              Entrar
            </a>
            <User className='text-white' />
          </div>
        </nav>

        {/* Botão do Menu Mobile */}
        <Menu
          size={52}
          className='absolute top-4 right-6 text-white md:hidden block text-5xl cursor-pointer'
          onClick={handleMenuOpen}
        />
        <div
          className={`lg:hidden absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-2 font-semibold text-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <li className='list-none w-full text-center p-4 hover:bg-zinc-500 hover:text-white transition-all'>
            Home
          </li>
          <li className='list-none w-full text-center p-4 hover:bg-zinc-500 hover:text-white transition-all'>
            Sobre
          </li>
          <li className='list-none w-full text-center p-4 hover:bg-zinc-500 hover:text-white transition-all'>
            Tabela
          </li>
          <li className='list-none w-full text-center p-4 hover:bg-zinc-500 hover:text-white transition-all'>
            Fale Conosco
          </li>
          <li className='list-none gap-4 flex items-center justify-center w-full text-center p-4 hover:bg-zinc-500 hover:text-white transition-all'>
            Entra
            <User className='text-black' />
          </li>
        </div>
      </div>
      <div className="bg-[url('./assets/background11.png')] mb-4 w-full h-[350px] md:h-screen bg-cover bg-center bg-no-repeat clip-bottom-arc z-10"></div>
    </div>
  );
}
