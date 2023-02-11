export const createdAtFormat = (date: string) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Des',
  ];

  const constructedDate = new Date(date);
  const formatedDate = `${constructedDate.getFullYear()}-${
    months[constructedDate.getMonth()]
  }-${constructedDate.getDate()}`;

  return formatedDate;
};
