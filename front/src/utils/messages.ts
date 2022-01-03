import { toast } from "react-toastify";

export const success = (message: string) => {
  toast.success(message, { position: "top-right", autoClose: 8000 });
};

export const error = () => {
  toast.error("Wow so easy!", { position: "top-right", autoClose: 8000 });
};
