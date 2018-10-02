export class ScreenShot {
    constructor(public name: string, public lightUrl: string, public darkUrl: string) { }
}

function local(fileName: string, name?: string) {
    let base = "assets/ScreenShots/" + fileName;

    return new ScreenShot(name || fileName, base + ".png", base + "-Dark.png")
}

export const Home = local("Home");

export const ScreenShots: ScreenShot[] = [
    Home,
    local("Collapsed"),
    local("ScreenShot"),
    local("Recent"),
    local("Proxy"),
    local("FFmpeg"),
    local("Configure"),
    new ScreenShot("Configure | Hotkeys", "https://i.imgur.com/vHo6CTM.png", "https://i.imgur.com/pHQ1hJD.png"),
    new ScreenShot("Configure | Overlays", "https://i.imgur.com/WjSciZd.png", "https://i.imgur.com/zWaSRaw.png")    
];