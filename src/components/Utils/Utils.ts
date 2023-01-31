export const getInitials = (name: string) => {
  let initials;
  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;

  if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 2);
  } else if (nameLength === 2) {
    initials = nameSplit[0].substring(0, 1) + nameSplit[1].substring(0, 1);
  } else if (nameLength === 3) {
    initials =
      nameSplit[0].substring(0, 1) +
      nameSplit[1].substring(0, 1) +
      nameSplit[2].substring(0, 1);
  } else if (nameLength > 3) {
    initials =
      nameSplit[0].substring(0, 1) +
      nameSplit[1].substring(0, 1) +
      nameSplit[2].substring(0, 1);
  } else return;

  return initials.toUpperCase();
};
