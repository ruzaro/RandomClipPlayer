const CONFIG_FILE_PATH = 'config.txt'

const BROADCAST_CHANNEL_NAME = "clip_player_description_sync"

const CHECKBOX_KEYS = ["SHOW_CLIP_CREATORS", "SHOW_CLIP_GAME", "SHOW_CLIP_TITLE"]

async function fileExists(url) {
    try {
        const response = await fetch(url, { method: "HEAD" });
        return response.ok;
    } catch (error) {
        return false;
    }
}

async function readGlobalConfig() {
    if (!await fileExists(CONFIG_FILE_PATH)){
        throw new Error("Config file missing: " + CONFIG_FILE_PATH)
    }

    let ret = {};

    let text = await (await fetch(CONFIG_FILE_PATH)).text();

    const lines = text.split('\n');

    for (let line of lines) {
        const s = line.split(/=(.*)/s)

        if (s.length < 2) continue;

        const key = s[0].trim().replace(/\r/g, "");
        const value = s[1].trim().replace(/\r/g, "");

        ret[key] = value;
    }

    return ret;
}