---
outline: deep
---

# Installation

## Dependencies

`hrmp` requires the following dependencies:
* [clang](https://clang.llvm.org/)
* [cmake](https://cmake.org)
* [make](https://www.gnu.org/software/make/)
* [ALSA](https://www.alsa-project.org/wiki/Main_Page)
* [libsndfile](https://libsndfile.github.io/libsndfile/)
* [rst2man](https://docutils.sourceforge.io/)
* [pandoc](https://pandoc.org/)
* [texlive](https://www.tug.org/texlive/)

These can be obtained using:
```sh
$ dnf install git gcc clang clang-analyzer cmake make python3-docutils libasan libasan-static alsa-lib alsa-lib-devel libsndfile libsndfile-devel
```

## Install pgexporter

Installation can be done by [building it from source](#building-from-source) and installing it.

### Building From Source

### Clone

Clone the repository:

```sh
$ git clone https://github.com/HighResMusicPlayer/hrmp.git
$ cd hrmp
```

Then, follow the respective instructions if you want a [Release build](#release-build) (for production use) or a [Debug build](#debug-build) (for development use).

### Release Build

```sh
$ mkdir build
$ cd build
$ cmake -DCMAKE_INSTALL_PREFIX=/usr/local ..
$ make
$ sudo make install
```

### Debug Build

```sh
$ mkdir build
$ cd build
$ cmake -DCMAKE_BUILD_TYPE=Debug ..
$ make
$ sudo make install # Optional but recommended step for testing
```

## Check Installation

Make sure that hrmp is installed and in your `PATH` by using `hrmp -?` and you should see

```
hrmp 0.5.0
  High resolution music player

Usage:
  hrmp <FILES>

Options:
  -c, --config CONFIG_FILE   Set the path to the hrmp.conf file
                             Default: $HOME/.hrmp/hrmp.conf
  -D, --device               Set the device name
  -R, --recursive            Add files recursive of the directory
  -I, --sample-configuration Generate a sample configuration
  -s, --status               Status of the devices
      --dop                  Use DSD over PCM
  -q, --quiet                Quiet the player
  -V, --version              Display version information
  -?, --help                 Display help

hrmp: https://hrmp.github.io/
Report bugs: https://github.com/HighResMusicPlayer/hrmp/issues
```
