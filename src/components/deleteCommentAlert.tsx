import { Trash2 } from 'lucide-react';
import { forwardRef } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';

interface DeleteCommentAlertProps {
  onDelete: VoidFunction;
}
export const DeleteCommentAlert = forwardRef<
  HTMLButtonElement,
  DeleteCommentAlertProps
>(({ onDelete }: any, ref) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          ref={ref}
          type='button'
          className='px-2 py-1 w-full flex items-center gap-2 cursor-pointer hover:bg-slate-100 rounded-sm mt-2'
        >
          <Trash2
            strokeWidth={1.3}
            size={17}
            absoluteStrokeWidth
            className='text-red-600'
          />
          <span className='text-sm text-red-600'>Excluir</span>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você tem certeza que deseja apagar o post?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Apagar o post é uma ação permanente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction className='bg-red-600' onClick={handleDelete}>
            Apagar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});
