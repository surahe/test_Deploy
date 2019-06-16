const http = require('http')

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>测试用首页</title>
</head>
<body>
  <h1>测试用首页</h1>
</body>
</html>
`

http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(html)
})
.listen(3000, () => {
  console.log('Server running at 3000')
})