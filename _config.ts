import lume from "lume/mod.ts";

const site = lume({ src: "src/" });
site.copy("u").copy("s.css");

export default site;
