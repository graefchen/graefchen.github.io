# graefchen.github.io

Just my small little webblog.

## Commands:

Filetree:

```bash
> lsd --tree -I _site
# or without icons
> lsd --tree -I _site --icon never
```

Build site:

```bash
> deno task lume
# or
> deno task build
```

Serve site:

```bash
> deno task serve
```

## Files/Directorys:

```
.                     <- root directory
├── _config.ts        <- lume configuration file
├── deno.json         <- deno configuration file
├── deno.lock         <- deno lock file
├── readme.md         <- the readme file
└── src               <- src directory for the website code
    ├── 404.vto       <- Error 404 template file
    ├── _includes     <- folder for all includes for LUme
    │   ├── layouts   <- layouts dir for all Vento layouts
    │   │   ├── a.vto <- article template file
    │   │   └── b.vto <- base template file
    │   └── style     <- style dir for css/scss files
    │       └── r.css <- css reset
    ├── index.vto     <- the template file layout
    ├── p             <- all post
    │   ├── _data.yml <- important data for the posts
    │   └── *.md      <- all markdown files
    └── s.css         <- the main style file
```
