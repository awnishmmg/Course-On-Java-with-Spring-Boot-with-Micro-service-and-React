//wap in Java : Single Level Inheritence
public class P17{
	public static void main(String[] args){
		
	Manager manager = new Manager("Project Management","Awnish",5000.00,"Developer");
	
	System.out.println("Manager Name:"+manager.getName());
	System.out.println("Manager Salary:"+manager.getSalary());
	System.out.println("Manager Department:"+manager.getDept());
	System.out.println("Manager Role:"+manager.getRole());
	
	manager.assignTask("Make the Login Page");
	
	System.out.println("Task list:"+manager.getTask());
	

	}
}

class Emp{
	
	public String name;
	public double salary;
	public String dept;
	
	public Emp(String name,double salary,String dept){
		
		this.name = name;
		this.salary = salary;
		this.dept = dept;
		
		System.out.println("Emp Constructor called");
	}
	
	public String getName(){
		return this.name;
	}
	
	public double getSalary(){
		return this.salary;
	}
	
	public String getDept(){
		return this.dept;
	}
	
}

class Manager extends Emp{

	public String role;
	public String task;
	
	public Manager(String role,String name,double salary,String dept){
		
		super(name,salary,dept);
		
		this.role = role;
		System.out.println("Manager Constructor called");
		
	}
	
	public void assignTask(String task){
		this.task = task;
	}
	
	public String getTask(){
		return this.task;
	}
	
	public String getRole(){
		return this.role;
	}
}
