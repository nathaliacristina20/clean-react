import * as axios_http_client from "@/infra/http/axios-http-client/axios-http-client"
// @ponicode
describe("post", () => {
    let inst: any

    beforeEach(() => {
        inst = new axios_http_client.AxiosHttpClient()
    })

    test("0", async () => {
        await inst.post({ url: "www.google.com", body: 30 })
    })

    test("1", async () => {
        await inst.post({ url: "https://accounts.google.com/o/oauth2/revoke?token=%s", body: 380 })
    })

    test("2", async () => {
        await inst.post({ url: "https://croplands.org/app/a/confirm?t=", body: 350 })
    })

    test("3", async () => {
        await inst.post({ url: "Www.GooGle.com", body: 50 })
    })

    test("4", async () => {
        await inst.post({ url: "www.google.com", body: true })
    })

    test("5", async () => {
        await inst.post({ url: "", body: Infinity })
    })
})
