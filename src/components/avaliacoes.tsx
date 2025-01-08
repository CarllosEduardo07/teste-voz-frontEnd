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
      <section className='flex items-center justify-center space-x-4'>
        {comentarios.map((comentario, index) => (
          <article
            key={comentario.id || index}
            className='w-96 px-6 py-4 space-y-4 rounded-3xl border border-slate-300 shadow-lg'
          >
            <p className='text-xl font-semibold'>{comentario.nome}</p>
            <p className='text-sm text-slate-600 font-medium'>
              {comentario.descricao}
            </p>
          </article>
        ))}
      </section>

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
