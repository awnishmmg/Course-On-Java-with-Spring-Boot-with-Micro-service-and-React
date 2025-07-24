//wap in java to Demostrate the switch to find if character is vowel or consonant

import java.util.Scanner;
class p2{
	
	
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		char ch = sc.nextLine().charAt(0);
		
		// condition : Vowel -> sample space {a,i,e,o,u}
		switch(Character.toLowerCase(ch)){
			case 'a':
			case 'i':
			case 'e':
			case 'o':
			case 'u':
					System.out.println("it is vowel");
					break;
			default:{
				System.out.println("it is consonant");
				break ;
			}
			
		}
		
	
	
	}
	
}