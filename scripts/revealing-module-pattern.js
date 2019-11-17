
function printableMessage() {
	var message = 'hello';

	function getMessage() {
		return message;
	}

	function setMessage(newMessage) {
		if(!newMessage) {
			throw new Error('Cannot set empty message!');
		}
		message = newMessage;
	}

	function printMessage() {
		console.log(message);
	}

	return {
		setMessage: setMessage,
		getMessage: getMessage,
		printMessage: printMessage
	};
}

// revealing module pattern in use

var awesome1 = printableMessage();
awesome1.printMessage(); // hello

var awesome2 = printableMessage();
awesome2.setMessage('hi');
awesome2.printMessage(); // hi

console.log(awesome1.getMessage()); // hello
console.log(awesome2.getMessage()); // hi
