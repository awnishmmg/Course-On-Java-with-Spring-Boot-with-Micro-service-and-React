//wap in Java to show the integer primite datatype 
//floating decimal values 
	// float  : precision values.
	// double


class p1{
	
		public static void main(String[] args){
			
			System.out.println("===========Memory Range of Byte===============");
			System.out.println(Byte.MIN_VALUE);
			System.out.println(Byte.MAX_VALUE);
			
			System.out.println("===========Memory Range of Short===============");
			System.out.println(Short.MIN_VALUE);
			System.out.println(Short.MAX_VALUE);
			
			System.out.println("===========Memory Range of Integer===============");
			System.out.println(Integer.MIN_VALUE);
			System.out.println(Integer.MAX_VALUE);
			
			System.out.println("===========Memory Range of Long===============");
			System.out.println(Long.MIN_VALUE);
			System.out.println(Long.MAX_VALUE);
			
			
			byte age = 28;
			//byte age_2 = 200; //Type casting Error -> byte cannot be conveted Int
			short age_3 = 200;
			
			System.out.println("===========Memory Range of float===============");
			System.out.println(Float.MIN_VALUE);
			System.out.println(Float.MAX_VALUE);
			
			System.out.println("===========Memory Range of double===============");
			System.out.println(Double.MIN_VALUE);
			System.out.println(Double.MAX_VALUE);
			
			System.out.println("===========Memory Range of char===============");
			System.out.println(Integer.parseInt(Character.MIN_VALUE));
			System.out.println(Character.MAX_VALUE);
			
			
		}
}