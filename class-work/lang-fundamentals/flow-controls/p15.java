//wap in java to demonstrate infinite loops : case 1

import java.util.Scanner;
class p15{

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		int j=10;
		int k=1;
		for(int counter = 0;counter != 10;counter = counter +1,j--,k++){
			
			System.out.println("Hello => "+counter+" j=> "+j+" k => "+k );
			
			
		}

		
	}
	
}