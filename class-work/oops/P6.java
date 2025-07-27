//wap in Java  How to create this instance in Main class 
// In Main method of the Main class this keyword in not allowed.
// single Design Pattern 
   //1. constructor : private for Thread Safe.
   //2. Only single global instance
   //3. can be used access any context : static or non static.
   //4. No body No body can @override it 
   

public class P6{
	
	public String TAG = "P6"; //Non static
	public static P6 myThis;
	
	//constructor
	private P6(){
		
	}
	
	public static void main(String[] args){
		
		if(P6.myThis == null){
			P6.myThis = new P6();
		}
		
		
		myThis.sayHello();
		
		System.out.println("This is Main Method for sayHello : "+myThis);
		
		myThis.goodNight();
		System.out.println("This is Main Method for Good Night : "+myThis);
		
		P6.welcome();
		
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
