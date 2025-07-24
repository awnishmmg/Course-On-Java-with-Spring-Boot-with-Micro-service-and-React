//wap in java find the Remainder using Remainder Theoram

class p2{
	
	
	public static void main(String[] args){
		int divident=5;
		int divisor=2;
		
		System.out.println("Remainder:"+(divident%divisor)); //with module
		
		//without module 
		//Dividend = Divisor * Q+R 
		//R = Dividend - (Divisor * Q)
		// Divisor = 2
		// Dividend = 5
		// Q = Dividend/Divisor
		int q = divident/divisor;
		int rem = divident-(divisor*q);
		System.out.println("Remainder:"+(rem)); 
		
		
		
	}
	
}