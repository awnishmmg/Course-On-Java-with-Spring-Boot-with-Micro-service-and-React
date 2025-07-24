//wap in Java to demostrate the use String data 
import java.lang.String; //not mendatory

class p3{
	
		public static void main(String[] args){
			
			String name = "Ravi";
			String lastname =  "Kumar";
			String full_name = name + lastname;
			
			System.out.println(full_name);
			
			
			//traditional via Index 
			
			System.out.println("length of String :"+full_name.length());
			System.out.println("Index min :"+full_name.charAt(0));
			System.out.println("Index 1 : "+full_name.charAt(1));
			System.out.println("Index max :"+full_name.charAt(full_name.length()-1));
			
			
			//Iteration of the String 
			for(int i=0;i<name.length();i++){
				System.out.println(" Index => "+i+" and value => "+name.charAt(i));
			} 
			
			
			//Iteration using foreach
			for(char ch :name.toCharArray()){
				System.out.println(ch);
			} 
			
			
			
		}
}