const bevy_modules = [
    "a11y",
    "animation",
    "app",
    "asset",
    "audio",
    "core",
    "core_pipeline",
    "diagnostic",
    "ecs",
    "gilrs",
    "gltf",
    "hierarchy",
    "input",
    "log",
    "math",
    "pbr",
    "prelude",
    "ptr",
    "reflect",
    "render",
    "scene",
    "sprite",
    "tasks",
    "text",
    "time",
    "transform",
    "ui",
    "utils",
    "window",
    "winit"]

const jumps = {}
bevy_modules.forEach((module) => jumps[module] = "bevy_" + module)

const regex = /^https:\/\/docs\.rs\/bevy\/([^\/]+)\/bevy\/([^\/]+)\/(.+.html)/gm

function main() {
    const url = window.location.href
    console.log(url);

    const matchings = [... url.matchAll(regex)]

    if (matchings.length == 0) {
        return
    } 

    const match = matchings[0]

    const version = match[1]
    const module = match[2]
    const item = match[3]

    const target_module = jumps[module]
    if (!target_module) {
        return
    }

    const target = `https://docs.rs/${target_module}/${version}/${target_module}/${item}`

    window.location.replace(target)
}

main()
