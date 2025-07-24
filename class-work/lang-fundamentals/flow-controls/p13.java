//wap in java to demonstrate infinite loops

import java.util.Scanner;
class p13{

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		int counter = 0;
		while(true){
			System.out.println("Hello :"+counter);
			if(counter == 10){
				break;
			}
			counter = counter +1;
			
		}

		
	}
	
}