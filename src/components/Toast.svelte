<script lang="ts">
  import { fade } from "svelte/transition";
  import { ToastType } from "~/stores/toastStore.svelte";
  import SuccessIcon from "~/components/icons/SuccessIcon.svelte";
  import ErrorIcon from "~/components/icons/ErrorIcon.svelte";
  import InfoIcon from "~/components/icons/InfoIcon.svelte";
  import CloseIcon from "~/components/icons/CloseIcon.svelte";

  let {
    type,
    dismissible,
    children,
    onDismiss,
  }: {
    type: ToastType;
    dismissible: boolean;
    children: any;
    onDismiss: () => void;
  } = $props();
</script>

<article class={type} role="alert" transition:fade>
  {#if type == "Success"}
    <SuccessIcon width="1.1em" />
  {:else if type == "Error"}
    <ErrorIcon width="1.1em" />
  {:else}
    <InfoIcon width="1.1em" />
  {/if}
  <div class="content">
    {@render children?.()}
  </div>
  {#if dismissible}
    <button class="close" onclick={onDismiss}>
      <CloseIcon width="0.8em" />
    </button>
  {/if}
</article>

<style lang="postcss">
  article {
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    width: 20rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  .Error {
    background: IndianRed;
  }
  .Success {
    background: MediumSeaGreen;
  }
  .Info {
    background: SkyBlue;
  }
  .content {
    margin-left: 1rem;
  }
  button {
    color: white;
    background: transparent;
    border: 0 none;
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    font-size: 1rem;
  }

  .close {
    cursor: pointer;
  }
</style>
