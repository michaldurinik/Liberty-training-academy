package videostore.finish.two;

public enum PriceCode {
    CHILDRENS {
        @Override
        public double cost(int daysRented) {
            double cost = 1.5;
            if (daysRented > 3) {
                cost += (daysRented - 3) * 1.5;
            }
            return cost;
        }
    },
    REGULAR {
        @Override
        public double cost(int daysRented) {
            double cost = 2;
            if (daysRented > 2) {
                cost += (daysRented - 2) * 1.5;
            }
            return cost;
        }
    },
    NEW_RELEASE {
        @Override
        public double cost(int daysRented) {
            return daysRented * 3;
        }

        @Override
        public int points(int daysRented) {
            return 2;
        }
    };

    public abstract double cost(int daysRented);

    public int points(int daysRented) {
        return 1;
    }
}
