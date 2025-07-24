
import java.util.Scanner; //Explicit Import

class p2{
	
	public static void main(String[] args){
		
		//scanner class Object 
		Scanner sc = new Scanner(System.in); 
		
		System.out.print("Enter the 1st:"); //implicit import
		int no1 = sc.nextInt(); //Enter \n
		System.out.print("Enter the 2nd:");
		int no2 = sc.nextInt();
		
		System.out.println("Result = "+(no1+no2));
		
		sc.close(); // this is Nothing destructor()
		
		
	}

}