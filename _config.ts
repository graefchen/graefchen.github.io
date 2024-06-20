import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import sass from "lume/plugins/sass.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import readingInfo from "lume/plugins/reading_info.ts";

const site = lume({ src: "src/" });
site.use(date()).use(sass()).use(minifyHTML()).use(readingInfo());

export default site;
