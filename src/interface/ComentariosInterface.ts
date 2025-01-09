import { z } from 'zod';

export const newComentarioSchema = z.object({
  id: z.string().optional(),
  nome: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres.'),
  descricao: z
    .string()
    .min(3, 'A descrição precisa ter no mínimo 3 caracteres.'),
});

export type newComentarioData = z.infer<typeof newComentarioSchema>;
