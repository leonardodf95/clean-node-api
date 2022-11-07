class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email) {
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
})
