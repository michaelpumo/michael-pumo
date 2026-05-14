export default defineEventHandler(async (event) => {
  const body = await readRawBody(event)
  const headers = getRequestHeaders(event)

  await $fetch('https://plausible.io/api/event', {
    method: 'POST',
    body,
    headers: {
      'content-type': headers['content-type'] ?? 'application/json',
      'user-agent': headers['user-agent'] ?? '',
      'x-forwarded-for': headers['x-forwarded-for'] ?? getRequestIP(event) ?? '',
    },
    ignoreResponseError: true,
  })

  setResponseStatus(event, 202)

  return null
})
