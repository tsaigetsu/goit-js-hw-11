 export function searchImg(query) {
    const mainUrl = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: '43997530-fac9ffe50b9517751943b9e7a',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `${mainUrl}?${params}`;
    return fetch(url)
        .then(res => {
            if (!res) {
                throw new Error(res.statusText);
            }
            return res.json();
    })
};