import React, { useState, ChangeEvent } from "react";
import Hangul from "hangul-js";
import { css } from "@emotion/react";

function HangulToRomanization() {
  const [hangulText, setHangulText] = useState<string>("");
  const [romanizedText, setRomanizedText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setHangulText(value);
    const disassembled = Hangul.d(value, true);
    const romanaized = disassembled
      .map(char => char
        .map((part, index) => {
          if (index === 0 && part === "ㅇ") return "";
          return romanizationTable[part as keyof typeof romanizationTable] ?? part
        })
        .join(''))
      .join(' ');
    setRomanizedText(romanaized);
  };

  return (
    <div>
      <h2>Hangul to Romanization Converter</h2>
      <div>
        <label>
          Enter Hangul Text:
          <input
            type="text"
            value={hangulText}
            onChange={handleChange} />
        </label>
      </div>
      <div>
        <p>Result: {romanizedText}</p>
      </div>
    </div>
  );
}

export default HangulToRomanization;

const romanizationTable = {
  "ㄱ": "g",
  "ㄲ": "kk",
  "ㄴ": "n",
  "ㄷ": "d",
  "ㄸ": "tt",
  "ㄹ": "r",
  "ㅁ": "m",
  "ㅂ": "b",
  "ㅃ": "pp",
  "ㅅ": "s",
  "ㅆ": "ss",
  "ㅇ": "ng",
  "ㅈ": "j",
  "ㅉ": "jj",
  "ㅊ": "ch",
  "ㅋ": "k",
  "ㅌ": "t",
  "ㅍ": "p",
  "ㅎ": "h",
  "ㅏ": "a",
  "ㅐ": "ae",
  "ㅑ": "ya",
  "ㅒ": "yae",
  "ㅓ": "eo",
  "ㅔ": "e",
  "ㅕ": "yeo",
  "ㅖ": "ye",
  "ㅗ": "o",
  "ㅘ": "wa",
  "ㅙ": "wae",
  "ㅚ": "oe",
  "ㅛ": "yo",
  "ㅜ": "u",
  "ㅝ": "wo",
  "ㅞ": "we",
  "ㅟ": "wi",
  "ㅠ": "yu",
  "ㅡ": "eu",
  "ㅢ": "ui",
  "ㅣ": "i",
}
