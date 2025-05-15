// 正規表現を使って置換処理
function runReplace() {
    const input = document.getElementById('inputText').value; // 入力テキスト
    const pattern = document.getElementById('pattern').value; // 正規表現
    const replacement = document.getElementById('replacement').value; // 置換文字列

    try {
        const regex = new RegExp(pattern, 'g'); // グローバルマッチ
        const result = input.replace(regex, replacement); // 置換処理
        document.getElementById('output').value = result; // 変換結果を出力エリアに表示
    } catch (e) {
        alert('正規表現エラー: ' + e.message);
    }
}

// すべての入力欄をクリア
function clearAll() {
    document.getElementById('inputText').value = '';
    document.getElementById('pattern').value = '';
    document.getElementById('replacement').value = '';
    document.getElementById('output').value = ''; // 出力エリアをクリア
}

// ページ読み込み後、ボタンにイベントリスナーを追加
window.onload = function() {
    document.getElementById('convertBtn').addEventListener('click', runReplace); // 変換ボタン
    document.getElementById('clearBtn').addEventListener('click', clearAll);   // クリアボタン
};
