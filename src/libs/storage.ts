import { Storage } from "@ionic/storage";

const localStorage = new Storage();
localStorage.create();

const storage = {
  setItem: async (i: string, v: string): Promise<any> => {
    await localStorage.set(i, v);
  },
  getItem(i: string): Promise<any> {
    return localStorage.get(i);
  },
  removeItem: async (i: string): Promise<any> => {
    await localStorage.remove(i);
  },
  clear: async (): Promise<any> => {
    await localStorage.clear();
  },
};

export default storage;
