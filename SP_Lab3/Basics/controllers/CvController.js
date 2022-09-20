const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }
  experience = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experience = JSON.parse(String(experience));

  exp = [];

  for (let key in experience) {
    exp.push(experience[key]);
  }
  language = fs.readFileSync("data/language", { encoding: "utf-8" });
  language = JSON.parse(String(language));

  lang = [];

  for (let key in language) {
    lang.push(language[key]);
  }
  skills = fs.readFileSync("data/skills", { encoding: "utf-8" });
  skills = JSON.parse(String(skills));

  skill = [];

  for (let key in skills) {
    skill.push(skills[key]);
  }
  res.render("cv", { name: "Farhan Shahriar Fahim", educations: edus, experience: exp, language: lang, skills: skill });
};
          
module.exports = { getCV: getCV };
