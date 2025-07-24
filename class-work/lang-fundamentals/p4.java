//wap in Java to demostrate the string methods 

import java.util.Scanner;

class p4{
	
		public static void main(String[] args){
		
		String input;
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the String:");
		input = sc.nextLine();
		
		System.out.println("input:"+input);
		
		//properties and Methods of Strings 
		System.out.println(input instanceof String);
		System.out.println("length :"+input.length());
		
		//charAt : retuns element on the basis of Index.(0-length-1)
		//IndexError : Index Out of Bounds. (Out of Range)
		System.out.print("Enter the Index:");
		int index = sc.nextInt();
		System.out.println("The Element at Index: "+index+" is "+input.charAt(index));
		
		//equals : used to match the string equality on the basis of case(lower|upper) 
		//equals : case -sensitive
		
		sc.nextLine(); //Buffer full -> one token
		
		System.out.print("Enter Another String:");
		String input2 = sc.nextLine();
		System.out.println("Is "+input+" equals "+input2+" :"+input.equals(input2));
		//equalsIgnoreCase : same as equals but not case-sensitive
		System.out.println("Is "+input+" equals "+input2+" :"+input.equalsIgnoreCase(input2));
		
	
		}
}