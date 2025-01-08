import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ComentarioInterface } from '@/interface/ComentariosInterface';
import { getComentarios } from '@/services/conexao';
import { useEffect, useState } from 'react';

export function Avaliacoes() {
  const [comentarios, setComentarios] = useState<ComentarioInterface[]>([]);

  useEffect(() => {
    const fetchListComentarios = async () => {
      const fetchedComentarios = await getComentarios();
      setComentarios(fetchedComentarios);
    };

    fetchListComentarios();
  }, []);

  return (
    <section className='p-5'>
      <h1 className='my-5 text-center text-3xl font-semibold'>
        Comentários dos Clientes
      </h1>
      {/* comentario */}
      <div className='flex items-center justify-center'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-4xl mx-auto'
        >
          <CarouselContent>
            {comentarios.map((comentario, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                <Card className='rounded-3xl h-60'>
                  <CardContent className='items-center justify-start p-6'>
                    <div className='text-xl font-semibold'>
                      <p>{comentario.nome}</p>
                    </div>
                    <div className='py-2 pr-5 text-justify text-sm text-slate-600 font-medium break-words whitespace-normal overflow-y-auto max-h-40'>
                      {comentario.descricao}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <article className='flex flex-col items-center'>
        <h2 className='mt-10 text-xl font-semibold mb-3 text-center'>
          Deixe seu comentário
        </h2>

        <form className='flex flex-col items-end space-y-2'>
          <input
            type='text'
            placeholder='Digite seu Nome'
            className='w-full py-1.5 px-2 border-2 border-zinc-400 rounded-lg'
          />
          <textarea
            className='py-1.5 px-2 border-2 border-zinc-400 rounded-lg min-h-16 max-h-28'
            rows={2}
            cols={50}
            placeholder='Compartilhe sua experiência...'
          />
          <button className='w-28 py-2 px-4 rounded-lg font-semibold bg-zinc-900 text-white hover:bg-zinc-700'>
            Enviar
          </button>
        </form>
      </article>
    </section>
  );
}
