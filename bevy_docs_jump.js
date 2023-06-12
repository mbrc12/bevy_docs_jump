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
    let item = match[3]

    const target_module = jumps[module];
    if (!target_module) {
        return
    }
    
    if (module.startsWith("prelude")) {
        return
    }

    let url_text = '⌲'

    if (item.startsWith("prelude")) {
        item = "index.html"
        url_text = '⇧' + url_text
    }

    const target = `https://docs.rs/${target_module}/${version}/${target_module}/${item}`
    
    const heading = document.getElementById("main-content").getElementsByClassName("main-heading").item(0).getElementsByTagName("h1").item(0)
    if (!heading) {
        return
    }

    heading.innerHTML += `<a href = '${target}' style = "text-decoration: none;">${url_text}</a>`
}

main()
