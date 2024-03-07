export const convertDate = (date: string): Date => {
  const split = date.split("/");
  return new Date(
    parseInt(split[2], 10),
    parseInt(split[1], 10) - 1,
    parseInt(split[0], 10)
  );
};
