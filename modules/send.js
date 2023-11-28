export const sendData = (res, data) => {
  console.log(data)
  res.writeHead(200, {
    "Content-Type": "text/json; charset=utf-8"
  });
  res.end(JSON.stringify(data))
}

export const sendError = (res, statusCode, errMessage) => {
  res.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
  })
  res.end(errMessage);
}