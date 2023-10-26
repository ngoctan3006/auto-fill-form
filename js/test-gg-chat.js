const url =
  'https://chat.googleapis.com/v1/spaces/AAAArvs7_40/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ZMZXHOWBFqpAoMkrcRq1pczewKIojUxwZtkbpvE4l8Y';

function webhook() {
  const data = JSON.stringify({
    text: 'Hello from a Node script!',
  });
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: data,
  }).then((response) => {
    console.log(response);
  });
}

webhook();
