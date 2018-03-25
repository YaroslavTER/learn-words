export const TextHandler = {
  convertTextToList: inputText => {
    let textArray = inputText.split("\n");
    let learningList = [];

    textArray.map(element => {
      if (element !== "") {
        let isSectionElement = element.match(/–/g);
        if (isSectionElement) {
          let sectionElement = element.split("–");
          let lastIndex = learningList.length - 1;
          if (lastIndex === -1) {
            learningList.push({ name: "to learn", words: [] });
            lastIndex++;
          }

          learningList[lastIndex].words.push({
            word: sectionElement[0],
            translation: sectionElement[1]
          });
        } else {
          learningList.push({ name: element, words: [] });
        }
      }

      return null;
    });
    return learningList;
  }
};
