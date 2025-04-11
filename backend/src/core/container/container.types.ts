/**
 * InversifyJS need to use the type as identifiers at runtime.
 * We use symbols as identifiers but you can also use classes and or string literals.
 */
export default {
  //user
  UserService: Symbol('UserService'),
  UserController: Symbol('UserController'),
  UserRepository: Symbol('UserRepository'),

  //Shortener
  ShortenerService: Symbol('ShortenerService'),
  ShortenerController: Symbol('ShortenerController'),
  ShortenerRepository: Symbol('ShortenerRepository'),

  // external
  TokenService: Symbol('TokenService'),
};
