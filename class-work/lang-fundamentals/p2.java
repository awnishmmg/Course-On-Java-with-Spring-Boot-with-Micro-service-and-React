//wap in Java to demostrate the use case of char datatype

class p2{
	
		public static void main(String[] args){
			
			//character : range in char 
			System.out.println(Character.MIN_VALUE);
			System.out.println(Character.MAX_VALUE);
			
			//cast 
			System.out.println((int)Character.MIN_VALUE);
			System.out.println((int)Character.MAX_VALUE);
			
			char ch0 = 'A';
			char ch1 = 'आ';
			char ch2 = '#';
			char ch3 = '♥';
			char ch4 = '♣';
			char ch5 = '😎';
			char ch7 = ' '; //32
			
			
			System.out.println(ch0+" int value : "+(int)ch0);
			System.out.println(ch1+" int value : "+(int)ch1);
			System.out.println(ch2+" int value : "+(int)ch2);
			System.out.println(ch3+" int value : "+(int)ch3);
			System.out.println(ch4+" int value : "+(int)ch4);
			System.out.println(ch5+" int value : "+(int)ch5);
			System.out.println(ch7+" int value : "+(int)ch7);
			
			System.out.println("==============Ascii Chart ==================");
			int rows = 1;
			for(int i=0;i<128;i++){
				
				if(rows == 10){
					System.out.print("\n");
					rows = 0;
				}
				System.out.print("\t"+(char)i);
				rows++;
			}
			
		}
}