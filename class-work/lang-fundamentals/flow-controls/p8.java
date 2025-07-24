//wap in java to find Odd and Even 
//condition : else not out allowed 
//only single if :
//not allowed switch and ternary.
//return not allowed

import java.util.Scanner;
class p8{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		String output  = "odd";
		
		System.out.println("Enter the no:");
		int n = sc.nextInt();
		
		if(n%2 == 0){
			output = "Even"; //variable : override
		}
		System.out.println(output);
	}
	
}