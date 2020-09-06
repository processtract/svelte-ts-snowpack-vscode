<script lang="ts">
  import { onMount, beforeUpdate } from "svelte";
  import { AppComponent } from "./AppComponent";
  import type { propType } from "./AppComponent";

  export let name: string;
  export let counter: number;

  let props: propType;
  $: props = { name, counter };

  let component: AppComponent = new AppComponent(
    () => props,
    onMount,  
    beforeUpdate
  );

  let customName = component.customName;
</script>

<style lang="scss">
  @import "variables";
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

  :global(body) {
    background-color: $base-color;
    color:white;
    font-family: 'Source Sans Pro', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  button {
    border-collapse: collapse;
    border: 1px solid white;
    color:white;
    background-color:transparent;
    border-radius: 3px;
    padding:10px;
  }
</style>

<main class="custom-component">
  <h1>Svelte Template {$customName}!</h1>
  <h3>
    <button
      type="button"
      on:click="{() => component.incrementInternalCounter()}"
    >
      Counter One
    </button>
  </h3>
  <h3>
    <button type="button" on:click="{() => counter++}">Counter Two</button>
  </h3>
</main>
