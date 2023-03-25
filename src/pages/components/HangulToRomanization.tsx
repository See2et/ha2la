import { useState, ChangeEvent } from "react";
import Hangul from "hangul-js";
import { css } from "@emotion/react";

const smartphone = "screen and (max-width: 768px)"

const container = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  width: 80vw;
  flex-grow: 1;
  @media ${smartphone} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`

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
    <div css={container}>
      <label css={css`
          display: flex;
          flex-direction: column;
          height: 100%;
        `}>
        <p style={{
          fontSize: "3vw"
        }}>Enter Hangul Text:</p>
        <textarea
          css={css`
              width: 100%;
              resize: none;
              font-size: 3vw;
              @media ${smartphone} {
                font-size: 6vw;
              }
              flex-grow: 1;
            `}
          value={hangulText}
          onChange={handleChange} />
      </label>
      <label css={css`
        display: flex;
        flex-direction: column;
        height: 100%;
      `}>
        <p style={{
          fontSize: "3vw"
        }}>Result: </p>
        <textarea
          css={css`
              width: 100%;
              resize: none;
              font-size: 3vw;
              @media ${smartphone} {
                font-size: 6vw;
              }
              flex-grow: 1;
            `}
          value={romanizedText}
          readOnly />
      </label>
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
