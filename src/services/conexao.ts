import { ComentarioInterface } from '@/interface/ComentariosInterface';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getComentarios = async () => {
  const response = await api.get('/comentarios');
  return response.data;
};

export const createComentarios = async (newComentario: ComentarioInterface) => {
  const response = await api.post('/comentarios', newComentario);
  return response.data;
};

export const updateComentarios = async (
  updateComentario: ComentarioInterface,
) => {
  const response = await api.put(
    `/comentarios/${updateComentario.id}`,
    updateComentario,
  );
  return response.data;
};

export const deleteComentarios = async (id: number) => {
  try {
    const response = await api.delete(`/comentarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar o comentario', error);
  }
};
