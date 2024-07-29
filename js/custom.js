  // トップに戻るボタンを表示・非表示を切り替える
  window.onscroll = function() {
    toggleTopButton();
  };

  // ボタンがクリックされたらトップに戻る
  document.getElementById("topBtn").onclick = function() {
    scrollToTop();
  };

  // トップに戻るボタンの表示・非表示を切り替える関数
  function toggleTopButton() {
    let topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  // ページのトップにスクロールする関数
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  // アコーディオンを開くアクション
  function openAccordion(secID) {
    let accordion = document.getElementById(secID);
    accordion.setAttribute('open', 'true');
  }

  // アコーディオンを閉じるアクション
  function closeAccordion(secID) {
    let accordion = document.getElementById(secID);
    accordion.removeAttribute('open');
  }


  // 開いているすべてのアコーディオンを閉じるアクション
  function closeAllAccordions() {
    let accordions = document.querySelectorAll('details');
    accordions.forEach(function(accordion) {
      accordion.removeAttribute('open');
    });
  }


