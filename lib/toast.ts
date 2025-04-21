import { toast } from "sonner";

export class ShowToast {
  public message: string;
  public description: string;
  constructor(message: string, description: string) {
    this.message = message;
    this.description = description;
  }
  static success(message: string, description?: string) {
    return toast.message(message, {
      description,
      position: "top-right",
      duration: 2000,
      style: {
        color: "green",
      },
    });
  }
  static error(message: string, description?: string) {
    return toast.error(message, {
      description,

      position: "top-right",
      duration: 2000,
      style: {
        color: "red",
      },
    });
  }

  static info(message: string, description?: string) {
    return toast.info(message, {
      description,
      position: "top-right",
      duration: 2000,
      style: {
        color: "blue",
      },
    });
  }
}
