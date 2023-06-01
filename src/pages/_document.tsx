// This code prevents a Flash Of Unstyled Content (FOUC)
// on load. Without it, the styles are only added once
// react loads on the frontend

import React from 'react'
import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import Script from 'next/script'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>,
        ],
      }
    } finally {
      sheet.seal()
    }
  }
  render(): JSX.Element {
    return (
      <Html lang="es">
        <Head>{/* Tag manager y Analytics */}</Head>
        <body>
          {/* <!-- Messenger Chat plugin Code --> */}
          <div id="fb-root"></div>

          {/* <!-- Your Chat plugin code --> */}
          <div id="fb-customer-chat" className="fb-customerchat"></div>
          <Script
            id="messenger-tag"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "635345120196608");
              chatbox.setAttribute("attribution", "biz_inbox");`,
            }}
          ></Script>
          <Script
            id="messenger-sdk"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: ` window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v17.0'
                });
              };
        
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));`,
            }}
          ></Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
