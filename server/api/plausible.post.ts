export default defineEventHandler(async (event) => {
  const body = await readRawBody(event, 'utf-8')
  const headers = getRequestHeaders(event)

  const response = await fetch('https://plausible.io/api/event', {
    method: 'POST',
    body,
    headers: {
      'content-type': headers['content-type'] ?? 'application/json',
      'user-agent': headers['user-agent'] ?? '',
      'x-forwarded-for': headers['x-forwarded-for'] ?? getRequestIP(event) ?? '',
    },
  })

  setResponseStatus(event, response.status)

  return null
})
