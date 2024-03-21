<script lang='ts'>
    import type { PageData } from "./$types";
    import { selectedMonsters } from "$lib/stores";
    import Monster from "../Monster.svelte";
    import { readable } from 'svelte/store';
    import type { IndexMonster } from "/Users/natyaninchayanuwong/Desktop/Work/Pre-Internship/src/routes/+page";

    export let data: PageData;

    // Create a derived store to access the value inside selectedMonsters
    const selectedMonster = readable<IndexMonster | null>(null, (set) => {
        const unsubscribe = selectedMonsters.subscribe(value => {
            set(value);
        });

        return unsubscribe;
    });

    const [hp, attack, defense, special_attack, special_defense, speed] = data.stats;
</script>

<div class="p-[10px]">
    <div class="flex flex-col flex-wrap justify-center">
      <label>HP:{hp.base_stat}</label>
      <span class = 'bg-black w-[{hp.base_stat}px] h-[5px]'></span>
      <label>Attack:{attack.base_stat}</label>
      <span class = 'bg-black'>{attack.base_stat}</span>
      <label>Defense:{defense.base_stat}</label>
      <span class = 'bg-black'>{defense.base_stat}</span>
      <label>Special Attack:{special_attack.base_stat}</label>
      <span class = 'bg-black'>{special_attack.base_stat}</span>
      <label>Special Defense:{special_defense.base_stat}</label>
      <span class = 'bg-black'>{special_defense.base_stat}</span>
      <label>Speed:{speed.base_stat}</label>
      <span class = 'bg-black'>{speed.base_stat}</span>
    </div>
</div>
