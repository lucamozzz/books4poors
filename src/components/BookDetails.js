import React from 'react';
import BookDetailsCSS from '../style/BookDetails.module.css';

export const BookDetails = () => {
    return (
        <>
            {
                Object.keys(BOOK).length === 0 ? <h1>Loading...</h1> :
                    <div className={BookDetailsCSS.container}>
                        <img src={BOOK.volumeInfo.imageLinks.thumbnail} alt="Book cover" />
                        <h2>{BOOK.volumeInfo.title}</h2>
                        <h3>{BOOK.volumeInfo.authors}</h3>
                        <h6>{BOOK.volumeInfo.publisher}</h6>
                        <h6>{BOOK.volumeInfo.publishedDate}</h6>
                        <h4>Description</h4>
                        <p>{BOOK.volumeInfo.description}</p>
                    </div>
            }
        </>
    );
}

export default BookDetails;

const BOOK = {
    "kind": "books#volume",
    "id": "9CJWTbd-RYoC",
    "etag": "QKDlSd2wO/o",
    "selfLink": "https://content-books.googleapis.com/books/v1/volumes/9CJWTbd-RYoC",
    "volumeInfo": {
        "title": "Harry Potter e la Pietra Filosofale",
        "authors": [
            "J.K. Rowling"
        ],
        "publisher": "Pottermore Publishing",
        "publishedDate": "2015-12-08",
        "description": "\u003cp\u003eHarry Potter è un ragazzo normale, o quantomeno è convinto di esserlo, anche se a volte provoca strani fenomeni, come farsi ricrescere i capelli inesorabilmente tagliati dai perfidi zii. Vive con loro al numero 4 di Privet Drive: una strada di periferia come tante, dove non succede mai nulla fuori dall’ordinario. Finché un giorno, poco prima del suo undicesimo compleanno, riceve una misteriosa lettera che gli rivela la sua vera natura: Harry è un mago e la Scuola di Magia e Stregoneria di Hogwarts è pronta ad accoglierlo...\u003c/p\u003e",
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
            "smallThumbnail": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71CamEbyjUxWFrxrnoDlsHqfpddltRP3IozvBrPR07CMkpbNY-um9mevpmz4WYPwx2ii3LUzd4qBbFCmZU1kCAzX3Lb8Ofv2W6xztow9ncY76z-hHQ&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73Sl7B9Rk-tGJMU8V7IKyK5rFRCxVxPll9LZOuvGPzIsC_vMXj-PUYsFVAweHgT4LHJTxJHspDU_hUc4N2Qg7Q-hAVaDQYoYZdJOflagkI_h8pufvM&source=gbs_api",
            "small": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE70aYdJGNGd1FnVr2rD2DNv8UZSpghxtkTZZv7jPUjGF0BWwrwmNa66fOyPvyxGRvZui2v_b-ZYzhpaaouqD8nfSInE0YHs7c5Hv5jvROBwy8812hpA&source=gbs_api",
            "medium": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=3&edge=curl&imgtk=AFLRE70rpsLl9ilVQ4W1OnrHFvr0yj9tV-NNOrGCtr6ZRxXcsxpojTIe39CjCf6mXgLEF321_9eeMqnz9A6CZv_HlqLa3ZGuSL8msf3FTLTwcZhMvCoNu5I&source=gbs_api",
            "large": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE73xqRJVcJy2b5z0kftgjnnqnnScTycYUvUM48fZFaViOZj3FoAxgHvwhhJ_D3fcI88B3nuJ55bCyg6Ud7gu4EIMb1vCCZh1yegSC-GONCWJspm8M2E&source=gbs_api",
            "extraLarge": "http://books.google.com/books/content?id=9CJWTbd-RYoC&printsec=frontcover&img=1&zoom=6&edge=curl&imgtk=AFLRE70-TJKtQe9gC17XCfNWEHRPVcGQpjAPrWiPEF2NUQvuk_v_-YM8cFKmma2oYM8Hb4ABvNH46_X25SN4I7hOw0tLj2hrYSzoezApPAc0dOHZvZGKCdY&source=gbs_api"
        },
        "previewLink": "http://books.google.it/books?id=9CJWTbd-RYoC&hl=&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=9CJWTbd-RYoC&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=9CJWTbd-RYoC"
    },
    "layerInfo": {
        "layers": [
            {
                "layerId": "geo",
                "volumeAnnotationsVersion": "25"
            }
        ]
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
    }
}