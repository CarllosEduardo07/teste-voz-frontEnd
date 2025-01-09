import { ApagarPostAlert } from '@/components/apagarComentaioAlert';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  newComentarioData,
  newComentarioSchema,
} from '@/interface/ComentariosInterface';
import {
  createComentarios,
  deleteComentarios,
  getComentarios,
} from '@/services/conexao';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilePenLine } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export function Avaliacoes() {
  const [comentarios, setComentarios] = useState<newComentarioData[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<newComentarioData>({
    resolver: zodResolver(newComentarioSchema),
    mode: 'onChange',
  });

  //create comentario
  const handleCreateComentario = async (data: newComentarioData) => {
    const validatedData = newComentarioSchema.parse(data); // Valida os dados usando Zod

    try {
      const response = await createComentarios(validatedData);

      const newComentario: newComentarioData = {
        nome: response.nome,
        descricao: response.descricao,
      };

      //enviando comentario para o jsonserver
      setComentarios(prevComentario => [...prevComentario, newComentario]);
      reset();
      console.log(`Comentário criado com sucesso!`);
    } catch (error) {
      console.log(`Erro Ao criar o comentario`, error);
    }
  };

  //delete comentario
  const handleDelete = async (id?: string) => {
    if (!id) {
      console.error('ID do comentário não está definido.');
      return;
    }

    try {
      await deleteComentarios(id);

      //atualizar a lista depois que o comentario for removido
      setComentarios(prevComentarios =>
        prevComentarios.filter(comentario => comentario.id !== id),
      );
      console.log(`Comentário com id ${id} deletado com sucesso!`);
    } catch (error) {
      console.error('Erro ao deletar o comentário:', error);
    }
  };

  useEffect(() => {
    const fetchListComentarios = async () => {
      try {
        const fetchedComentarios = await getComentarios();
        setComentarios(fetchedComentarios);
      } catch (error) {
        console.log('Erro ao pega os dados', error);
      }
    };

    fetchListComentarios();
  }, [comentarios]);

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
                <Card className='rounded-3xl h-60 relative'>
                  <DropdownMenu>
                    <DropdownMenuTrigger className='absolute top-4 right-4 flex items-center'>
                      <FilePenLine size={18} className='text-gray-500' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Opções</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <FilePenLine />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          {/* passando a função para outro componente */}
                          <ApagarPostAlert
                            onDelete={() => handleDelete(comentario.id)}
                          />
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
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

        <form
          onSubmit={handleSubmit(handleCreateComentario)}
          className='flex flex-col items-end space-y-2'
        >
          <input
            type='text'
            placeholder='Digite seu Nome'
            className='w-full py-1.5 px-2 border-2 border-zinc-400 rounded-lg'
            autoComplete='off'
            {...register('nome')}
          />
          {errors.nome && <p className='text-red-500'>{errors.nome.message}</p>}

          <textarea
            className='py-1.5 px-2 border-2 border-zinc-400 rounded-lg min-h-16 max-h-28'
            rows={2}
            cols={50}
            placeholder='Descrição'
            autoComplete='off'
            {...register('descricao')}
          />
          {errors.descricao && (
            <p className='text-red-500'>{errors.descricao.message}</p>
          )}

          <button className='w-28 py-2 px-4 rounded-lg font-semibold bg-zinc-900 text-white hover:bg-zinc-700'>
            Enviar
          </button>
        </form>
      </article>
    </section>
  );
}
