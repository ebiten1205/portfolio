process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

console.log('test');
console.log(1+1);
window.alert('おはようございます。');
document.getElementById('choice').textContent = new Date();
console.log(document.getElementById('choice').textContent);
const answer = window.prompt('ヘルプを見ますか？');
if (answer === 'yes') {
  window.alert('タップでジャンプ、障害物をよけます。');
} else if(answer === 'no') {
  window.alert('ゲーム起動中．．．');
} else {
  window.alert('yesかnoでお答えください。');
}
const number = Math.floor(Math.random() * 6);
const answer = parseInt(window.prompt('数当てゲーム。0～5の数字を入力してね。'));
let message;
if(answer === number) {
  message = 'あたり！';
} else if(answer < number) {
  message = '残念でした！もっと大きい';
} else if(answer > number) {
  message = '残念でした！もっと小さい';
} else {
  message = '0～5の数字を入力してね。';
}

const hour = new Date().getHours();

if(hour >= 19 && hour < 21) {
  window.alert('お弁当30%OFF！');
} else if(hour === 9 || hour === 15) {
  window.alert('お弁当1個買ったら1個おまけ！');
} else {
  window.alert('お弁当いかがですか');
}
let i = 1;
while(i <= 10) {
  console.log(i + '枚');
  i += 1;
}
