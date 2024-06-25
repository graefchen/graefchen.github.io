import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

import anchor from "npm:markdown-it-anchor";
import footnote from "npm:markdown-it-footnote";

const markdown = {
  plugins: [
    [
      anchor,
      {
        level: 1,
        permalink: anchor.permalink.linkInsideHeader({
          symbol: `<span aria-hidden="true">#</span>`,
          placement: "before",
        }),
      },
    ],
    footnote,
  ],
};

const site = lume({ src: "src/" }, { markdown });
site
  .use(date())
  .use(readingInfo())
  .use(
    codeHighlight({
      theme: {
        name: "github-dark-dimmed",
        path: "/_includes/style/ct.css",
      },
    })
  )
  .use(lightningCss())
  .use(minifyHTML());

export default site;
