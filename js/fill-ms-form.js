async function fillForm(formName) {
  const data = await fetch(
    `https://script.google.com/macros/s/AKfycbwjtbxFHTEEd3owb9VPdeYsDQOeMuD3TGHqWwESIwEl9sAb3AmBthFeOCEk_nx1bT33eQ/exec?name=${formName}`
  ).then((res) => res.json());

  const allQuest = document.querySelectorAll('div[data-automation-id="questionItem"]');

  allQuest.forEach((quest) => {
    const question = formatText(quest.querySelector('span.text-format-content').textContent);
    const answer = data.find((item) => formatText(item.question) === question)?.answer;
    if (answer) {
      const answerList = quest.querySelectorAll('div[data-automation-id="choiceItem"]');
      answerList.forEach((item) => {
        const ansText = item.querySelector('span.text-format-content').textContent;
        if (answer.includes(formatText(ansText))) {
          item.querySelector('label').click();
        }
      });
    }
  });
}

function formatText(text) {
  return text.replace(/\s+/g, ' ').replace(/“|”/g, '"').replace(/–/g, '-').normalize('NFC');
}

fillForm('quyche');
