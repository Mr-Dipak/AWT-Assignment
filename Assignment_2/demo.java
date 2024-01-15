abstract class Shape {
    int numberOfSides;

    Shape(int sides) {
        this.numberOfSides = sides;
    }

    abstract void draw(); // Abstract method
}

class Circle extends Shape {
    Circle() {
        super(0);
    }

    @Override
    void draw() {
        System.out.println("Drawing a circle.");
    }
}
