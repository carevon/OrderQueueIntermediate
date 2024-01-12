import IOrderQueueGateway from "../../../../../../src/domain/aggregates/orderQueue/core/ports/IOrderQueueGateway";
import { GetOrderQueueUseCase } from "../../../../../../src/domain/aggregates/orderQueue/usecases/getOrderQueue/GetOrderQueue";
import { GetOrderQueueOutputDTO } from "../../../../../../src/domain/aggregates/orderQueue/usecases/getOrderQueue/GetOrderQueueDTO";

describe("GetOrderQueueUseCase", () => {
    it('should return a list of queue when id is not provided', async () => {
        // Given
        const mockOrderQueue = {
            id: "123456",
            order_id: 1,
            status_queue: "concluido",
            waiting_time: "500",
            orderDate: "11/07/2023",
        };

        const mockGetOrderQueue: GetOrderQueueOutputDTO = {
            hasError: false,
            result: [mockOrderQueue],
        };
        const QueueGatewayMock: jest.Mocked<IOrderQueueGateway> = {
			getOrderQueue: jest.fn().mockResolvedValue([mockOrderQueue]),
			getOrderQueueStatus: jest.fn(),
			updateOrderQueue: jest.fn(),
			add: jest.fn(),
			beginTransaction: jest.fn(),
			commit: jest.fn(),
			rollback: jest.fn(),
		};
        
        // Act
        const result = await GetOrderQueueUseCase.execute({}, QueueGatewayMock);

        // Assert
        expect(result).toEqual(mockGetOrderQueue);
    })
});