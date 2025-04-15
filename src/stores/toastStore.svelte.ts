import { generateSID } from "~/utils/util";

type ToastType =
  "Info" |
  "Success" |
  "Error";

interface IToast {
  id: number | undefined,
  type: ToastType,
  dismissible: boolean,
  timeout: number,
  message: string,
};

let toasts = $state<IToast[]>([]);

export const addToast = (message: string, type: ToastType, dismissible: boolean = true, timeout: number = 3000) => {
  // Create a unique ID so we can easily find/remove it
  // if it is dismissible/has a timeout.
  const id = generateSID();

  // Setup some sensible defaults for a toast.
  const defaults: IToast = {
    id,
    type: "Info",
    dismissible: true,
    timeout: 3000,
    message: "",
  };

  // Push the toast to the top of the list of toasts
  toasts = [{ ...defaults, id, type, dismissible, timeout, message }, ...toasts];

  // If toast is dismissible, dismiss it after "timeout" amount of time.
  if (timeout) setTimeout(() => dismissToast(id), timeout);
};

export const dismissToast = (id: number) => {
  toasts = toasts.filter((t) => t.id != id);
};

export const toastStore = {
  get() {
    return toasts;
  }
};

export type { IToast, ToastType };