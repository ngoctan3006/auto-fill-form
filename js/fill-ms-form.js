const dataUrl =
  'https://script.google.com/macros/s/AKfycbx5JmnNTgQDlJm8qjIpO9swuVl3gnsA02oeoX9-53Hz9_NbwuTg7d_LE3ZrRYAFHvnTJQ/exec';

async function fillForm(formName) {
  const data = await fetch(`${dataUrl}?name=${formName}`).then((res) => res.json());

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

fillForm('ttvh');
