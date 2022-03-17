import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ModalContext } from 'context/modalContext';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <ModalContext.Provider>
            <Main />
          </ModalContext.Provider>
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}
