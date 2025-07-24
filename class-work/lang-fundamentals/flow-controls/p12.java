//wap in java to find the Quadrant
// @Params : x and y
// @returns : Quadrant

import java.util.Scanner;
class p12{

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter the x co-ordinate:");
		int x = sc.nextInt();
		System.out.println("Enter the y co-ordinate:");
		int y = sc.nextInt();
		
		
		if(x == 0 && y==0){
			//Origin 
			System.out.println("Point in at Origin");
		}else{
			//Within in Quandrant
			if(x>0 && y>0){
				System.out.println("Quadrant 1st");
			}else if(x>0 && y<0){
				System.out.println("Quadrant 4rth");
			}else if(x<0 && y>0){
				System.out.println("Quadrant 2nd");
			}else{
				System.out.println("Quadrant 3rd");
			}
		}
		
		
		
		
		
		
	}
	
}