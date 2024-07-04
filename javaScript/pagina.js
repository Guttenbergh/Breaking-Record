document.addEventListener('DOMContentLoaded', function () {
    window.abriPag = function (url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                const newContent = doc.querySelector('body').innerHTML;

                // Substitui o conteúdo da seção .conteudo pelo conteúdo de moeda.html
                document.querySelector('.conteudo').innerHTML = newContent;
            })
            .catch(error => {
                console.error('Error fetching the page: ', error);
            });
    }
});
