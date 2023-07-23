import BaseService from "@/lib/axios/BaseService";

const endPoint = {
  base: "auth",
};
class AuthService extends BaseService {
  constructor() {
    super();
    this.baseEndPoint = endPoint.base;
  }
}

const authService = new AuthService();

export default authService;
