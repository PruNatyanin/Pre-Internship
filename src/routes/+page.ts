import type { PageLoad } from "./$types"

type ApiMonster = {
    name: string
    url: string
}
export type IndexMonster = ApiMonster &{
    id : string
    image: string
    stat : string
}

export const load = (async({ fetch, url }) => {
    const generationId = url.searchParams.get('generation_id') || '1'
    let monsterList = []
    if(generationId == 'all'){
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
        const json = await response.json() 
        //create monsters which have name,url,id
        monsterList = json.results
        // monsters = json.results.map((monster: ApiMonster) => {
        //     const splitUrl = monster.url.split('/')
        //     const id  = splitUrl[splitUrl.length - 2]
        //     return{
        //         name: monster.name,
        //         url: monster.url,
        //         id: id,
        //         image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        //     }
        // })
    }
    else{
        const generationResponse = await fetch(`http://pokeapi.co/api/v2/generation/${generationId}`)
        const generationJson = await generationResponse.json()
        monsterList = generationJson.pokemon_species     
    }   
    // console.log(generationJson)
    const monsters : IndexMonster[] = monsterList.map((monster: ApiMonster) =>{
        const splitUrl = monster.url.split('/')
        const id  = splitUrl[splitUrl.length - 2]
        return{
            name: monster.name,
            url: monster.url,
            id: id,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
            stat : `https://pokeapi.co/api/v2/pokemon/${id}/`
        }
    })
    return{
        monsters
    }
}) satisfies PageLoad