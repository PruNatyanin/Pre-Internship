// place files you want to import through the `$lib` alias in this folder.
import { writable , type Writable, derived} from "svelte/store";
import type { IndexMonster} from '../routes/+page'

export const caughtMonsters: Writable<IndexMonster[]> = writable([]);
export const selectedMonsters = writable<IndexMonster | null>(null);

// Create a derived store to make selectedMonsters readable
export const readableSelectedMonster = derived(selectedMonsters, ($selectedMonsters) => {
    return $selectedMonsters;
});