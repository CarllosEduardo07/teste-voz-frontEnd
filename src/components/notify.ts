import { toast } from 'react-toastify';

export const notify = (
  message: string,
  type: 'success' | 'info' | 'warning' | 'error',
) => {
  switch (type) {
    case 'success':
      toast.success(message, { autoClose: 2000, position: 'top-right' });
      break;
    case 'info':
      toast.info(message, { autoClose: 2000, position: 'top-right' });
      break;
    case 'warning':
      toast.warning(message, { autoClose: 2000, position: 'top-right' });
      break;
    case 'error':
      toast.error(message, { autoClose: 2000, position: 'top-right' });
      break;
    default:
      toast(message, { autoClose: 2000, position: 'top-right' });
  }
};
