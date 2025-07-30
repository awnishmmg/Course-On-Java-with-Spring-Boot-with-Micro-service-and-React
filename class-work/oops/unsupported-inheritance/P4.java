public class P3 {
    public static void main(String[] args) {
        System.out.println("Main Execution");

        // Start the simulation with age 0
        Parent parent = new Parent(0);

        if (Parent.child != null) {
            Parent.child.sahara();
        }
    }
}

class Parent {
    public static Child child;
    public String eyes = "blue";

    public Parent(int age) {
        System.out.println("Parent created at age: " + age);

        if (age < 70) {
            if (Parent.child == null) {
                Parent.child = new Child(age + 10); // next generation
            }
        } else {
            System.out.println("Parent has reached end of life at age 70. Cycle ends.");
        }
    }

    public void care() {
        System.out.println("Parent will care for child");
    }

    public String getEyes() {
        return this.eyes;
    }
}

class Child extends Parent {

    public Child(int age) {
        super(age); // create new Parent with current age
        System.out.println("Child born at age: " + age + ", Eyes: " + this.getEyes());
    }

    public void features() {
        this.care();
    }

    public void sahara() {
        System.out.println("Child gives Sahara to Parent");
    }
}
