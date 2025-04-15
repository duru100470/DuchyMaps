<script>
</script>

<main>
  <div class="server">
    <h2>컬러스위퍼 Live</h2>
  </div>
</main>

<style>
  main {
    position: fixed;
    top: 60px;
    left: 0px; /* 사이드바 위치에 따라 조정 */
    width: 300px;
    min-width: 200px;
    height: calc(100vh - 60px); /* 뷰포트 전체 높이 */
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto; /* 내용이 많을 때 내부 스크롤 */
    background: #f9f9f9;
    z-index: 1;
  }

  .server {
    margin: 4px;
    text-align: center;
    background: var(--main-color-1);
    border-radius: 8px;
  }

  .server h2 {
    color: #fff;
  }

  .list {
    margin: 4px;
    text-align: left;
  }

  button {
    width: 100%;
    text-align: left;
    background: #fff;
  }

  button.selected {
    background: #1e293940;
  }

  p {
    font-weight: bold;
  }
</style>
