//wap in java to Demostrate the switch 

import java.util.Scanner;
class p1{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int no = sc.nextInt();
		
		switch(no){
			default:
				System.out.println("Line default is executing");
				break ;
			case 1:
				System.out.println("Line 1 is executing");	
				break;
			case 2:
				System.out.println("Line 2 is executing");
				break;
			case 3:
				System.out.println("Line 3 is executing");	
				break;
			case 4:
				System.out.println("Line 4 is executing");	
				break;
			case 5:
				System.out.println("Line 5 is executing");	
				break;
			
		}
		
		// ==================== Null Zone /Unreachable code ======================
		//System.out.println("This Line will Never execute");	
		
	}
	
}