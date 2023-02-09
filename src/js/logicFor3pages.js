//заповнення локального сховища значеннями за замовчуванням
export function fillLocalStorageIfEmpty() {
    if(localStorage.length === 0) {
        localStorage.lang = 'en';
        localStorage.theme = 'light';
        localStorage.auth = 'no';
        localStorage.favorite = [];
        localStorage.read = [];
    };
};



