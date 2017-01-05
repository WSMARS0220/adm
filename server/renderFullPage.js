export default function renderFullPage (componentHTML) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>ADM</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <link rel="shortcut icon" type="image/png" href="http://tfwiki.net/mediawiki/images2/f/fe/Symbol_autobot_reg.png"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>
        <!--add when needed
        <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
          comes into play with mobile css
        <link rel='stylesheet' media='screen and (max-width: 400px)' href='mobile.css' />
          -->
      </head>
      <body>
        <div id="app">${componentHTML}</div>
        <script type="application/javascript" src="/bundle.js"></script>
        <canvas id="canvas"></canvas>
      </body>
    </html>
  `

  return html
}
