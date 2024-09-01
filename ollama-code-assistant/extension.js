const vscode = require('vscode');

// This method is called when your extension is activated
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    console.log('Congratulations, your extension "ollama-code-assistant" is now active!');

    // Register the command for generating code
    let disposableGenerateCode = vscode.commands.registerCommand('ollama-code-assistant.generateCode', function () {
        // Replace this with the actual code generation logic
        vscode.window.showInformationMessage('Generate Code command executed');
    });

    // Register the command for refactoring code
    let disposableRefactorCode = vscode.commands.registerCommand('ollama-code-assistant.refactorCode', function () {
        // Replace this with the actual code refactoring logic
        vscode.window.showInformationMessage('Refactor Code command executed');
    });

    // Register the command for correcting code
    let disposableCorrectCode = vscode.commands.registerCommand('ollama-code-assistant.correctCode', function () {
        // Replace this with the actual code correction logic
        vscode.window.showInformationMessage('Correct Code command executed');
    });

    // Register the command for chat
    let disposableChat = vscode.commands.registerCommand('ollama-code-assistant.chat', function () {
        // Replace this with the actual chat functionality
        vscode.window.showInformationMessage('Chat with Assistant command executed');
    });

    // Add the commands to the context subscriptions
    context.subscriptions.push(disposableGenerateCode);
    context.subscriptions.push(disposableRefactorCode);
    context.subscriptions.push(disposableCorrectCode);
    context.subscriptions.push(disposableChat);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
    activate,
    deactivate
};
