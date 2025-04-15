<script>
  let { text = "", onclick = () => {} } = $props();
  console.log(text);
</script>

<button {onclick}>
  <p>{text}</p>
</button>
