import { toast, ToastT } from "sonner";

interface INotificationService {
  success: (msg?: string, config?: ToastT) => void;
  error: (msg?: string, config?: ToastT) => void;
  info: (msg?: string, config?: ToastT) => void;
  warning: (msg?: string, config?: ToastT) => void;
}

class NotificationService implements INotificationService {
  success(msg?: string, config?: ToastT) {
    return toast.success(msg, {
      ...config,
    });
  }
  error(msg?: string, config?: ToastT) {
    return toast.error(msg, {
      ...config,
    });
  }
  info(msg?: string, config?: ToastT) {
    return toast.info(msg, {
      ...config,
    });
  }
  warning(msg?: string, config?: ToastT) {
    return toast.warning(msg, {
      ...config,
    });
  }
}

const notificationService = new NotificationService();

export default notificationService;
