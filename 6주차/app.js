document.addEventListener('DOMContentLoaded', () => {
    const publickey = "ef225580c8735b0bfb3c080ef16819ef";
    const privatekey = "15d3ae62ae9b94bd3c8894849e766f6fd0626287";
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + privatekey + publickey).toString();
    const url = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publickey}&hash=${hash}`;

    function fetchComics() {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(response => resolve(response.data.data.results))
                .catch(error => reject(error));
        });
    }

    function displayComics(comics) {
        const comicsContainer = document.getElementById('comics');
        comics.forEach(comic => {
            const comicDiv = document.createElement('div');
            comicDiv.className = 'comic';
            
            const title = document.createElement('h2');
            title.textContent = comic.title;
            comicDiv.appendChild(title);
            
            const img = document.createElement('img');
            img.src = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
            comicDiv.appendChild(img);
            
            comicsContainer.appendChild(comicDiv);
        });
    }

    function init() {
        fetchComics()
            .then(comics => displayComics(comics))
            .catch(error => console.error('Error fetching comics:', error));
    }

    init();
});
