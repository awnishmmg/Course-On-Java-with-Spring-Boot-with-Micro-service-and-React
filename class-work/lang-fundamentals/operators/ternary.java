//wap in java to Represent Conditional Operator or Ternary Operator 

import java.util.Scanner;
class ternary{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int no = sc.nextInt();
		System.out.println("Y = |"+no+"| = "+((no>0)?no:(-no)));
		
	}
	
}