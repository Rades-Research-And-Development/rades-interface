import create from "zustand";

export type IModalPopup = {
  oauthModal: boolean;
};

const useModalPopup = create<IModalPopup>(() => ({
  oauthModal: false,
}));
export default useModalPopup;
