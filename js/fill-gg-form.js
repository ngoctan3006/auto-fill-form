const dataUrl =
  'https://script.google.com/macros/s/AKfycbx5JmnNTgQDlJm8qjIpO9swuVl3gnsA02oeoX9-53Hz9_NbwuTg7d_LE3ZrRYAFHvnTJQ/exec';

async function fillForm(formName) {
  const data = await fetch(`${dataUrl}?name=${formName}`).then((res) => res.json());

  const allQuest = document.querySelectorAll('div[role="listitem"]');

  allQuest.forEach((quest) => {
    if (quest.classList.length > 1 || quest.classList[0] !== 'Qr7Oae') return;
    const question = quest.querySelector('span.M7eMe')?.textContent;
    const answer = data.find((item) => item.question === question)?.answer;
    if (answer) {
      const answerList = quest.querySelectorAll('label.docssharedWizToggleLabeledContainer.ajBQVb');
      answerList.forEach((item) => {
        const ansText = item.querySelector('span.aDTYNe.snByac.OvPDhc.OIC90c')?.textContent;
        if (answer.includes(ansText)) {
          item.click();
        }
      });
    }
  });
}

fillForm('attt');
