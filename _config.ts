import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import inline from "lume/plugins/inline.ts";

const site = lume({ src: "src/" });
site.copy("u").use(date()).use(inline());

export default site;
