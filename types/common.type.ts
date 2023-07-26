export interface CommonResponse<D = any> {
  data: D | null;
  httpStatusCode: number;
  message: string | null;
}

// api response nếu status success thì có data còn status error thì có  message
export type ApiResponse<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

const ApiError: ApiResponse<number> = {
  status: "error",
  message: "Có lỗi say ra vui lòng thử lại",
};

const ApiSuccess: ApiResponse<number> = {
  status: "success",
  data: 222,
};

type Man = {
  gender: "man";
  isMan: boolean;
};
type FeMan = {
  gender: "feman";
  isFeMan: boolean;
};

// kiểu user nếu gender là man thì có isMan còn nếu gender là nữ thì có isFeman
type User = {
  name: string;
} & (Man | FeMan);

const man: User = {
  gender: "man",
  isMan: true,
  name: "duong",
};

const feman: User = {
  gender: "feman",
  isFeMan: true,
  name: "duong",
};
