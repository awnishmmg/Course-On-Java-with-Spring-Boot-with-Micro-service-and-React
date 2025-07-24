
import java.util.Scanner; //Explicit Import
import java.io.*; //Implicit (*) => wildCard => wild card import

class p8{
	
	public static void main(String[] args){
		
		String s=new String(); // default import 
		Exception ex = new Exception(); //
		Throwable thr = new Throwable(); //
		StringBuffer sb = new StringBuffer();
		StringBuilder sbb = new StringBuilder();
		Thread th = new Thread();
		
		String output = "working with Java";
		System.out.println(output);
	}
	
}