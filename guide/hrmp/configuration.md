---
outline: deep
---

# Configuration

Assuming `hrmp` has been installed, it needs some configurations before it can be used.

## hrmp.conf

A `hrmp.conf` file is required to specify some information to `hrmp`. Create a `hrmp.conf` file by using the `hrmp -I` command.

Then move the file to the `~/.hrmp` directory

```sh
mkdir ~/.hrmp/
mv hrmp.conf ~/.hrmp/
```

A breakdown of this configuration file can be viewed [here](../../docs/hrmp/configuration.md#hrmp-configuration) for understanding its components.

## Running hrmp

You can run `hrmp` like

```sh
$ hrmp mymusic.dsf
```
