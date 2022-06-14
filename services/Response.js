export default class Response {
    constructor(resultRequest) {
        this.status = {
            success: 200,
            badRequest: 400,
            unauthorized: 401,
            forbidden: 403,
            notFound: 404
        }

        this.response = {
            status: (resultRequest.error == null) ? 200 : 400,
            from: null,
            action: {
                controller: "",
                method: "",
                params: {}
            },
            data: resultRequest.data,
            error: resultRequest.error
        }

        this.resultRequest = resultRequest
    }

    setFrom(from) {
        this.response.from = from
    }

    setAction(action) {
        this.response.action.controller = action.controller
        this.response.action.method = action.method
        this.response.action.params = action.params
    }

    setError(error) {
        this.response.error = error
    }

    setStatus() {
        if(this.resultRequest.error == null) {
            this.response.status = this.status.success
        } else {
            this.response.status = this.status.badRequest
        }
    }

    getResponse() {
        return this.response
    }
}