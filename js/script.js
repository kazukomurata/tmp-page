// 1. 対象のdiv要素を取得
const div = document.getElementById('myDiv');

// 2. リンク要素を作成
const link = document.createElement('a');
link.href = '/test/'; // リンク先
link.textContent = 'Visit Test'; // 表示テキスト
link.target = '_blank'; // 新しいタブで開く

// 3. リンクをdivに追加
div.appendChild(link);
