export function countPages(data: unknown[], perPage: number) {
  return Math.ceil(data.length / perPage);
}

function paginate(data: unknown[], perPage: number, page = 1) {
  const pageCount = countPages(data, perPage);
  if (page > pageCount || page < 1) {
    return data;
  }
  const paginatedData = data.slice(perPage * page - perPage, perPage * page);
  return paginatedData;
}

export default paginate;
