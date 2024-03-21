<script lang="ts">
    import type { IndexMonster } from "./+page";
    import { caughtMonsters } from '$lib/stores'
    import { selectedMonsters } from '$lib/stores'
    import { page } from '$app/stores'
    import { goto } from "$app/navigation";
    
    export let monster: IndexMonster;
    // export let clickedMonster = '';
    // export let setSelected : (name:string)=>void;

    // export let isInteractive : boolean = false;
    const catchMonster = (monster : IndexMonster) => {
        caughtMonsters.update((monsters) => {
            return [...monsters, monster]
        })
        console.log('catch monster', monster);
    }

    const releaseMonster = (monster: IndexMonster) => {
        const monsters = $caughtMonsters;
        const itemIdx = monsters.findIndex(m => m.id === monster.id);
        if (itemIdx !== -1) {
            monsters.splice(itemIdx, 1);
            console.log('Released monster', monster);
            caughtMonsters.set(monsters);
        } else {
            console.log('Monster not found in caught monsters');
        }
    };

</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div    class ='w-[130px] border m-[10px] p-[10px] 
                relative bg-[#eee] hover:bg-[#ddd]'>
    <div>
            <div class ='flex flex-col items-center'>
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <img on:click={() => {
                    selectedMonsters.set(monster);
                    console.log($selectedMonsters);
                    goto(`pokedata`);
                }
                    } src={monster.image} alt={monster.name}/>
                <!-- {on:click={()=>{console.log('clicked')
                setSelected(monster.name)} -->
                {monster.name}
            </div>
            <div class = 'text-xs absolute top-8px left-8px text-[#aaa]'>
                    {monster.id}
            </div>
            {#if $page.url.pathname == '/'}
                <div class = 'flex flex-col items-center'>
                    <div on:click={() => catchMonster(monster)} class = 'flex flex-col items-center border-[1px] border-black rounded w-14
                        {$caughtMonsters.findIndex((m) => monster.id == m.id) == -1 ? '' : 'bg-[#FFFF00]'}'>
                        <p>catch</p>
                    </div>
                </div>
            {/if}
            {#if $page.url.pathname == '/my-monster'}
                <div class = 'flex flex-col items-center'>
                    <div on:click={() => releaseMonster(monster)} class = 'flex flex-col items-center border-[1px] border-black rounded w-14'>
                        <p>release</p>
                    </div>
                </div>
            {/if}
    </div>
</div>

