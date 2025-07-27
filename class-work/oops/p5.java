//wap in Java  How to create this instance in Main class 
// In Main method of the Main class this keyword in not allowed.

public class P4{
	
	public String TAG = "P4"; //Non static
	public static P4 myThis;
	
	public static void main(String[] args){
		
		if(P4.myThis == null){
			P4.myThis = new P4();
		}
		
		
		myThis.sayHello();
		
		System.out.println("This is Main Method for sayHello : "+myThis);
		
		myThis.goodNight();
		System.out.println("This is Main Method for Good Night : "+myThis);
		
		P4.welcome();
		
		System.out.println("===========calling welcome with myThis====== ");
		myThis.welcome();
		
		
	}
	
	//Non static context
	public void sayHello(){
		System.out.println("This non static  is SayHello Method :");
		System.out.println("This non static  is SayHello with myThis : "+myThis);
	}
	
	//Static Context
	public static void welcome(){
		System.out.println("This static is welcome Method");
		System.out.println("This static is welcome Method with myThis: "+myThis);
		
		myThis.goodNight();

	}
	
	//Non static context
	public void goodNight(){
		
		System.out.println("This Non static is goodNight Method");
		System.out.println("This Non static is goodNight :"+myThis.TAG);

		System.out.println("This Non static is goodNight Method with Mythis: "+myThis);
		
		
	}
	
	
	
	
}
