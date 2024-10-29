// 프로그래밍 언어 책 로딩 (XML 데이터)
fetch('./data/programming.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const books = xml.getElementsByTagName('book');
        const bookList = document.getElementById('programming-books');

        Array.from(books).forEach(book => {
            const title = book.getElementsByTagName('title')[0].textContent;
            const price = book.getElementsByTagName('price')[0].textContent;

            const bookItem = document.createElement('div');
            bookItem.innerHTML = `<h3>${title}</h3><p>${price}원</p>`;
            bookList.appendChild(bookItem);
        });
    });

// 에세이 책 로딩 (JSON 데이터)
fetch('./data/essay.json')
    .then(response => response.json())
    .then(data => {
        const bookList = document.getElementById('essay-books');

        data.books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.innerHTML = `<h3>${book.title}</h3><p>${book.price}원</p>`;
            bookList.appendChild(bookItem);
        });
    });
