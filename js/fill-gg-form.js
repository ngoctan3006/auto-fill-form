async function fillForm(formName) {
  const data = await fetch(
    `https://script.google.com/macros/s/AKfycbxj6y3q_uggix4E3LXJeSABsQobP9l7WV0Pp8sT7F013xtVbi2Rk_QJT70wrLobTwhG4g/exec?name=${formName}`
  ).then((res) => res.json());

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
