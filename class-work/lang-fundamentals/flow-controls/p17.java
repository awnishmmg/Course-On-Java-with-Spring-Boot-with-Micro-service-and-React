//wap in java to demonstrate odd loops 

import java.util.Scanner;
class p17{

	public static void main(String[] args){
		
		Scanner sc = new Scanner(System.in);
		float result = 0.0f;
		char ch;
		int op;
		
		do{	
			p17.clear();
			
			System.out.println("========== Welcome to Calculator ==========");
			System.out.println("\tPress the Key to Proceed [1|2|3|4]");
			System.out.println("1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide");
			
			System.out.print("\n");
			System.out.print("\n");
			
			System.out.print("choose the Option:");
			op = sc.nextInt(); 
			
			switch(op){
				
				case 1:
					result = p17.add(sc);
				break;
				
				case 2:
					result = p17.sub(sc);
				break;
				
				case 3:
					result = p17.mul(sc);
				break;
				
				case 4:
					result = p17.div(sc);
				break;
				
				default:
					System.out.println("Invalid Option");
				break;
				
			} //end of switch
			
			if(op>=1 && op<=4){
				System.out.println("Result :"+result);
			}
			
			
			System.out.println("do you want to continue [y|n]");
			sc.nextLine(); //Buffer Tokeniser
			ch = sc.nextLine().charAt(0); //Y|y
			ch = Character.toLowerCase(ch);
		}while(ch=='y');

		
	}
	
	public static void clear(){
		System.out.print("\033[H\033[2J"); // Ascii Code : Clear Screen
		System.out.flush();
	}
	
	public static float add(Scanner sc){
		p17.clear();
		System.out.println("========== Welcome to Addition ==========");
			System.out.println("Enter the 1st No:");
			float a = sc.nextFloat();
			System.out.println("Enter the 2nd No:");
			float b = sc.nextFloat();
		return a+b;
	}
	
	public static float sub(Scanner sc){
		p17.clear();
		System.out.println("========== Welcome to Subtraction ==========");
		
			System.out.println("Enter the 1st No:");
			float a = sc.nextFloat();
			System.out.println("Enter the 2nd No:");
			float b = sc.nextFloat();
			
		return a-b;
	}
	
	public static float mul(Scanner sc){
		p17.clear();
		System.out.println("========== Welcome to Mutplication ==========");
			System.out.println("Enter the 1st No:");
			float a = sc.nextFloat();
			System.out.println("Enter the 2nd No:");
			float b = sc.nextFloat();
		return a*b;
	}
	
	public static float div(Scanner sc){
		p17.clear();
		System.out.println("========== Welcome to Divide ==========");
			System.out.println("Enter the 1st No:");
			float a = sc.nextFloat();
			System.out.println("Enter the 2nd No:");
			float b = sc.nextFloat();
		return a/b;
	}
	
}