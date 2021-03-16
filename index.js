let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');
  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  console.log(result);

  var result1 = result[0].className;
  var result2 = result[1].className;
  var result3 =result[2].className;
  document.querySelector('#result1').innerHTML = result1.toString();
  document.querySelector('#result2').innerHTML = result2.toString();
  document.querySelector('#result3').innerHTML = result3.toString();

}

app();