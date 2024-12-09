import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import inline from "lume/plugins/inline.ts";
import footnote from "npm:markdown-it-footnote";

const markdown = { plugins:[footnote] };
const site = lume({ src: "src/" },{ markdown });
site.copy("u").use(date()).use(inline());

export default site;
