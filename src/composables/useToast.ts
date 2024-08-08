import { storeToRefs } from "pinia";
import { useToastStore } from "@/store/toast";
import { toast } from "vue3-toastify";

export default function useToast() {
  const { currToastId } = storeToRefs(useToastStore());

  const removeCurrToast = () => {
    if (currToastId.value) {
      toast.remove(currToastId.value);
      currToastId.value = null;
    }
  };

  const setErrorToast = (msg: string) => {
    const errorToastId = toast(msg, {
      type: "error",
      position: toast.POSITION.BOTTOM_CENTER,
      closeOnClick: false,
    });
    currToastId.value = errorToastId;
  };

  return { removeCurrToast, setErrorToast };
}
