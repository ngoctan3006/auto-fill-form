const getData = () => {
  const allQuest = document.querySelectorAll('div[role="listitem"]');
  const rawQuest = [];
  allQuest.forEach((quest) => {
    if (quest.classList.length > 1 || quest.classList[0] !== 'Qr7Oae') return;
    const question = quest.querySelector('span.M7eMe')?.textContent;
    const answerList = quest.querySelectorAll('span.aDTYNe.snByac.OvPDhc.OIC90c');
    const answer = [];
    answerList.forEach((item) => {
      answer.push(item?.textContent);
    });
    rawQuest.push({ question, answer });
  });

  navigator.clipboard.writeText(JSON.stringify(rawQuest));
};

const formatText = (text) => {
  return text.replace(/\s+/g, ' ').replace(/“|”/g, '"').replace(/–/g, '-').normalize('NFC');
};

const removeAccents = (str) => {
  str = str.normalize('NFC');
  str = str.trim();
  const AccentsMap = [
    'aàảãáạăằẳẵắặâầẩẫấậ',
    'AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ',
    'dđ',
    'DĐ',
    'eèẻẽéẹêềểễếệ',
    'EÈẺẼÉẸÊỀỂỄẾỆ',
    'iìỉĩíị',
    'IÌỈĨÍỊ',
    'oòỏõóọôồổỗốộơờởỡớợ',
    'OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ',
    'uùủũúụưừửữứự',
    'UÙỦŨÚỤƯỪỬỮỨỰ',
    'yỳỷỹýỵ',
    'YỲỶỸÝỴ',
  ];
  for (let i = 0; i < AccentsMap.length; i++) {
    const re = new RegExp(`[${AccentsMap[i].substring(1)}]`, 'g');
    const char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
};
