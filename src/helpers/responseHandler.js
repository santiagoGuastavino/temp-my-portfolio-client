function responseHandler (code, message, callback, data) {
  if (code >= 200 && code < 300) {
    data = message
    return {
      status: code,
      message: 'Success.',
      data
    }
  } else {
    const err = new Error(message)
    err.code = code
    return callback(err)
  }
}

module.exports = { responseHandler }
