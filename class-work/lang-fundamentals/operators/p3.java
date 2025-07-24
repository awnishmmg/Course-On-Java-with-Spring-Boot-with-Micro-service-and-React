//wap in java to Represent Conditional Operator or Ternary Operator 

import java.util.Scanner;
class p3{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int no = sc.nextInt();
		boolean result = (no>0)? true : false;
		
		System.out.println("is +ve ?: "+result);
		
		
		
	}
	
}