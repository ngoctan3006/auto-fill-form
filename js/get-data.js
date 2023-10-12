const getData = () => {
  const allQuest = document.querySelectorAll('div[data-automation-id="questionItem"]');
  const rawQuest = [];
  allQuest.forEach((quest) => {
    const question = quest
      .querySelector('span.text-format-content')
      .textContent.replace(/\s+/g, ' ')
      .replace(/“|”/g, '"')
      .replace(/–/g, '-')
      .normalize('NFC');
    const answerList = quest.querySelectorAll('div[data-automation-id="choiceItem"]');
    const answer = [];
    answerList.forEach((item) =>
      answer.push(
        item
          .querySelector('span.text-format-content')
          .textContent.replace(/\s+/g, ' ')
          .replace(/“|”/g, '"')
          .replace(/–/g, '-')
          .normalize('NFC')
      )
    );
    rawQuest.push({ question, answer });
  });

  navigator.clipboard.writeText(JSON.stringify(rawQuest));
};

window.onload = () => {
  getData();
};

// https://script.google.com/macros/s/AKfycbx_VAwxC0QEx5OYa9IS9dObmeTrhvAtDTeaAVHNqJpMMhGdZkJUXOVZ1iBD8mYLU5_qIQ/exec?name=phapluat
