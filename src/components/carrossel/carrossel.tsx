import { CalendarDays, Gauge, Users, Zap } from 'lucide-react';
import carros1 from '../../assets/cardsCarros/carro1.png';
import carros2 from '../../assets/cardsCarros/carro2.png';
import carros3 from '../../assets/cardsCarros/carro3.png';
import carros4 from '../../assets/cardsCarros/carro4.png';
import carros5 from '../../assets/cardsCarros/carro5.png';
import carros6 from '../../assets/cardsCarros/carro6.png';
import CardCarro from '../cards-carro/cardCarro';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../carrossel/styles.css';

import { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Carrossel() {
  const [slidePreView, setSlidePreView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 600) {
        setSlidePreView(1);
      } else if (window.innerWidth < 775) {
        setSlidePreView(2);
      } else {
        setSlidePreView(3);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=''>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={0}
        slidesPerView={slidePreView}
        navigation
        scrollbar={{ draggable: true }}
        className='mySwiper ml-24 md:ml-auto md:w-[800px] lg:w-[900px] pb-6'
      >
        <SwiperSlide>
          <CardCarro imagem={carros1} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km='180 km/h' iconeKm={Gauge} potencia='9/10' iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />
        </SwiperSlide>

        <SwiperSlide>
          <CardCarro imagem={carros2} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km='180 km/h' iconeKm={Gauge} potencia='9/10' iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />
        </SwiperSlide>

        <SwiperSlide>
          <CardCarro imagem={carros3} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km='180 km/h' iconeKm={Gauge} potencia='9/10' iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />
        </SwiperSlide>
        <SwiperSlide>
          <CardCarro imagem={carros4} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km='180 km/h' iconeKm={Gauge} potencia='9/10' iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />
        </SwiperSlide>
        <SwiperSlide>
          <CardCarro imagem={carros5} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km='180 km/h' iconeKm={Gauge} potencia='9/10' iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />
        </SwiperSlide>
        <SwiperSlide>
          <CardCarro imagem={carros6} modelo='Mustang' ano={2015} iconeAno={CalendarDays} km='180 km/h' iconeKm={Gauge} potencia='9/10' iconePotencia={Zap} pontuacao='8/10' iconePontuacao={Users} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
