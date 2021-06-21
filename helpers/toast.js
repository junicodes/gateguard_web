
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toast(type = "default", position = "top-right", message = "Hello hope you are good"){

  const body = {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  }

  console.log(type, position, message)

  switch (type) {
        case "success":
            toast.success(message, body);
          break;

        case "error":
            toast.error(message, body);
        break;
            
        case "info":
            toast.info(message, body);
        break;
            
        case "warning":
            toast.warning(message, body);
        break;

        case "dark":
            toast.dark(message, body);
        break;
      default:
        case "default":
            toast.error(message, body);
          break;
  }

}