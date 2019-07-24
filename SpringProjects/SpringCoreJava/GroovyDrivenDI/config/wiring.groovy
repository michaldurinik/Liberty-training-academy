beans {
	dataSource(demos.groovy.dsl.SampleDataSource.class) {
	}
	pricingEngine(demos.groovy.dsl.PricingEngineMock.class) {
        minimumDiscountAmount = "#{dataSource.discountAmount}"
        percentageDiscount = "#{dataSource.percentageDiscount * 2}"
        prices = "#{dataSource.prices}"
	}
	stockCheckEngine(demos.groovy.dsl.StockCheckEngineMock.class) {
		testData = "#{dataSource.buildStockData()}"
	}
	paymentEngine(demos.groovy.dsl.PaymentEngineMock.class,"#{T(demos.groovy.dsl.SampleDataSource).buildBannedCards()}") {
	}
	shopWithMocks(demos.groovy.dsl.Shop) {
		paymentEngine = paymentEngine
		stockCheckEngine = stockCheckEngine
		pricingEngine = pricingEngine
		shopName = "#{dataSource.CEO.toUpperCase() == 'STEVE JOBS' ? 'Apple' : 'Microsoft'}"
		openDuringWeekends = "#{dataSource.openDays matches '.*(Saturday|Sunday).*'}"
		juniorStaff = "#{dataSource.staff.?[salary < 50000.0]}"
		seniorStaff = "#{dataSource.staff.?[salary >= 50000.0]}" 
		staffNames = "#{dataSource.staff.![name]}"
	}
}