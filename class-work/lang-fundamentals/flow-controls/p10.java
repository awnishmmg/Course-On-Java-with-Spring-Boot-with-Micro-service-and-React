//wap in java to find Odd and Even 
// Hint : use string length concept to typecast in Boolean

import java.util.Scanner;
class p10{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int n = sc.nextInt();
	
		if(n%2){
			System.out.println("Odd");
		}else{
			System.out.println("Even");
		}
	}
	
}


