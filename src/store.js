import { string } from 'i/lib/util'
import { reactive } from 'vue'

export const store = reactive({
    // url della chiamata api
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    // array vuoto cove stampare ciò che ci ritorna la chiamata api
    cards: [],
    apiUrlArchetypes: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypesArr: [],
    // selectSearch: "",
    // // cercare il valore specifico che sta cercando l'utente
    // apiNameParameter: "name"
})