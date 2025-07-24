//wap in java to find Odd and Even 

import java.util.Scanner;
class p4{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int n = sc.nextInt();
		
		switch(n%2){
			default:{
				System.out.println("Even");
				break;
			}
			case 1:{
				System.out.println("Odd");
				break;
			}
		}
	}
	
}