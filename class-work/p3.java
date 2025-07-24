//wap in Java to show Operators :-
import java.util.Scanner;
class p3{
	public static void main(String[] args){
		
	String name = "";
	System.out.print("Enter the f-name:");
	
	name = (new Scanner(System.in)).nextLine(); //instantiation
	System.out.println("f-name :"+name);
	
	System.out.print("Enter last name:");
	name = (new Scanner(System.in)).nextLine(); //instantiation
	System.out.println("Last name:"+name);
	
	//1. Every time instantiation : cost of instantiation is very high.
	//2. remote = new Tv()

	}
}