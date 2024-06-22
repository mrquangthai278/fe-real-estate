import HttpFactory from "../factory";

class AuthModule extends HttpFactory {
  private RESOURCE = "/articles";

  async create(account: any): Promise<any> {
    return await this.call<any>("GET", `${this.RESOURCE}`);
  }
}

export default AuthModule;
