export const getContentType = () => ({
	'Content-Type': 'application/json',
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Credentials":"true",
	"Access-Control-Max-Age": "1800",
	"Access-Control-Allow-Headers":"content-type",
	"Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"
	// 'Authorization': 'Client-ID 5unjKQT2GwrriTcCixzfIASi'
})

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message
