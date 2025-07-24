//wap in java to find Odd and Even 
//condition : else not out allowed 
//only single if :
//not allowed switch and ternary.

import java.util.Scanner;
class p7{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int n = sc.nextInt();
		
		if(n%2 == 0){
			System.out.println("Even");
			return;
		}
		System.out.println("Odd");
	}
	
}