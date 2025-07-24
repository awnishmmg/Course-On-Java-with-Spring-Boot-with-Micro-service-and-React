//wap in Java to demostrate the sanity check: sanitisation,Data cleaning, 
//we know ever directly data compare.
//type check: validation
//Remove Extra Space 
//Pattern Match : Regex

import java.util.Scanner;

class p5{
	
		public static void main(String[] args){
		
		String email_id;
		
		Scanner sc = new Scanner(System.in);
		System.out.print("Enter the emaild ID:");
		
		email_id = sc.nextLine();
		
		System.out.println("=============Before Sanity check==========");
		
		System.out.println("email ID:"+email_id);
		System.out.println("email ID:"+email_id.length());
		
		System.out.println("=============After Sanity check==========");
		
		if(email_id instanceof String){
			System.out.println("email ID:"+email_id.trim());
			System.out.println("email ID:"+email_id.trim().length()); //method chaining.

		}
		
	
		}
}