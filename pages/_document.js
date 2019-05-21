
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

const htmlStyle = {
  padding: 0,
  margin: 0,
  height: '100%',
  WebkitTextSizeAdjust: '100%',
};

const bodyStyle = {
  padding: 0,
  margin: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'whitesmoke',
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html style={ htmlStyle } lang="en">
        <Head></Head>
        <body style={ bodyStyle }>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;