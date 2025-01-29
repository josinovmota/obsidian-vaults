const { Plugin } = require('obsidian');

class AutoBoldPlugin extends Plugin {
    onload() {
        console.log("AutoBold Plugin iniciado!");

        let isProcessing = false; // Flag para evitar loops infinitos

        this.registerEvent(
            this.app.workspace.on('editor-change', (editor) => {
                if (!editor || isProcessing) return;

                try {
                    isProcessing = true;

                    const doc = editor.getDoc();
                    const content = doc.getValue();
                    const cursor = doc.getCursor(); // Posição atual do cursor

                    // Encontrar todas as palavras já formatadas em negrito
                    const boldWords = new Set();
                    const boldRegex = /\*\*(\w+)\*\*/g;
                    let match;
                    while ((match = boldRegex.exec(content)) !== null) {
                        boldWords.add(match[1]);
                    }

                    if (boldWords.size === 0) {
                        isProcessing = false;
                        return;
                    }

                    // Verificar a palavra ao redor do cursor
                    const lineText = doc.getLine(cursor.line);
                    const beforeCursor = lineText.slice(0, cursor.ch);
                    const afterCursor = lineText.slice(cursor.ch);

                    // Verifica se o cursor está dentro de uma palavra já formatada em negrito
                    const isEditingBoldWord =
                        beforeCursor.endsWith('**') || afterCursor.startsWith('**');

                    if (isEditingBoldWord) {
                        // Ignorar mudanças dentro de uma palavra formatada
                        isProcessing = false;
                        return;
                    }

                    // Detectar a palavra atual antes do cursor
                    const currentWordMatch = beforeCursor.match(/\b\w+$/);
                    if (!currentWordMatch) {
                        isProcessing = false;
                        return;
                    }

                    const currentWord = currentWordMatch[0];

                    // Aplicar negrito apenas se a palavra completa não estiver sendo manualmente alterada
                    if (boldWords.has(currentWord)) {
                        const updatedLine = lineText.replace(
                            new RegExp(`\\b${currentWord}\\b(?!\\*{2})`, 'g'),
                            `**${currentWord}**`
                        );

                        if (lineText !== updatedLine) {
                            doc.replaceRange(updatedLine, { line: cursor.line, ch: 0 }, { line: cursor.line, ch: lineText.length });
                            doc.setCursor({ line: cursor.line, ch: updatedLine.length });
                        }
                    }
                } catch (error) {
                    console.error("Erro no AutoBold Plugin:", error);
                } finally {
                    isProcessing = false;
                }
            })
        );
    }

    onunload() {
        console.log("AutoBold Plugin desativado.");
    }
}

module.exports = AutoBoldPlugin;
