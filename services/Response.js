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
            status: null,
            action: {
                controller: "",
                method: "",
                params: {}
            },
            data: {},
            error: {}
        }

        this.resultRequest = resultRequest
    }

    setError(error) {
        this.response.error = error
    }

    setStatus() {
        if(this.resultRequest.success) {
            this.response.status = this.status.success
        } else {
            this.response.status = this.status.badRequest
        }
    }
}