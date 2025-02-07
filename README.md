# README for VSCODE-extension "reftext" language support/coloring.

This regex (regular expression) extension for vscode provides support for 'reftext' language coloring some parts of text files for may 'better' (or wors?) decipher "notes" from "{literature refferences titles}".

## Installation

1. Download and install Visual Studio Code (its freeware).
2. Install the related .vsix file to vscode (also freeware).

## Usage

- 1. Open a .txt, .md, or .reftext file in vscode and then change "language" in vscode (lower right frame clicking on the actual language changing it to 'reftext', if installed), to see some text-decipher coloring in action.
- 2. The COLORS of that extension reley on some additional "code" adding once self to "settings.json" (eg. c:\C:\Users\*once user name*\AppData\Roaming\Code\User\settings.json) to show desired/changeble colors to "{ + }, ",", "4digits", "other characters within {}'s.
     "textMateRules": [
     {"scope": "IN.reftext", "settings": { "foreground": "#ffee03" }},
     {"scope": "headline.reftext", "settings": { "foreground": "#fc05b2" }},
     {"scope": "comment.reftext", "settings": { "foreground": "#17c017" }},
     {"scope": "year.reftext", "settings": { "foreground": "#224fca" }},
     {"scope": "comma.reftext", "settings": { "foreground": "#ffee03" }},
     {"scope": "else.in.reftext", "settings": { "foreground": "#cfcfcf" }}

     there should be at least one ADDIOTNAL "{" at the beginning and one ADDITIONAL "}" at the end of once settings.json file ('some how').

## Release Notes

- Initial release of RefText language support 0.0.1 (2025-01-13)
- Release of reftext language support version 1.0   (2025-02-07)
