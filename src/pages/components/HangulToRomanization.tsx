import React, { useState, ChangeEvent } from "react";
import Hangul from "hangul-js";
import { css } from "@emotion/react";

function HangulToRomanization() {
  const [hangulText, setHangulText] = useState<string>("");
  const [romanizedText, setRomanizedText] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
      <h1>Hangul to Romanization Converter</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        height: "300px",
        marginTop: "1rem"
      }}>
        <div style={{
          gridColumn: "1",
          gridRowStart: "1",
          gridRowEnd: "2",
        }}>
          <label>
            <p style={{ gridRow: "1" }}>Enter Hangul Text:</p>
            <textarea
              style={{
                gridRow: "2",
                width: "90%",
                height: "100%",
                resize: "none",
                fontSize: "1.5rem"
              }}
              value={hangulText}
              onChange={handleChange} />
          </label>
        </div>
        <div style={{
          gridColumn: "2",
          gridRowStart: "1",
          gridRowEnd: "2",
        }}>
          <p style={{ gridRow: "1" }}>Result: </p>
          <textarea
            style={{
              gridRow: "2",
              width: "90%",
              height: "100%",
              resize: "none",
              fontSize: "1.5rem"
            }}
            value={romanizedText}
            readOnly />
        </div>
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
