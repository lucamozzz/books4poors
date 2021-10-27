import React from 'react';
import Book from './Book';
import BooksCSS from '../style/Books.module.css';

const Books = () => {
    return (
        <div className={BooksCSS.container}>
            {BOOKS.length === 0 ? (<h1>Loading...</h1>) :
                BOOKS.map(book => {
                    let { id } = book;
                    let { title, authors } = book.volumeInfo;
                    let { smallThumbnail } = book.volumeInfo.imageLinks;
                    return (
                        <Book
                            key={id}
                            title={title}
                            authors={authors}
                            thumbnail={smallThumbnail} />
                    );
                })}
        </div>
    )
}

export default Books;

const BOOKS = [
    {
        "kind": "books#volume",
        "id": "9CJWTbd-RYoC",
        "etag": "kTT6NdryDnw",
        "selfLink": "https://content-books.googleapis.com/books/v1/volumes/9CJWTbd-RYoC",
        "volumeInfo": {
            "title": "Harry Potter e la Pietra Filosofale",
            "authors": [
                "J.K. Rowling"
            ],
            "publisher": "Pottermore Publishing",
            "publishedDate": "2015-12-08",
            "description": "Harry Potter è un ragazzo normale, o quantomeno è convinto di esserlo, anche se a volte provoca strani fenomeni, come farsi ricrescere i capelli inesorabilmente tagliati dai perfidi zii. Vive con loro al numero 4 di Privet Drive: una strada di periferia come tante, dove non succede mai nulla fuori dall’ordinario. Finché un giorno, poco prima del suo undicesimo compleanno, riceve una misteriosa lettera che gli rivela la sua vera natura: Harry è un mago e la Scuola di Magia e Stregoneria di Hogwarts è pronta ad accoglierlo...",
            "readingModes": {
                "text": true,
                "image": true
            },
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": true,
            "contentVersion": "1.11.13.0.preview.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "previewLink": "http://books.google.it/books?id=9CJWTbd-RYoC&pg=PP1&dq=harry+potter&hl=&cd=1&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=9CJWTbd-RYoC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=9CJWTbd-RYoC"
        },
        "saleInfo": {
            "country": "IT",
            "listPrice": {
                "amount": 8.99,
                "currencyCode": "EUR"
            },
            "retailPrice": {
                "amount": 8.99,
                "currencyCode": "EUR"
            },
            "buyLink": "https://play.google.com/store/books/details?id=9CJWTbd-RYoC&rdid=book-9CJWTbd-RYoC&rdot=1&source=gbs_api",
            "offers": [
                {
                    "finskyOfferType": 1,
                    "listPrice": {
                        "amountInMicros": 8990000,
                        "currencyCode": "EUR"
                    },
                    "retailPrice": {
                        "amountInMicros": 8990000,
                        "currencyCode": "EUR"
                    }
                }
            ]
        },
        "accessInfo": {
            "country": "IT",
            "epub": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.it/books/download/Harry_Potter_e_la_Pietra_Filosofale-sample-epub.acsm?id=9CJWTbd-RYoC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "acsTokenLink": "http://books.google.it/books/download/Harry_Potter_e_la_Pietra_Filosofale-sample-pdf.acsm?id=9CJWTbd-RYoC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
            },
            "accessViewStatus": "SAMPLE"
        },
        "searchInfo": {
            "textSnippet": "Harry Potter è un ragazzo normale, o quantomeno è convinto di esserlo, anche se a volte provoca strani fenomeni, come farsi ricrescere i capelli inesorabilmente tagliati dai perfidi zii."
        }
    },
    {
        "kind": "books#volume",
        "id": "xXNEzQEACAAJ",
        "etag": "Ak1kUbtdqGY",
        "selfLink": "https://content-books.googleapis.com/books/v1/volumes/xXNEzQEACAAJ",
        "volumeInfo": {
            "title": "Harry Potter 06 e il principe mezzosangue",
            "authors": [
                "Joanne K. Rowling"
            ],
            "publishedDate": "2020-01-23",
            "readingModes": {
                "text": false,
                "image": false
            },
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=xXNEzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=xXNEzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "previewLink": "http://books.google.it/books?id=xXNEzQEACAAJ&dq=harry+potter&hl=&cd=2&source=gbs_api",
            "infoLink": "http://books.google.it/books?id=xXNEzQEACAAJ&dq=harry+potter&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_06_e_il_principe_mezzosangu.html?hl=&id=xXNEzQEACAAJ"
        },
        "saleInfo": {
            "country": "IT"
        },
        "accessInfo": {
            "country": "IT",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "accessViewStatus": "NONE"
        },
        "searchInfo": {
            "textSnippet": "È il sesto anno a Hogwarts e per Harry niente è più come prima."
        }
    },
    {
        "kind": "books#volume",
        "id": "UFlEzQEACAAJ",
        "etag": "30d4c+OIAlo",
        "selfLink": "https://content-books.googleapis.com/books/v1/volumes/UFlEzQEACAAJ",
        "volumeInfo": {
            "title": "Harry Potter 02 e la camera dei segreti",
            "authors": [
                "Joanne K. Rowling"
            ],
            "publishedDate": "2020-01-23",
            "readingModes": {
                "text": false,
                "image": false
            },
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=UFlEzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=UFlEzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "previewLink": "http://books.google.it/books?id=UFlEzQEACAAJ&dq=harry+potter&hl=&cd=3&source=gbs_api",
            "infoLink": "http://books.google.it/books?id=UFlEzQEACAAJ&dq=harry+potter&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Harry_Potter_02_e_la_camera_dei_segreti.html?hl=&id=UFlEzQEACAAJ"
        },
        "saleInfo": {
            "country": "IT"
        },
        "accessInfo": {
            "country": "IT",
            "epub": {
                "isAvailable": false
            },
            "pdf": {
                "isAvailable": false
            },
            "accessViewStatus": "NONE"
        }
    },
];

