<script lang='ts'>
    import { caughtMonsters } from "$lib/stores";
    import Monster from "../Monster.svelte";
</script>

<div class = 'flex flex-row flex-wrap justify-center'>
    {#each $caughtMonsters as monster}
        <Monster {monster} />
    {/each}
</div>