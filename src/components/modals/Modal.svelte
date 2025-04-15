<!-- Modal.svelte -->
<script lang="ts">
  import CloseIcon from "~/components/icons/CloseIcon.svelte";
  import { ModalProps } from "~/utils/props";

  let { title, open = $bindable(), children, onClose }: ModalProps = $props();

  function handleCloseButton() {
    open = false;

    if (onClose) onClose();
  }
</script>

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="modal-overlay">
    <div class="modal">
      <header>
        <h2>{title}</h2>
        <button
          class="close"
          onclick={handleCloseButton}
          aria-label="Close Modal"><CloseIcon width="0.8em" /></button
        >
      </header>
      <div class="content">
        {#if children}
          {@render children?.()}
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  .modal {
    background: #fff;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
  .close {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    line-height: 1;
  }
  .content {
    /* 내부 콘텐츠에 대한 스타일을 추가하세요 */
  }
</style>
