import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";

const site = lume({ src: "src/" });
site.copy("u").copy("s.css").use(date());

export default site;
