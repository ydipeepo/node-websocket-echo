import { Server } from "ws";

function main(port?: number) {
	const wss = new Server({ port: port ?? parseInt(process.env["PORT"]) });
	wss.on("connection", ws => {
		ws.on("message", data => {
			console.log(data);
			ws.send(data);
		});
	});
}

main(8000);
