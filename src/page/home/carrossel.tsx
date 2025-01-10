import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { CalendarDays, Gauge, Users, Zap } from 'lucide-react';

import carros1 from '../../assets/cardsCarros/carro1.png';
import carros2 from '../../assets/cardsCarros/carro2.png';
import carros3 from '../../assets/cardsCarros/carro3.png';
import carros4 from '../../assets/cardsCarros/carro4.png';
import carros5 from '../../assets/cardsCarros/carro5.png';
import carros6 from '../../assets/cardsCarros/carro6.png';

const images = [carros1, carros2, carros3, carros4, carros5, carros6];

export default function Carrossel() {
  return (
    <div className='flex items-center justify-center'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-[250px] md:max-w-xl lg:max-w-4xl mx-auto'
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card className='rounded-3xl'>
                  <CardContent className='bg-[#EBEFF2] aspect-square items-center justify-start border border-[#1D2527] rounded-3xl'>
                    <div className='flex justify-center'>
                      <img
                        src={image}
                        alt={`Imagem ${index + 1}`}
                        className='w-44 h-auto'
                      />
                    </div>
                    <div className='px-4 space-y-5 flex flex-col'>
                      <p className='mt-2 text-center font-normal text-xl'>
                        Mustang
                      </p>
                      <div className='flex items-center'>
                        <CalendarDays />
                        <span className='ml-2'>2015</span>
                      </div>
                      <div className='flex items-center'>
                        <Gauge />
                        <span className='ml-2'>180 Km/h</span>
                      </div>
                      <div className='flex items-center'>
                        <Zap />
                        <span className='ml-2'>9/10</span>
                      </div>
                      <div className='flex items-center'>
                        <Users />
                        <span className='ml-2'>8/10</span>
                      </div>
                      <button className='w-full px-4 py-2 text-center border-2 border-gray-500 rounded-full hover:bg-zinc-400/80 hover:text-white'>
                        <a href='#'>Ver Carro</a>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
