import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume({ src: "src/" });
site
  .use(date())
  .use(lightningCss())
  .use(minifyHTML())
  .use(readingInfo())
  .use(
    codeHighlight({
      theme: {
        name: "github-dark-dimmed",
        path: "/_includes/style/ct.css",
      },
    })
  );

export default site;
