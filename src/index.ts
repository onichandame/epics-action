import { info, error, setFailed } from "@actions/core"
import { exec } from "@actions/exec"
;(async () => {
  try {
    info("starting example IOC server")
    if (
      (await exec("sudo", [
        "docker",
        "run",
        "-p",
        "5064:5064",
        "onichandame/epics:example",
      ])) !== 0
    )
      throw new Error(`failed to start container`)
    info("example IOC started")
  } catch (e) {
    error(`failed to start IOC due to ${JSON.stringify(e.message || e)}`)
    setFailed(e)
  }
})()
