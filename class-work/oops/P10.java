//wap in Java : getter and setter
// Tighlty Encapsulated Class.

public class P10{

	public static void main(String[] args){
		
		Student st = new Student();
		
		st.setRollno(1001);
		st.setName("Awnish");
		st.setClass("Btech");
		st.setBranch("CSE");
	
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
	
	public void setRollno(int stdRollno){
		this.stdRollno = stdRollno;
	}

	public void setName(String stdName){
		this.stdName = stdName;
	}
	

	public void setClass(String stdClass){
		this.stdClass = stdClass;
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