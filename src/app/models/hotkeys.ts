export class Hotkey {
    constructor(public name: string, public defaultCombination?: string) { }
}

export const Hotkeys: Hotkey[] = [
    new Hotkey("Start/Stop Recording", "Alt + F9"),
    new Hotkey("Pause/Resume Recording", "Shift + F9"),
    new Hotkey("Take ScreenShots", "PrintScreen"),
    new Hotkey("Take ScreenShot of Active Window", "Alt + PrintScreen"),
    new Hotkey("Take ScreenShot of Desktop", "Shift + PrintScreen"),
    new Hotkey("Toggle Mouse Clicks", "Alt + F10"),
    new Hotkey("Toggle Keystrokes", "Alt + F11"),
    new Hotkey("ScreenShot (Region)"),
    new Hotkey("ScreenShot (Window)"),
    new Hotkey("ScreenShot (Screen)")
];