
const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
  function activate(context) {
	console.log('Congratulations, your extension "chill-pill" is now active!');
	let disposable = vscode.commands.registerCommand('chill-pill.helloWorld',  async() => {
		const input = await vscode.window.showInputBox({placeHolder: 'Enter what you wanna search on youtube' });
		input.replace(" ",'_');
		const ninput = 'https://www.youtube.com/results?search_query='+input;
		vscode.env.openExternal(vscode.Uri.parse(ninput));
		vscode.window.showInformationMessage('the number u enter was  '+ ninput);
	});

	let something = vscode.commands.registerCommand('extension.sayHello', () => {
		
		vscode.window.showInformationMessage('Hello World! from aman');
	});


	//  let checkfun = vscode.commands.registerCommand('extensions.dosomething',async()=>{
	// 	const input = await vscode.window.showInputBox({placeHolder: 'Enter what you wanna search' });
	// 	// let z =  vscode.window.showInputBox;
	// 	vscode.window.showInformationMessage('the number u enter was  '+ input);
	// });

	context.subscriptions.push(disposable,something);
}




// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
