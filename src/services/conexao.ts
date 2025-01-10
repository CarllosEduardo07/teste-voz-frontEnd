import { newCommentData } from '@/interface/newCommentSchema';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getComments = async (): Promise<newCommentData[]> => {
  const response = await api.get('/comentarios');
  return response.data;
};

export const createComment = async (
  newComment: newCommentData,
): Promise<newCommentData> => {
  const response = await api.post('/comentarios', newComment);
  return response.data;
};

export const updateComment = async (
  updateComment: newCommentData,
): Promise<newCommentData> => {
  const response = await api.put(
    `/comentarios/${updateComment.id}`,
    updateComment,
  );
  return response.data;
};

export const deleteComment = async (id: string) => {
  try {
    const response = await api.delete(`/comentarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar o comentario', error);
  }
};
