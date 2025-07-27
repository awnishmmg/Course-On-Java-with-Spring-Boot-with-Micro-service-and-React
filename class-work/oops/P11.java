//wap in Java : getter and setter
//Method chaining

public class P11{

	public static void main(String[] args){
		
		Student st = new Student();
		
		st.setRollno(1001).setName("Awnish").setClass("Btech").setBranch("CSE");
	
		System.out.println("============= Student Information ==================");
		System.out.println("Student Rollno:"+st.getRollno());
		System.out.println("Student Name:"+st.getName());
		System.out.println("Student class:"+st.getClassName());
		System.out.println("Student Branch:"+st.getBranch());
		
	
	}
}

class Student{
	
	private int stdRollno;
	private String stdName;
	private String stdClass;
	private String branch;
	
	public Student setRollno(int stdRollno){
		this.stdRollno = stdRollno;
		return this;
	}

	public Student setName(String stdName){
		this.stdName = stdName;
		return this;
	}
	

	public Student setClass(String stdClass){
		this.stdClass = stdClass;
		return this;
	}
	
	public void setBranch(String branch){
		this.branch = branch;
	}
	

	public String getName(){
		return this.stdName;
	}
	
	public String getClassName(){
		return this.stdClass;
	}
	
	public String getBranch(){
		return this.branch;
	}
	
	public int getRollno(){
		return this.stdRollno;
	}
	
	
}