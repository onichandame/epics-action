# EPICS Actions

Start an example EPICS IOC server.

# Author

[onichandame](https://onichandame.com)

# Usage

```yaml
name: Test
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    name: Test

    steps:
      - name: Create EPICS IOC Server
        uses: onichandame/epics-action@master # root:aiExample for read-only auto-changing and root:aoExample for read-write integer between 0-9

      - name: test your code here
```
