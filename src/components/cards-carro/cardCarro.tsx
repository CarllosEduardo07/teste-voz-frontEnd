import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;

interface CardCarroInterface {
  imagem: string;
  modelo: string;
  ano: number;
  km: string;
  potencia: string;
  pontuacao: string;
  iconeAno: IconType;
  iconeKm: IconType;
  iconePotencia: IconType;
  iconePontuacao: IconType;
}

export default function CardCarro({
  imagem,
  modelo,
  ano,
  km,
  potencia,
  pontuacao,
  iconeAno: IconAno,
  iconeKm: IconKm,
  iconePotencia: IconPotencia,
  iconePontuacao: IconPontuacao,
}: CardCarroInterface) {
  return (
    <div>
      <div className='px-8 space-y-5 flex flex-col border-2 border-gray-500/70 rounded-3xl h-[360px] w-[250px]'>
        <div className='mt-8 text-center font-normal text-xl'>
          <img src={imagem} alt={modelo} width={250} height={250} className='-mt-11' />
          <span>{modelo}</span>
        </div>
        <div className='flex items-center'>
          <IconAno />
          <span className='ml-2'>{ano}</span>
        </div>
        <div className='flex items-center'>
          <IconKm />
          <span className='ml-2'>{km}</span>
        </div>
        <div className='flex items-center'>
          <IconPotencia />
          <span className='ml-2'>{potencia}</span>
        </div>
        <div className='flex items-center'>
          <IconPontuacao />
          <span className='ml-2'>{pontuacao}</span>
        </div>

        <button className='w-full px-4 py-2 text-center border-2 border-gray-500 rounded-full hover:bg-zinc-400/80 hover:text-white'>
          <a href='#'>Ver Carro</a>
        </button>
      </div>
    </div>
  );
}
