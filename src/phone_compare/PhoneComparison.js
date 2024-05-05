import React from "react";
import "./PhoneComparison.css";

const PhoneComparison = ({ phones }) => {
  // Her bir özelliğin en iyi değerini bulan fonksiyon
  const calculateBestValues = () => {
    const bestValues = {};

    phones.forEach((phone) => {
      phone.features.forEach((feature) => {
        const { title, value } = feature;
        // Fiyat dışındaki özelliklerde en yüksek değeri, fiyatta ise en düşük değeri bul
        if (
          !bestValues[title] ||
          (title !== "Fiyat" && value > bestValues[title]) ||
          (title === "Fiyat" && value < bestValues[title])
        ) {
          bestValues[title] = value;
          console.log(`En iyi ${title} değeri güncellendi: ${value}`);
        }
      });
    });

    console.log("En iyi değerler:", bestValues);

    return bestValues;
  };

  const bestValues = calculateBestValues();

  return (
    <div className="phone-comparison">
      {phones.map((phone, index) => (
        <div key={index} className="phone-card">
          <img src={phone.img} alt={`${phone.brand} ${phone.model}`} />
          <h2>
            {phone.brand} {phone.model}
          </h2>
          <table>
            <tbody>
              {phone.features.map((feature, index) => (
                <tr key={index}>
                  <td>{feature.title}</td>
                  <td>
                    {feature.value === bestValues[feature.title] ? (
                      <strong>{feature.text}</strong>
                    ) : (
                      feature.text
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PhoneComparison;
