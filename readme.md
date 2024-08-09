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
    ├── _includes     <- includes directory
    │   ├── layouts   <- layouts directory
    │   │   ├── a.vto <- article layout
    │   │   ├── b.vto <- base layout
    │   │   └── p.vto <- page layout
    │   └── templates <- templates directory
    │       └── n.vto <- nevbar template
    ├── a.vto         <- the about file
    ├── b.vto         <- the blog file
    ├── index.vto     <- the index file
    ├── p.vto         <- the projects file
    ├── b             <- blog directory
    │   ├── _data.yml <- important data for the posts
    │   └── *.md      <- all markdown files
    ├── u             <- upload directory
    │   ├── _data.yml <- data
    │   └── *.*       <- all uploaded files
    └── s.css         <- the main style file
```
