export function formatDate(dateTime: string) {
  const inputDate = new Date(dateTime);
  return inputDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateTime(dateTime: string) {
  const inputDate = new Date(dateTime);
  return inputDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: 'numeric',
  });
}
