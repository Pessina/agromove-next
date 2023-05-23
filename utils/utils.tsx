export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");

  if (cleaned === "") {
    return "";
  }

  if (cleaned.length <= 2) {
    return `(${cleaned}`;
  } else if (cleaned.length <= 6) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  } else if (cleaned.length <= 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(
      6
    )}`;
  } else {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7,
      11
    )}`;
  }
};

export const createArray = (
  length: number,
  interval: number,
  start: number
): number[] => {
  const array: number[] = [];
  let currentNumber = start;

  for (let i = 0; i < length; i++) {
    array.push(currentNumber);
    currentNumber += interval;
  }

  return array;
};
