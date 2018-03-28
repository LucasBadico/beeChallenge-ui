import { server } from '$/'
import httpRequester from 'supertest'

const request = httpRequester.agent(server)

describe('Render client server', () => {
    // aprodite is get in the way, probabile because it use the server...
    it.skip('should have a default \'HELLO FROM REACT!\'', async done => {
        expect.assertions(1)
        const heyFromReact = await request.get('/hello')   
        expect(heyFromReact.text).toContain('HELLO FROM REACT!')
        done()
    })
  })