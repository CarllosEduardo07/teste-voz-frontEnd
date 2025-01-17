import { DeleteCommentAlert } from '@/components/deleteCommentAlert';
import { notify } from '@/components/notify';
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
import { newCommentData, newCommentSchema } from '@/interface/newCommentSchema';
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from '@/services/conexao';
import { zodResolver } from '@hookform/resolvers/zod';
import { FilePenLine } from 'lucide-react';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';

export function Reviews() {
  const [comments, setComments] = useState<newCommentData[]>([]);
  const [editComment, setEditComment] = useState<newCommentData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<newCommentData>({
    resolver: zodResolver(newCommentSchema),
    mode: 'onChange',
  });

  //create comentario
  const handleCreateComment = async (data: newCommentData) => {
    try {
      const validatedData = newCommentSchema.parse(data); // Valida os dados usando Zod
      const response = await createComment(validatedData);

      const newComment: newCommentData = {
        id: response.id,
        nome: response.nome,
        descricao: response.descricao,
      };

      //enviando e atualizando o comentario para o jsonserver
      setComments(prevComment => [...prevComment, newComment]);
      reset();
      notify('Comentário criado com sucesso!', 'success');
    } catch (error) {
      console.log('Erro ao criar o comentário !', error);
      notify('Erro ao criar o comentario!', 'error');
    }
  };

  // Editar comentario: iniciar a edição
  const startEditingComment = (comentario: newCommentData) => {
    setEditComment(comentario);
    // Atualiza os campos manualmente
    setValue('id', comentario.id);
    setValue('nome', comentario.nome);
    setValue('descricao', comentario.descricao);
  };

  const handleUpdateComment = async (data: newCommentData) => {
    try {
      const updatedComment = await updateComment(data);

      setComments(prevComments =>
        prevComments.map(comentario =>
          comentario.id === updatedComment.id ? updatedComment : comentario,
        ),
      );
      setEditComment(null); // finaliza a edição
      reset();
      notify(`Comentário atualizado com sucesso!`, 'info');
    } catch (error) {
      console.error('Erro ao atualizar o comentário:', error);
      notify('Erro ao atualizar o comentário!', 'error');
    }
  };

  //delete comentario
  const handleDelete = async (id: string) => {
    try {
      await deleteComment(id);

      setComments(prevComments =>
        prevComments.filter(comentario => comentario.id !== id),
      );
      notify('Comentário deletado com sucesso!', 'warning');
    } catch (error) {
      console.error('Erro ao deletar o comentário:', error);
      notify('Erro ao deletar o comentário:', 'error');
    }
  };

  useEffect(() => {
    const fetchListComments = async () => {
      try {
        const fetchedComments = await getComments();

        setComments(fetchedComments);
      } catch (error) {
        console.log('Erro ao lista os dados!', error);
      }
    };

    fetchListComments();
  }, [editComment]);

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
          className='w-full max-w-[250px] md:max-w-xl lg:max-w-4xl mx-auto'
        >
          <CarouselContent>
            {comments.map((comment, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                <Card className='rounded-3xl h-60 relative'>
                  <DropdownMenu>
                    <DropdownMenuTrigger className='absolute top-4 right-4 flex items-center'>
                      <FilePenLine size={18} className='text-gray-500' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Opções</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => startEditingComment(comment)}
                        >
                          <FilePenLine />
                          <span>Editar</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          {/* passando a função para outro componente para deletar */}
                          <DeleteCommentAlert
                            onDelete={() => handleDelete(comment.id)}
                          />
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <CardContent className='items-center justify-start p-6'>
                    <div className='text-xl font-semibold'>
                      <p>{comment.nome}</p>
                    </div>
                    <div className='py-2 pr-5 text-justify text-sm text-slate-600 font-medium break-words whitespace-normal overflow-y-auto max-h-40'>
                      {comment.descricao}
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
          {editComment ? ' Atualize seu comentário' : ' Deixe seu comentário'}
        </h2>

        <form
          onSubmit={handleSubmit(
            editComment ? handleUpdateComment : handleCreateComment,
          )}
          className='flex flex-col items-center space-y-2'
        >
          <input
            type='text'
            placeholder='Digite seu Nome'
            className='w-[80%] md:w-full py-1.5 px-2 border-2 border-zinc-400 rounded-lg'
            autoComplete='off'
            {...register('nome')}
          />
          {errors.nome && <p className='text-red-500'>{errors.nome.message}</p>}

          <textarea
            className='w-[80%] md:w-full py-1.5 px-2 border-2 border-zinc-400 rounded-lg min-h-16 max-h-28'
            rows={2}
            cols={50}
            placeholder='Descrição'
            autoComplete='off'
            {...register('descricao')}
          />
          {errors.descricao && (
            <p className='text-red-500'>{errors.descricao.message}</p>
          )}

          <div className='w-[80%] md:w-full flex space-x-4 justify-end'>
            <button
              type='button'
              onClick={() => {
                reset();
              }}
              className='w-28 py-2 px-4 rounded-lg font-semibold bg-white text-black hover:bg-zinc-200 border border-zinc-300'
            >
              Cancelar
            </button>

            <button
              type='submit'
              className='w-28 py-2 px-4 rounded-lg font-semibold bg-zinc-900 text-white hover:bg-zinc-700'
            >
              {editComment ? 'Atualizar' : 'Enviar'}
            </button>
          </div>
          <ToastContainer />
        </form>
      </article>
    </section>
  );
}
