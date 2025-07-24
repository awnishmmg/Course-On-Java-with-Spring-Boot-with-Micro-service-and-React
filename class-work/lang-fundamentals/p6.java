//wap in Java to work other function of string

import java.util.Scanner;

class p6{
	
		public static void main(String[] args){
			
			String name = "AwNiSh";
			System.out.println("Lower case:"+name.toLowerCase());
			System.out.println("Upper case:"+name.toUpperCase());
			System.out.println("replace:"+name.toLowerCase().replace('w','v'));
			System.out.println(name.contains("n")); //true or false
			
			String sentence =  "My Gf name is sunny";
			String words[] =  sentence.split(" "); //with space as seperator
			
			//Iterable : words -> Array  -> Iterable
			for(String word :words){
				System.out.println(word);
			}
			
			//To convert -> String to character string array.
			
			String name_arr[] = name.split("");
			for(String item :name_arr){
				System.out.println(item);
			}
			
			
		}
}