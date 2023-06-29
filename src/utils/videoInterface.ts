export interface video {
  id: number;
  thumbnail: string;
  url: string;
  title: string;
  description: string;
}

export interface ModalType {
  id: number;
  thumbnail: string;
  url: string;
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}
