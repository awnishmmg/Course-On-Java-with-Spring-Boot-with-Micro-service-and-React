
//wap in Java to show the use of constructor
import java.util.Scanner;
public class P12{
	
	public static void main(String[] args){
		
		String name,email,password;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the Name:");
		name = sc.nextLine();
		
		System.out.println("Enter the Email:");
		email = sc.nextLine();
		
		System.out.println("Enter the Password:");
		password = sc.nextLine();
		
		User user = new User(name,email,password);
		
		System.out.println("User Name :"+user.getName());
		System.out.println("User Email :"+user.getEmail());
		System.out.println("User Password :"+user.getPassword());
		
		
	}
}

class User{
	
	public String name;
	private String email;
	private String password;
	
	//Parameterised Constructor
	public User(String name,String email,String password){
		this.name = name;
		this.email = email;
		this.password = password;
	}
	
	//getters  : Name
	public String getName(){
		return this.name;
	}	
	//getters  : Email
	public String getEmail(){
		return this.email;
	}
	//getters  : password
	public String getPassword(){
		return this.password;
	}
	
}