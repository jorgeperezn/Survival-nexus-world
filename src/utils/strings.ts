export const getInitials = (name: string): string => {
  const words = name.split(" ");
  let initials = "";

  words.forEach((word, index) => {
    if (initials.length >= 2 || index === words.length - 1) {
      return;
    }

    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  });

  if (initials.length < 2 && words.length > 0) {
    initials += words[words.length - 1][0].toUpperCase();
  }

  return initials;
};
