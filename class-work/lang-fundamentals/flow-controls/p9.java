//wap in java to find Odd and Even 
//condition : else not out allowed 
//only single if :
//not allowed switch and ternary.
//return not allowed
//variable overriding not allowed.


import java.util.Scanner;
class p9{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		String output[] = {"Even","Odd"};
		
		System.out.println("Enter the no:");
		int n = sc.nextInt();	
		System.out.println(output[n%2]);
	}
	
}