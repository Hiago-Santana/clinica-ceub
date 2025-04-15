export function formatToISO8601(date) {
    const pad = n => String(n).padStart(2, '0');
  
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // meses começam do zero
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
  
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }