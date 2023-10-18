import UserDriver, { UserJson } from "../interface/driver/userDriver";

export default class UserDriverImpl implements UserDriver {
  async find(): Promise<UserJson> {
    const res = await fetch("http://localhost:3001/user");
    return await res.json();
  }
}
