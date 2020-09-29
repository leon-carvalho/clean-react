export class UnexpectedError extends Error {
  constructor() {
    super('Ops, algo de errado aconteceu. Tente novamente em breve.')

    this.name = 'UnexpectedError'
  }
}
