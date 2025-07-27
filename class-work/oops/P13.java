//wap in Java to show default contructor 
public class P13{
	
	public static void main(String[] args){
		
		User user = new User();
		
		System.out.println("User Name :"+user.getName());
		System.out.println("User Email :"+user.getEmail());
		System.out.println("User Password :"+user.getotp());
		
		
	}
}

class User{
	
	public String name;
	private String email;
	private int otp;
	
	// No constructor has been added
	// No predefined values has been assigned.
	
	//getters  : Name
	public String getName(){
		return this.name;
	}	
	//getters  : Email
	public String getEmail(){
		return this.email;
	}
	//getters  : otp
	public int getotp(){
		return this.otp;
	}
	
}