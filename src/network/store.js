const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch() {
            if (JSON.parse(window.sessionStorage.getItem(STORAGE_KEY || '[]'))) {
                return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))
            } else {
                var theItems = new Array();
                return theItems
            }
        },
        save(items) {
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        }
}