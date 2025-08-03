public class P4 {
    public static void main(String[] args) {
        System.out.println("Main Execution");

		Child child = new Child(0);
		child.features();
		
		Parent parent = new Parent(0);
		parent.child.sahara();
		
        // if (Parent.child != null) {
            // Parent.child.sahara();
        // }
    }
}

class Parent {
    public static Child child;
    public String eyes = "blue";
    public Parent(int age) {
        System.out.println("Papa age: (real age=30) " + age);

        if (age < 40) {
            if (Parent.child == null) {
                Parent.child = new Child(age + 20); // next generation
            }
        } else {
            System.out.println("Papa has reached end of life at age 70. Cycle ends.");
        }
    }

    public void care() {
        System.out.println("Papa will care for child");
    }

    public String getEyes() {
        return this.eyes;
    }
}

class Child extends Parent {

    public Child(int age) {
        super(age); // create new Parent with current age
        System.out.println("Child age: "+age);
    }

    public void features() {
		System.out.println("Child eye color : " + this.getEyes());
        this.care();
    }

    public void sahara() {
        System.out.println("Child gives Sahara to Parent");
    }
}
