export function getRequestDateRange() {
  const now = new Date()
  const end = new Date(now)
  end.setSeconds(0)

  const start = new Date(end)
  start.setHours(start.getHours() - 13)
  start.setMinutes(0)
  start.setSeconds(0)

  const formatDate = (date) => {
    return (
      date.getFullYear() +
      '-' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + date.getDate()).slice(-2) +
      ' ' +
      ('0' + date.getHours()).slice(-2) +
      ':' +
      ('0' + date.getMinutes()).slice(-2) +
      ':' +
      ('0' + date.getSeconds()).slice(-2)
    )
  }

  return `&start=${formatDate(start)}&end=${formatDate(end)}`
}
