  export const displayDate = (date: string) => {
    const createdDate = new Date(date)
    return new Intl.DateTimeFormat('es-MX').format(createdDate);
  }