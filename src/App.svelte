<script lang="ts">
  import Header from "~/components/Header.svelte";
  import SideBar from "~/components/SideBar.svelte";
  import Router, { location } from "svelte-spa-router";
  import { routes, authRoutes } from "~/routes";
  import Toasts from "~/components/Toasts.svelte";

  // Redirect to login page
  // $: if (authRoutes[$location]) {
  //   if (userInfoStore.current == null) document.location.href = "/#/auth/login";
  // }
</script>

<Toasts />

<Header />
<main>
  <SideBar />
  <div class="content">
    <Router {routes} />
  </div>
</main>

<style>
  main {
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .content {
    width: 100%;
    height: 100%;
    margin-left: 300px;
    margin-top: 60px;
  }
</style>
