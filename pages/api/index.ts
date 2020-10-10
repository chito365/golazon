import { NextApiRequest, NextApiResponse } from "next";
import { MAX_CACHE_TIME } from "lib/config";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Cache-Control",
    `s-maxage=${MAX_CACHE_TIME}, stale-while-revalidate`
  );
  res.status(200).send(content());
};

function content() {
  const API_FUNCTIONS = [
    {
      name: "competitions?q=QUERY",
      returnType: "array",
      example: "competitions?q=argentina",
    },
    {
      name: "teams/ID",
      returnType: "{ team_id, type, name, competitions, fixtures }",
      example: "teams/8vjk",
    },
  ];

  const functionList = API_FUNCTIONS.map(({ name, returnType, example }) =>
    `
    <li>
      <code class="marker">${name}</code> ${returnType},
      eg. <a href="/api/${example}" target="_blank">/api/${example}</a>
    </li>
  `.trim()
  ).join("");

  const page = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Golazon API</title>
      <style>
        /*! https://kokushin.github.io/mono.css/ */
        /*! mono.css v1 | MIT License | Copyright 2017 @kokushing */@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700");*,*:before,*:after{box-sizing:border-box}body{margin:0;font-family:'Source Code Pro', monospace;font-size:100%;line-height:1.8}a{color:#757575}a:hover{text-decoration:none}.inner{max-width:1240px;margin:0 auto;padding:0 20px;position:relative}@media screen and (max-width: 768px){.inner{max-width:initial}}.marker{display:inline-block;background:#000;color:#fff;padding:0 4px}._black .marker{background:#fff;color:#000}hr{height:0;border:0;margin:56px 0;box-sizing:content-box;overflow:visible;border-top:1px solid #eee}._center{text-align:center}._black{background:#000;color:#fff}.header{padding:80px 0}.header p{margin:32px 0 0}.header-logo{display:inline-block;margin:0;padding:0 8px;font-size:2rem;line-height:1;background:#000;color:#fff}.footer{padding:80px 0}.footer .inner{display:flex;align-items:center}.footer .sns{display:flex}.footer .sns a{display:block;margin-left:1em}.menu{padding:24px 0;background:#000;line-height:1}@media screen and (max-width: 768px){.menu{padding:0}}.menu .inner{display:flex}@media screen and (max-width: 768px){.menu .inner{padding:0 10px;overflow-x:scroll;-webkit-overflow-scrolling:touch}}._center .menu .inner{justify-content:center}.menu a{display:block;color:#fff}@media screen and (max-width: 768px){.menu a{padding:24px 10px}}.menu a+a{margin:0 0 0 32px}@media screen and (max-width: 768px){.menu a+a{margin:0}}.section{padding:112px 0}@media screen and (max-width: 768px){.section{padding:72px 0}}.section:nth-child(2n){background:#f5f5f5}.section .inner>*:first-child{margin:0}.section *+h1,.section *+h2,.section *+h3,.section *+h4,.section *+h5,.section *+h6{margin:calc(56px - (((1rem * 1.8) - 1rem) / 2)) auto 0}figure{max-width:800px;text-align:center;margin:calc(56px - (((1rem * 1.8) - 1rem) / 2)) auto 0}figure+*{margin:calc(56px - (((1rem * 1.8) - 1rem) / 2)) auto 0}figure img{max-width:100%;max-height:800px;-webkit-filter:grayscale(100%);filter:grayscale(100%);vertical-align:bottom}figure figcaption{color:#757575;padding-left:16px;border-left:4px solid #f5f5f5;margin-top:1em;text-align:left}pre{background:#000;overflow-x:scroll;margin:calc(56px - (((1rem * 1.8) - 1rem) / 2)) auto 0}pre+*{margin:calc(56px - (((1rem * 1.8) - 1rem) / 2)) auto 0}pre code{display:block;color:#fff;font-family:monospace;padding:1em 1.5em}.section ul{margin:calc(56px - (((1rem * 1.8) - 1rem) / 2)) auto 0}blockquote{color:#757575;padding-left:16px;border-left:4px solid #f5f5f5;margin:calc(56px - (((1rem * 1.8) - 1rem) / 2)) auto 0}
      </style>
    </head>
    <body>
      <header class="header">
        <div class="inner">
          <div class="header-logo">Golazon API</div>
          <p>mnmlist football data api</p>
        </div>
      </header>

      <nav class="menu">
        <div class="inner">
          <a href="#usage">Usage</a>
          <a href="#glossary">Glossary</a>
          <a href="#license">License</a>
          <a href="/" target="_blank">Golazon &gt;</a>
        </div>
      </nav>

      <main class="content">
        <section class="section" id="usage">
          <div class="inner">
            <h2>USAGE</h2>
            <p><span class="marker">https://golazon.com/api/</span></p>
            <ul>
              ${functionList}
            </ul>
          </div>
        </section>

      <section class="section" id="glossary">
        <div class="inner">
          <h2>GLOSSARY</h2>
          <ul>
            <li>fixtures - basic match info, max 100 items</li>
          </ul>
        </div>
      </section>

        <section class="section" id="license">
          <div class="inner">
            <h2>LICENSE</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
              IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
              OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
              ARISING FROM, OUT OF OR IN CONNECTION WITH THE SERVICE OR THE USE OR
              OTHER DEALINGS IN THE SERVICE.
            </p>
          </div>
        </section>
      </main>
    </body>
    </head>
    </html>
  `.trim();

  return page;
}
