import React, { Component } from 'react'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.error(e)
  }
}

class HTML extends Component {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }

    const description = 'Jesse has things to say.'

    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta name="description" content={description} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@jesse_stuart" />
          <meta name="twitter:creator" content="@jesse_stuart" />

          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="Jesse Stuart" />
          <meta property="og:type" content="article" />

          <meta itemProp="description" content={description} />

          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

module.exports = HTML
