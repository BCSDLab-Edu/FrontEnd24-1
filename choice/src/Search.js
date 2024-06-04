import React, { useEffect, useState } from "react";
import "./Search.css";

const data = [
  { id: 1, nameKorea: "사과", nameEnglish: "Apple" },
  { id: 2, nameKorea: "바나나", nameEnglish: "Banana" },
  { id: 3, nameKorea: "당근", nameEnglish: "Carrot" },
  { id: 4, nameKorea: "브로콜리", nameEnglish: "Broccoli" },
  { id: 5, nameKorea: "블루베리", nameEnglish: "Blueberry" },
  { id: 6, nameKorea: "토마토", nameEnglish: "Tomato" },
  { id: 7, nameKorea: "멜론", nameEnglish: "Melon" },
  { id: 8, nameKorea: "수박", nameEnglish: "Watermelon" },
  { id: 9, nameKorea: "복숭아", nameEnglish: "Peach" },
  { id: 10, nameKorea: "고구마", nameEnglish: "Sweetpotato" },
];

function Search() {
  const [input, SetInput] = useState("");
  const [newdata, SetNewdata] = useState(data);

  const inputThing = (event) => {
    const value = event.target.value;
    const test = value.replace(/[^ㄱ-ㅎ가-힣]/, "");
    SetInput(test);
  };

  useEffect(() => {
    const filtertext = data.filter((item) => {
      return item.nameKorea.includes(input);
    });
    SetNewdata(filtertext);
    console.log(filtertext);
    console.log(input);
  }, [input]);

  return (
    <div className="Box">
      <input value={input} onChange={inputThing} />
      <h1>결과</h1>
      <div className="listbox">
        {newdata.map((item) => (
          <div>{`${item.nameEnglish} (${item.nameKorea})`}</div>
        ))}
      </div>
    </div>
  );
}

export default Search;
