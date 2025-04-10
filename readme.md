# Random Clip Player
A simple random Twitch clip player to use in OBS.

# Setup
You are required to create a Twitch developer application in order for this to function.
If you have already created one and have the Client ID and Client Secret, skip to Step 8.

1. Visit https://dev.twitch.tv/ and Login.
2. Press "Your Console" in the top right.
3. Under "Applications" press "Register Your Application"
4. Give it any name, it doesn't matter. Select the most appropriate category, or just "Other."
5. As an "OAuth redirect URL" is required, enter a link to any website - preferably one you own, or just enter a link to google (https://google.com/). **The app doesn't use this so it's not important.**
6. Press "Create"
7. Once created, press "Manage" and scroll to the bottom of the page. **Take note of the "Client ID" and "Client Secret"** (press new secret if there isn't one there)
8. Now, download the `clipPlayer.html` file and the `clipDescription.html` file from [here](todo). Save those files somewhere accessible.
9. Create the `config.txt` file. It needs to be located next to other players.
10. Open the `config.txt` file in a text editor of your choice.
11. Add `CLIENT_ID = `, `CLIENT_SECRET = ` and `BROADCASTER_NAME = ` lines to the `config.txt` file.
12. Enter the Client ID and Client Secret on the `CLIENT_ID = ` and `CLIENT_SECRET = ` lines to the right of `=` respectively.
13. Enter your Twitch username on `BROADCASTER_NAME = ` line to the right of `=`.
14. Add any optional configuration lines to the `config.txt` file.
15. Once this is complete, save and close the `config.txt` file.
16. In OBS, add the 'clipPlayer.html' file as a Browser Source. You need to tick "local file" in order for this to be possible.
17. In OBS, adjust the width and height of the Browser Source in the "Properties" panel rather than scaling it, this ensures that the clips play at the highest possible quality without becoming blurry when scaled.
18. You may also want to consider enabling "Shutdown source when not visible" and "Refresh browser when scene becomes active" for the most flexibility.
19. If You want to have a desciption alongside the player, add the `clipDescription.html` file as a Browser Source similarly to the `clipPlayer.html` file. Adjust the Browser Source settings accordingly.
20. Optionally, you may also add a `filter.txt` file next to other files. Each line in this file will be used to filter clips based on their titles.
21. Optionally, you may also add a `aliases.txt` file next to other files. This file is used to change names that are shown in the description. Format: `<creator_name> = <displayed_name>`

# Config options

| Key                | Values           | Required? | Default | Description                                                       |
|--------------------|------------------|-----------|---------|-------------------------------------------------------------------|
| CLIENT_ID          | Client ID        | Yes       | -       | "Client ID" retrieved from https://dev.twitch.tv/                 |
| CLIENT_SECRET      | Client Secret    | Yes       | -       | "Client Secret" retrieved from https://dev.twitch.tv/             |
| BROADCASTER_NAME   | Broadcaster name | Yes       | -       | Your name on Twitch                                               |
| TOP_OR_RANDOM      | top/random       | No        | random  | Prioritise top clips or get random clips out of your top 1000     |
| VOLUME_PERCENT     | 0 to 100         | No        | 50      | Clip playing volume percentage                                    |
| SHOW_CLIP_CREATORS | true/false       | No        | true    | Decide whether to show a clip's creator                           |
| SHOW_CLIP_GAME     | true/false       | No        | true    | Decide whether to show a clip's game                              |
| SHOW_CLIP_TITLE    | true/false       | No        | true    | Decide whether to show a clip's title                             |
| MAX_CLIPS          | Number           | No        | 1000    | Maximum amount of clips to store at the same time                 |
| DESC_AUTHOR_PREFIX | Text             | No        | -       | Text that will be shown in the description before the author name |
| DESC_GAME_PREFIX   | Text             | No        | -       | Text that will be shown in the description before the game title  |

## Example configuration files

### config.txt

```
CLIENT_ID = 12345coolclientid
CLIENT_SECRET = 54321ihatejs
BROADCASTER_NAME = Szafer128
TOP_OR_RANDOM = random
VOLUME_PERCENT = 50
SHOW_CLIP_CREATORS = true
SHOW_CLIP_GAME = true
SHOW_CLIP_TITLE = true
MAX_CLIPS = 2000
DESC_AUTHOR_PREFIX = Author:
DESC_GAME_PREFIX = Game:
```

### aliases.txt

```
CoolViewer123 = VeryCoolViewer
SuperChatGuy420 = IDontLikeThisGuy
___W31RD_N4M3___ = Casual Name :)
```

### filter.txt

```
!dc
!yt
hate
bad
```