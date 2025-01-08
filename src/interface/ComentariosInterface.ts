import { z } from 'zod';

export const newComentarioSchema = z.object({
  id: z.number(),
  nome: z.string(),
  descricao: z.string().min(3, 'São Obrigatorio pelo menos 3 caracteres'),
});
