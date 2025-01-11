import { newCommentData } from '@/interface/newCommentSchema';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const getComments = async (): Promise<newCommentData[]> => {
  try {
    const response = await api.get('/comentarios');
    return response.data;
  } catch (error) {
    console.log('Erro ao carragar os dados do servidor', error);
    return [];
  }
};

export const createComment = async (
  newComment: newCommentData,
): Promise<newCommentData> => {
  try {
    const response = await api.post('/comentarios', newComment);
    return response.data;
  } catch (error) {
    console.log(
      'Erro ao enviar os dados do novo comentário para o servidor.',
      error,
    );
    throw error;
  }
};

export const updateComment = async (
  updateComment: newCommentData,
): Promise<newCommentData> => {
  try {
    const response = await api.put(
      `/comentarios/${updateComment.id}`,
      updateComment,
    );
    return response.data;
  } catch (error) {
    console.log('Erro ao enviar os dados atualizados para o servidor.', error);
    throw error;
  }
};

export const deleteComment = async (id: string) => {
  try {
    const response = await api.delete(`/comentarios/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao Deletar o comentário  no servidor.', error);
    throw error;
  }
};
