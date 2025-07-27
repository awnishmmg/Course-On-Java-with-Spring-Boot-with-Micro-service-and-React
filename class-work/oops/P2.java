//wap in Java to Demonstrate a class with Importance of this Keyword.
//Access Modifier : public 
//Scope :public
public class P2{
	
	public static void main(String[] args){
		
		Student std = new Student();
		std.name = "Awnish";
		std.age = 28;
		std.branch =  "Btech CSE";
		
		
		System.out.println("Std Object:"+std);
		//display method
		std.display(std);
		
		
	}
	
}
//Access Modifier : default 
//Scope :public
class Student{
	
	public String name; //Data Member  : features or properties 
	public int age; //Data Member  : features or properties 
	public String branch; //Data Memebr : features or properties 
	
	// Member function : Behaviour or actions
	public void display(Student object){
		
		System.out.println("This Keyword:"+this);
		
		String name = "Ravi"; //local scope 
		System.out.println("Student Name:"+name); //local scope
		System.out.println("Student Name:"+object.name); //global scope 
		System.out.println("Student age:"+age);
		System.out.println("Student branch:"+branch);
		
	}
}