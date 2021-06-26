export interface TypeURI {
  data: string;
  fileName: null | string;
  fileSize: number;
  height: number;
  isVertical: boolean;
  origURL: string;
  type: string;
  uri: string;
  width: number;
}

export interface ImageError {
  label: string;
  message: string;
}

export interface PhotoBlockProps {
  canAdd: boolean;
  disabledDrag: boolean;
  disabledReSorted: boolean;
  id: number;
  key: string;
  name: string;
  uri?: TypeURI | string;
  errors: string[];
  invalids: string[];
  primaryInvalids: string[];
  primary: boolean;
  approved: boolean;
  apiID: number | null;
  default: boolean;
  spinner?: boolean;
}

interface ImgUploadErrors {
  errors: string[];
  invalids: string[];
  primary_invalids: string[];
}

export interface ImageResponse {
  approved: boolean;
  id: number;
  position: number;
  primary: boolean;
  errors: string[];
  invalids: string[];
  primary_invalids: string[];
  default: boolean;
}

export interface DatePickerModalProps {
  visible: boolean;
  date: string;
  setDateValue: (data: boolean, param?: boolean) => void;
  setDate: (data: Date) => void;
}
