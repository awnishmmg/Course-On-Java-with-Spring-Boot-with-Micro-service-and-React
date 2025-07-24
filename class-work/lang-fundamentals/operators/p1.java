//wap in java to show arthematic Operators 

class p1 {
	
	
	public static void main(String[] args){
		int x=5;
		int y=2;
		
		System.out.println("Addition:"+(x+y));
		System.out.println("Minus:"+(x-y));
		System.out.println("multiply:"+(x*y));
		System.out.println("division:"+x/y);
		System.out.println("Remainder:"+(x%y));
		
		// for power and sqrt we donot have inbuilt operator we will Math class.
		System.out.println("Square:"+Math.pow(x,2));
		System.out.println("Cube:"+Math.pow(x,3));
		System.out.println("5th Power:"+Math.pow(y,x)); //2^5 = 32 
		
		//Square root without Square root
		System.out.println("Square Root of 25: "+Math.sqrt(25));
		System.out.println("Square Root of 25: "+Math.pow(25,0.5));
		
		//Cube Root without cubeRoot 
		System.out.println("Square Root of 8: "+Math.pow(8,1.0/3));
		
		
	}
	
}