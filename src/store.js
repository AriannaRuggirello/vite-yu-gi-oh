import { string } from 'i/lib/util'
import { reactive } from 'vue'

export const store = reactive({
    // url della chiamata api
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    // array vuoto cove stampare ciò che ci ritorna la chiamata api
    cards: []
})