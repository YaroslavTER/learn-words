export const TextHandler = {
  convertTextToList: inputText => {
    let learningList = [
      {
        name: "a) terms",
        words: [
          {
            word: "prefomance",
            translation:
              "1) робота, функціонування; експлуатаційні властивості 2) ККД"
          },
          {
            word: "global control structure",
            translation: "структура глобального керування"
          },
          {
            word: "scaling",
            translation: "масштабування, масштабне перетворення"
          }
        ]
      },
      {
        name: "b) nouns",
        words: [
          {
            word: "issue",
            translation: "проблема, питання"
          },
          {
            word: "synchronization",
            translation: "синхронізація"
          },
          {
            word: "composition",
            translation: "1) склад  2) побудова, формування, утворення"
          },
          {
            word: "domain",
            translation:
              "(предметна) область, контекст (середовище, в якому повинна працювати програма)"
          }
        ]
      }
    ];
    console.log("processing...");
    return learningList;
  }
};
