// place files you want to import through the `$lib` alias in this folder.
import { writable , type Writable} from "svelte/store";
import type { IndexMonster} from '../routes/+page'

export const caughtMonsters: Writable<IndexMonster[]> = writable([]);