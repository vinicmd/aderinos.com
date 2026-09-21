export const formatTelephone = (telephone: number) => {
  const first = telephone.toString().slice(0, 3);
  const second = telephone.toString().slice(3, 6);
  const third = telephone.toString().slice(6, 9);

  return `${first} ${second} ${third}`;
};
