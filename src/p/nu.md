---
date: 2024-07-14
draft: false
---

# I &#x1F496; Nushell

I really really like **Nushell**.

From the shells I have used on Windows nushell is simply one of the best.

While the scripting with it is sometimes very frustrating and very hard, it has
inbuild completion and helping pages.

## Scripting

That means, that you do not need to write a document for all user of the
command. So if we have a script file called `greet.nu` with the code of:

```
extern def greet [name] {
  ['hello' $name]
}
```

You load the script with:

```
> source greet.nu
```

and then can call:

```
> greet --help
```

and you get an help script printed out.

That is very neat.

But you should be very aware that Nushell isn't like bash and does not interpret
a script in a "traditional" way, but compiles it into and IR language and then
runs it [^1].

## Externs

But the in my opinion best part of Nushell are extern commands.

That means you write some code into a shell to get more information on the
commands and have a way better user experience when using NUshell.

This can be explained with for example `git`.

So when there are no extern commands and you use git in the Nushell command line
and use the `Tab`-key for the Completions menu, it would look like this (on
Windows):

```
> | git
git.exe               git-gui.exe           git-k.exe
```

But when we have a external file[^2] with following code and that is loaded in
the `config.nu` file:

```
# Delete file from the working tree and the index
export extern "git rm" []
# Stage files
export extern "git add" []
# List commits
export extern "git log" []
```

And you use the Completions menu again, it will look like following:

```
> | git
git rm                Delete file from the working tree and the index
git add               Stage files
git log               List commits
git.exe
git-gui.exe
git-k.exe
```

And now you can directly get an command and switch to it with the arrow keys.

> And that is the reason why I love Nushell.

[^1]: [how nushell code gets run](https://www.nushell.sh/book/how_nushell_code_gets_run.html#parsing-and-evaluation)
[^2]: [externs](https://www.nushell.sh/book/externs.html)
