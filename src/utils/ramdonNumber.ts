import uuid from "uuid";

export const generateRandomNumberWithUuid = () => {
  const uniqueId = uuid.v4();

  const randomNumber = parseInt(uniqueId.slice(0, 8), 16);

  return randomNumber;
};
