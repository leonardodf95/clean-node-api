class LoginRouter {
  route (httpRequest) {
    const { email, password } = httpRequest.body
    if (!email || !password) {
      return {
        statuscode: 400
      }
    }
  }
}

describe('Login router', () => {
  test('Should return 400 if no e-mail is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.status)
  })

  test('Should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com'
      }
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.status)
  })
})
