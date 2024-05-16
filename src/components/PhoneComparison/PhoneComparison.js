import React from "react";
import "./PhoneComparison.css";
import { calculateBestValues } from "./utils/calculateBestValues";
import { phones } from "../../data/phones";

const PhoneComparison = () => {
  // Her bir telefonun kendi özelliklerini baz alarak en iyi değerleri hesaplayalım
  const bestValues = calculateBestValues(phones);

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
              {Object.keys(bestValues).map((title, index) => (
                <tr key={index}>
                  <td>{title}</td>
                  <td>
                    {phone.features.find(
                      (feature) => feature.title === title
                    ) ? (
                      phone.features.find((feature) => feature.title === title)
                        .value === bestValues[title] ? (
                        <strong>
                          {
                            phone.features.find(
                              (feature) => feature.title === title
                            ).text
                          }
                        </strong>
                      ) : (
                        phone.features.find(
                          (feature) => feature.title === title
                        ).text
                      )
                    ) : (
                      "?" // Eksik başlık için "?" işareti ekleyelim
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
