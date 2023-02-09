export function fillLocalStorageIfEmpty() {
    console.log(localStorage);
    if(localStorage.length === 0) {
        localStorage.lang = 'en';
        localStorage.auth = 'no';
    };
}



