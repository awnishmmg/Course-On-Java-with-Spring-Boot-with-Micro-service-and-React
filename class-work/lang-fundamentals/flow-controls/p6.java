//wap in java to find Odd and Even 

import java.util.Scanner;
class p6{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int n = sc.nextInt();
		if(n%2 == 0){
			System.out.println("Even");
		}else{
			System.out.println("Odd");
		}
	}
	
}