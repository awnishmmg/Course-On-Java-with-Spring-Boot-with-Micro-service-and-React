//wap in java to find prime number.
// 25 Number from 1 to 100

import java.util.Scanner;
class p11{

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the no:");
		int no = sc.nextInt();
		
		if(no%2==0){
			if(no == 2){
				System.out.println("Prime");
			}else{
				System.out.println("Not Prime");
			}
		}else if(no%3==0){
			if(no == 3){
				System.out.println("Prime");
			}else{
				System.out.println("Not Prime");
			}
		}else if(no%5==0){
			if(no == 5){
				System.out.println("Prime");
			}else{
				System.out.println("Not Prime");
			}
		}else if(no%7==0){
			if(no == 7){
				System.out.println("Prime");
			}else{
				System.out.println("Not Prime");
			}
		}else if(no%11==0){
			if(no == 11){
				System.out.println("Prime");
			}else{
				System.out.println("Not Prime");
			}
		}else{
			System.out.println("Prime");
		}
		
	}
	
}