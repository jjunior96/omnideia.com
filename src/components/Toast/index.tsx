import { ToastMessageProps } from 'hooks/toast/types';
import 'react-toastify/dist/ReactToastify.css';

import * as S from './styles';

export type ToastProps = {
  messages: ToastMessageProps[];
};

const Toast = ({ messages }: ToastProps) => {
  // switch (messages[0].type) {
  //   case 'success':
  //     toast.success(messages[0].title);
  //     break;
  //   case 'warning':
  //     toast.warn(messages[0].title);
  //     break;
  //   case 'error':
  //     toast.error(messages[0].title);
  //     break;
  //   default:
  //     toast.info(messages[0].title);
  // }

  return (
    <>
      {messages.map((item) => (
        <S.Toast key={item.id} />
      ))}
    </>
  );
};

export default Toast;
