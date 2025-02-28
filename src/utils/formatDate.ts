export const formatDate = (d: string) => {
    const date = new Date(d)
    const string = date.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
      return string.replaceAll("/", ".").replaceAll(",", " ")
      
}