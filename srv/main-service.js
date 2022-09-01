const cds = require("@sap/cds");

class ExcelExportSrv extends cds.ApplicationService {
	async init() {
		const db = await cds.connect.to("db");
		this.after("READ", "layouts", async(req) => {
			console.log("test");
			let test = "x";
		});
		await super.init();
	}
}
module.exports = ExcelExportSrv;