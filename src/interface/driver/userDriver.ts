export default interface UserDriver {
  find(): Promise<UserJson>;
}

export type UserJson = {
  id: number;
  name: string;
  createdAt: string;
};
