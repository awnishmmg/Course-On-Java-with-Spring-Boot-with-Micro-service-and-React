//wap in Java to Make a Banking App

public class App{

	//Main driver method 
	public static void main(String[] args){
		
		
	}
	
	
}
public class Bank{
	
	// Account Specific information
	String name; //Data Members
	int accNo; //Data Members
    String ifsc; //Data Members
    String branch; //Data Members
    int age; //Data Members
	String dob; //YYY-MM-DD 
    String createdAt; //YYY-MM-DD 


	// Methods:- setter, getter 
	// setter : set the value 
	// getter : get the value 
	public void createAccount(String name,int accNo,String ifsc,String branch,int age,String dob,String createdAt){
		Bank bnk = new Bank();
		bnk.accNo = accNo;
		bnk.name = name;
		bnk.ifsc = ifsc;
		bnk.branch = branch;
		bnk.age = age;
		bnk.dob = dob;
		bnk.createdAt = createdAt;
	}
	
	public void init(){
		System.out.println("================*** Welcome to SPI Bank ***===============");
	}
	
	// To Show Account Info : display
	public void showAccountInfo(){
		this.init();
		
	}
	

	
	
	
	
	
}

public class Users{
	int accNo; 
	short pin;
	
	Users static instance; //null
	
	
	public Users getInstance(){
		
		if(Users.instance == null){
			Users.instance = new Users();
		}
		return Users.instance;
		
		
	} 
	
	public boolean verifyUser(short pin){
	/**
	 * =====================================================================
	 * @title : AuthMiddleware
	 * @params: short pin
	 * @return: boolean true or false
	 * @description : This is a Method that Validates if user is Valid or Not.
	 * @author: Awnish Kr.
	 * ======================================================================
	 */	
			if(getInstanceaccNo){
				if(.pin)
			}
		
	}
	
	
}






