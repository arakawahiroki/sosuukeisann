const keisann = '計算開始';
document.getElementsByTagName('button')[0].textContent = keisann;
  // クリック関数
  function onButtonClick(){
    //
    document.getElementById('data-table').textContent = "";
    const select1 = document.form1.select1;
    // 値(数値)を取得
    const num = select1.selectedIndex;
    // 値(数値)から値(valnumue値)を取得
    const str = select1.options[num].value;
    var num1 = Number( str ); //引数に文字列を代入
    // 素数
    function makePrimeArray(num) {
      var prime_num1 = [],
          prime_num2 = [];

      for (var i = 0; i <= num; i++) {
        prime_num2.push(true);
      }

      for (var i = 2; i <= num; i++) {
        if (prime_num2[i]) {
          prime_num1.push(i);
          
          for (var j = 1; i * j <= num; j++) {
            prime_num2[i * j] = false;
          }   
        }
      }
    //　value列　×　1行　表示  
    n=0;
    var tableEle = document.getElementById('data-table');

    for (var i = 0; i < num1; i++) {
      console.log(num1);
      // テーブルの行を 1列追加する
      var tr = document.createElement('tr');

      for (var j = 0; j < 10; j++) {
        // テーブルの列を 10行追加する
        var td = document.createElement('td');
        td.innerHTML = prime_num1[n]+",";
        tr.appendChild(td);
        n++;
      }
      tableEle.appendChild(tr);
          }
          }
    makePrimeArray(1000);
  }
  