# `hrmp` Configuration

`hrmp` configuration happens [through the CLI arguments](./command_line_flags.md), or through the configuration file `hrmp.conf`.

`hrmp.conf` (or any preferrable name) is a file detailing configuration of `hrmp` when executed, and [can be specified as part](./command_line_flags.md) of the arguments passed to it in the CLI.

In this file, there is one [primary section](#primary-section) followed by any number of [device sections](#device-section).

## Sections

The configuration file is divided into sections. Sections are written with their names like:

```
[section-name]
```
and beneath this are key-value pairs for various configurations.

### Primary section

The primary section has the name `hrmp`, and it contains configurations enlisted in the table.

| Property | Default | Unit | Required | Description |
|:---|:---|:---|:---|:---|
| device | | String | No | The default device name |
| log_type | console | String | No | The logging type (console, file, syslog) |
| log_level | info | String | No | The logging level, any of the (case insensitive) strings `FATAL`, `ERROR`, `WARN`, `INFO` and `DEBUG` (that can be more specific as `DEBUG1` thru `DEBUG5`). Debug level greater than 5 will be set to `DEBUG5`. Not recognized values will make the log_level be `INFO` |
| log_path | hrmp.log | String | No | The log file location. Can be a strftime(3) compatible string. |
| log_line_prefix | %Y-%m-%d %H:%M:%S | String | No | A strftime(3) compatible string to use as prefix for every log line. Must be quoted if contains spaces. |
| log_mode | append | String | No | Append to or create the log file (append, create) |
| update_process_title | `verbose` | String | No | The behavior for updating the operating system process title. Allowed settings are: `never` (or `off`), does not update the process title; `strict` to set the process title without overriding the existing initial process title length; `minimal` to set the process title to the base description; `verbose` (or `full`) to set the process title to the full description. Please note that `strict` and `minimal` are honored only on those systems that do not provide a native way to set the process title (e.g., Linux). On other systems, there is no difference between `strict` and `minimal` and the assumed behaviour is `minimal` even if `strict` is used. `never` and `verbose` are always honored, on every system. On Linux systems the process title is always trimmed to 255 characters, while on system that provide a natve way to set the process title it can be longer. |

### Device Section

Each device section can be given any **unique** name and it may contain configurations as listed in the table below.

| Property | Default | Unit | Required | Description |
|---|---|---|---|---|
| device | | String | Yes | The device address |
| description | | String | No | The description of the device |
