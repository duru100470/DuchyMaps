<script lang="ts">
  import Toast from "~/components/Toast.svelte";
  import { dismissToast, toastStore } from "~/stores/toastStore.svelte";
</script>

{#if toastStore.get()}
  <section>
    {#each toastStore.get() as toast (toast.id)}
      <Toast
        type={toast.type}
        dismissible={toast.dismissible}
        onDismiss={() => dismissToast(toast.id ?? 0)}>{toast.message}</Toast
      >
    {/each}
  </section>
{/if}

<style lang="postcss">
  section {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
  }
</style>
