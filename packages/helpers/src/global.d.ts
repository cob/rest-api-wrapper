declare global {
  interface CoB {
    app?: CobApp
  }

  interface CobApp {
    getCurrentLoggedInUser(): string
    getGroups(): Array<string>
  }

  let cob: CoB | undefined
}

export {}
