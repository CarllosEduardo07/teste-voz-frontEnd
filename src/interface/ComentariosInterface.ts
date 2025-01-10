import { nanoid } from 'nanoid';
import { z } from 'zod';

export const newComentarioSchema = z.object({
  id: z.string().default(() => nanoid()),
  nome: z.string().min(3, 'O nome precisa ter no mínimo 3 caracteres.').trim(),
  descricao: z
    .string()
    .trim()
    .min(3, 'A descrição precisa ter no mínimo 3 caracteres.'),
});

export type newComentarioData = z.infer<typeof newComentarioSchema>;
