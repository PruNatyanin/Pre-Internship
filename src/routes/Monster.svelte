<script lang="ts">
    import type { IndexMonster } from "./+page";

    export let monster: IndexMonster;
    export let updateSearchParams: (key: string, value: string) => void;
    export let isInteractive : boolean = false;
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div    class ='w-[130px] border m-[10px] p-[10px] 
                     relative bg-[#eee] hover:bg-[#ddd]'>
            <div on:click={() => isInteractive ? updateSearchParams('monsterId', monster.id) : () => {}}>
                <div class ='flex flex-col items-center'>
                    <img src={monster.image} alt={monster.name}/>
                    {monster.name}
                </div >
                <div class = 'text-xs absolute top-8px left-8px text-[#aaa]'>
                    {monster.id}
                </div>
            </div>
            <div on:click={() => updateSearchParams('monsterId2', monster.id)}>
                {#if isInteractive}
                    <div class ='flex flex-col items-center'>
                        <p>Add Monster 2</p>
                    </div>
                {/if}
            </div>
        </div>