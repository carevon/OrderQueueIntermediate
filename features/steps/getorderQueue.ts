import { Given, When, Then } from "@cucumber/cucumber";
// import { expect } from "chai";
const { expect } = require('chai')
import * as sinon from "sinon";
import { GetOrderQueueUseCase } from "../../src/domain/aggregates/orderQueue/usecases/getOrderQueue/GetOrderQueue";

let getOrderQueueUseCase: GetOrderQueueUseCase;
let result: any;

const mockOrderQueue = {
	id: "123456",
	order_id: 1,
	status_queue: "concluido",
	waiting_time: "500",
	orderDate: "11/07/2023",
};

const QueueGatewayMock = {
	getOrderQueue: sinon.stub().resolves([mockOrderQueue]),
	getOrderQueueStatus: sinon.stub(),
	updateOrderQueue: sinon.stub(),
	add: sinon.stub(),
	beginTransaction: sinon.stub(),
	commit: sinon.stub(),
	rollback: sinon.stub(),
};

Given("inicio a listagem de queue sem passar ID", async function () {
    // getOrderQueueUseCase = new GetOrderQueueUseCase(QueueGatewayMock);
});

When("eu busco pela informacao de pedidos sem passar o id", async function () {
    result = await GetOrderQueueUseCase.execute({}, QueueGatewayMock);
});

Then("o resultado deve ser de sucesso", async function () {
    expect(result.hasError).to.be.false;
    expect(result.httpCode).to.equal(200);
});



// Given("inicio a listagem de queue sem passar ID", async function () {
// 	getOrderQueueUseCase = new GetOrderQueueUseCase();
// });

// When("eu busco pela informacao de pedidos sem passar o id", async function () {
//     // Ensure getOrderQueueUseCase is properly instantiated with its dependencies
//     result = await getOrderQueueUseCase.execute({});
// });

// // When("eu busco pela informacao de pedidos sem passar o id", async function () {
// // 	// Execute o caso de uso
// // 	result = await GetOrderQueueUseCase.execute({}, QueueGatewayMock);
// // });

// Then("o resultado deve ser de sucesso", async function () {
// 	// Verifique se não há erro e a resposta é bem-sucedida
// 	expect(result.hasError).to.be.false;
// 	expect(result.httpCode).to.equal(200);
// });
