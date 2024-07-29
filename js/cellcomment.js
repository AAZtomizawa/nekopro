const myTable = document.getElementById('tableList');
const cells = document.querySelectorAll('td');

cells.forEach(function (cell) {
  cell.addEventListener('mouseover', function () {
    // 変数の宣言にletを使用
    let rowHeaderText = myTable.rows[cell.parentNode.rowIndex].cells[0].innerText;
    let colHeaderText = myTable.rows[0].cells[cell.cellIndex].innerText;

    // 例えば、特定の要素に表示する場合:
    const displayElement = document.getElementById("display");
    let outputContent = "<code>'" + rowHeaderText + colHeaderText + "'</code> にアクセスする場合は " + "<code>nums[" + rowHeaderText + "][" + colHeaderText + "]</code> と書きます。"
    displayElement.innerHTML = outputContent;
  });
});
