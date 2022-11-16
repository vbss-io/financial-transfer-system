import * as bcrypt from 'bcryptjs';

export default class Bcrypt {
  public static salt = 10;

  public static hash(password: string): string {
    return bcrypt.hashSync(password, Bcrypt.salt);
  }

  public static compare(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}