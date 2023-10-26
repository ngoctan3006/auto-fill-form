function copyText() {
  return new Promise((resolve, reject) => {
    const _asyncCopyFn = async () => {
      try {
        const trData = document.querySelectorAll('tr.dxgvDataRow');
        const data = [];
        trData.forEach((el) => {
          const colData = el.querySelectorAll('td');
          const textData = Array.from(colData).map((item) => item.textContent);
          if (textData.length === 9) textData.splice(8, 1);
          data.push(textData);
        });

        await navigator.clipboard.writeText(JSON.stringify(data));
        resolve('Đã xong');
      } catch (e) {
        reject(e);
      }
      window.removeEventListener('focus', _asyncCopyFn);
    };

    window.addEventListener('focus', _asyncCopyFn);
    console.log('======> Bấm nút Tab đi <======');
  });
}
copyText().then((r) => console.log(r));
