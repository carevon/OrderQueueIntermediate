import { Given, When, Then } from "@cucumber/cucumber";
import { GetOrderQueueUseCase } from "../src/domain/aggregates/orderQueue/usecases/getOrderQueue/GetOrderQueue";

let getOrderQueueUseCase: GetOrderQueueUseCase;
let params: any;
let result: any;


const mockOrderQueue = {
	id: "123456",
	order_id: 1,
	status_queue: "concluido",
	waiting_time: "500",
	orderDate: "11/07/2023",
};

const mockGetOrderQueue = {
	hasError: false,
	result: [mockOrderQueue],
};

const QueueGatewayMock = {
	getOrderQueue: jest.fn().mockResolvedValue([mockOrderQueue]),
	getOrderQueueStatus: jest.fn(),
	updateOrderQueue: jest.fn(),
	add: jest.fn(),
	beginTransaction: jest.fn(),
	commit: jest.fn(),
	rollback: jest.fn(),
};

Given("inicio a listagem de queue sem passar ID", () => {
	getOrderQueueUseCase = new GetOrderQueueUseCase();
});

When("eu busco pela informacao de pedidos sem passar o id", async () => {
	// Execute o caso de uso
	result = await GetOrderQueueUseCase.execute({}, QueueGatewayMock);
});

Then("o resultado deve ser de sucesso", () => {
	// Verifique se não há erro e a resposta é bem-sucedida
	expect(result.hasError).toBe(false);
	expect(result.httpCode).toBe(200);
});