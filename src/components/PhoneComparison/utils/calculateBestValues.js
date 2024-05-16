export const calculateBestValues = (phones) => {
  const bestValues = {};
  const allTitles = [];

  phones.forEach((phone) => {
    phone.features.forEach((feature) => {
      const { title, value } = feature;
      if (
        !bestValues[title] ||
        (title !== "Fiyat" && value > bestValues[title]) ||
        (title === "Fiyat" && value < bestValues[title])
      ) {
        bestValues[title] = value;
      }
      if (!allTitles.includes(title)) {
        allTitles.push(title);
      }
    });
  });

  // Eksik başlıklar için "?" işareti ekleme
  allTitles.forEach((title) => {
    if (!bestValues.hasOwnProperty(title)) {
      bestValues[title] = "?";
    }
  });

  return bestValues;
};
