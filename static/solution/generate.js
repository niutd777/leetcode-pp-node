const fs = require("fs");
const path = require("path");

const { encrypt } = require("../../utils/crypto.js");

const solutions = require("./solutions.json");

function toArray(sep = "-", txt) {
  if (!txt) return txt;
  return txt
    .split(sep)
    .slice(1)
    .map((v) => String.prototype.trim.call(v));
}

function getParenceDataReg() {
  return {
    title: /(?<=# 题目地址[(（])(.+?)(?=[)）])/,
  };
}

function getSatelliteDataReg() {
  return {
    link: /(?<=# 题目地址[(（)].+?[)）])([\s\S]*?)(?=##)/,
    pres: /(?<=## 前置知识)([\s\S]*?)(?=##)/,
    description: /(?<=## .*?描述)([\s\S]*?)(?=##)/,
    tags: /(?<=## 标签)([\s\S]*?)(?=##)/,
    whys: /(?<=## 推荐理由)([\s\S]*?)(?=##)/,
    difficulty: /(?<=## 难度)([\s\S]*?)(?=##)/,
  };
}

function matchWioutPaddingLine(reg, txt) {
  return (
    txt.match(reg) &&
    txt
      .match(reg)[0]
      .replace(/^[\r\n]+/g, "")
      .replace(/[\r\n]+$/g, "")
  );
}

// 基础篇
Array.from({ length: 28 }, (_, i) => i + 1).forEach((i) => {
  solutions[i] = solutions[i] || {};
  const rawMDBuffer = fs.readFileSync(
    path.resolve(__dirname, `../../91alg-4/solution/basic/d${i}.md`)
  );
  const rawMD = rawMDBuffer.toString();
  const regs = {
    ...getSatelliteDataReg(),
    ...getParenceDataReg(),
  };
  const pres = matchWioutPaddingLine(regs.pres, rawMD);
  const description = matchWioutPaddingLine(regs.description, rawMD);

  const tags = matchWioutPaddingLine(regs.tags, rawMD);
  const link = matchWioutPaddingLine(regs.link, rawMD);
  const title = matchWioutPaddingLine(regs.title, rawMD);
  const whys = matchWioutPaddingLine(regs.whys, rawMD);
  const difficulty = matchWioutPaddingLine(regs.difficulty, rawMD);
  solutions[i] = {
    ...solutions[i],
    day: i,
    pres: toArray("-", pres),
    tags: toArray("-", tags),
    whys: toArray("-", whys),
    difficulty,
    description,
    content: encrypt(rawMDBuffer),
    title,
    link,
  };
});

fs.writeFileSync(__dirname + "/solutions.json", JSON.stringify(solutions));
