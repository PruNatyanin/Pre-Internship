<script lang="ts">
    import type { PageData } from "./$types";
    import {page} from "$app/stores"
    import type { IndexMonster } from "./+page";
    import { generations } from "./generation";
    import { goto } from "$app/navigation";
    import Monster from "./Monster.svelte"
    import { caughtMonsters } from "$lib/stores";

    //load data from +page
    export let data: PageData;

    // let count = 0;
    // $: doubleCount = count*2;
    // const monsterClick = () =>{
    //     count += 1;
    // }
    // $ : if(count > 5){
    //     alert('count is '+count);
    //     count *= 2;
    // }

    // $: monsterId = $page.url.searchParams.get("monsterId") || '';
    // $: monster = data.monsters.find((monster : IndexMonster) => monster.id === monsterId);
    // // const monsterClick =(monster : IndexMonster) =>{
    // //      monsterId = monster.id;
    // //  }
    // $: monsterId2 = $page.url.searchParams.get("monsterId2") || '';
    // $: monster2 = data.monsters.find((monster : IndexMonster) => monster.id === monsterId2);

    const updateSearchParams = (key: string, value: string) => {
        const searchParams = new URLSearchParams($page.url.searchParams);
        searchParams.set(key, value);
        goto(`?${searchParams.toString()}`);
    };

    $: selectedGenerationId = $page.url.searchParams.get('generation_id') || '';

    //search
    let form ={
        searchString: ''
    };
    let searchString = ''

    $: selectedMonsters = data.monsters.filter((monster) =>{
        return monster.name.toLowerCase().includes(searchString.toLowerCase());
    });

    const submitSearch = (e: Event) => {
        searchString = form.searchString;
    }

    // $: clickedMonster = '';

    // const setSelected=(mon:string)=>{
    //     if(mon === clickedMonster) return;
    //     clickedMonster = mon;
    //     console.log(clickedMonster)
    // }
</script>

<!-- {#if monster}
    <Monster monster = {monster}
    updateSearchParams = {updateSearchParams}/>
{/if}

{#if monster}
    <Monster monster = {monster2}
    updateSearchParams = {updateSearchParams}/>
{/if} -->

<!-- <h1>{monsterId}</h1>
<h1>{monster?.name}</h1>
<h1>{monsterId2}</h1>
<h2>{monster2?.name}</h2> -->

<!-- generation -->
<div class='flex flex-row flex-wrap justify-center'>

    <!-- {#if clickedMonster !==''}
        <div class="bg-black absolute bg-opacity-30 flex flex-col justify-center items-center h-screen w-screen z-50" on:click={() => clickedMonster = ''}>
            <p class="text-2xl text-white">{clickedMonster}</p>
        </div>
    {/if} -->
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <botton on:click={() => updateSearchParams('generation_id', 'all')}
            class='m-[5px] px-[10px] py-[5px] 
            border border-black text-[#333] 
            {selectedGenerationId == 'all' ? 'active : bg-[#333] text-[#f9f9f9]' : ''}'>
            <p>All</p>
    </botton>
    {#each generations as generation (generation.id)}
        <button on:click={() => updateSearchParams('generation_id', generation.id.toString())} 
                class='m-[5px] px-[10px] py-[5px] 
                    border border-black
                    text-[#333] {selectedGenerationId == generation.id.toString() ? 'active : bg-[#333] text-[#f9f9f9]' : ''}'>
            <p>{generation.main_region}</p>
        </button>
    {/each}
</div>

<!-- search and botton search -->
<form class = 'flex justify-center m-[20px] '
      on:submit|preventDefault={submitSearch}>
    <input class = 'px-[10px] py-[5px] rounded-[5px] w-[200px]
                    border border-black' 
            type='text' bind:value={form.searchString} 
            placeholder="Pokemon Name" />
    <input class = 'ml-[5px] rounded-[5px] w-[70px] hover:bg-[#ddd]
                    bg-[#333] text-white border border-black' 
            type='submit' value='Search' />
</form>

<!-- show pokemon -->
<div class ='flex flex-row flex-wrap justify-center'>
    {#each selectedMonsters as monster (monster.id)}
        <Monster monster = {monster}/>
        <!-- {clickedMonster} {setSelected} -->
    {/each}
</div>
