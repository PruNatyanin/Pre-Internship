import type { PageLoad } from "./$types"
import { readableSelectedMonster } from '$lib/stores'

export const load = (async({ fetch, url }) => {
    // Subscribe to readableSelectedMonster to get its value
    // let monsterList = []
    let stats: any[] = []
    const unsubscribe = readableSelectedMonster.subscribe(async (selectedMonster) => {
        if (selectedMonster){
            const response = await fetch(selectedMonster.stat)
            const json = await response.json() 
            stats = json.stats
        }
    });
     // Wait for some time to allow the subscription to execute
     await new Promise(resolve => setTimeout(resolve, 100));

     // Unsubscribe to prevent memory leaks
     unsubscribe();
     //console.log(stats)
     // Return the stats
     return { stats };

})satisfies PageLoad