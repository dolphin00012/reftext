const vscode = require('vscode');

function activate(context) {
    const provider = vscode.languages.registerFoldingRangeProvider('reftext', {
        provideFoldingRanges(document, context, token) {
            const foldingRanges = [];
            const lineCount = document.lineCount;

            for (let i = 0; i < lineCount; i++) {
                const lineText = document.lineAt(i).text;

                // Falls die Zeile mit '#' beginnt
                if (lineText.startsWith('#')) {
                    let endLine = i;

                    // Suche nach der nächsten echten Leerzeile
                    for (let j = i + 1; j < lineCount; j++) {
                        const nextLineText = document.lineAt(j).text;

                        // Nur eine komplett leere Zeile beendet den Faltbereich
                        if (nextLineText === '') {
                            endLine = j - 1;
                            break;
                        }

                        endLine = j;
                    }

                    // Faltung NUR hinzufügen, wenn mindestens eine Zeile Inhalt 
                    // unter dem '#' existiert (also endLine echt größer als i ist)
                    if (endLine > i) {
                        foldingRanges.push(new vscode.FoldingRange(i, endLine));
                    }
                }
            }

            return foldingRanges;
        }
    });

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};