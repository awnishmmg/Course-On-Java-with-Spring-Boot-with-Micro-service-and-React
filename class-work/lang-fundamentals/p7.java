//wap in Java to work other function of string
//Develope a Routing Engine in Java for Correct URL and Wrong URL.

import java.util.Scanner;
import java.util.HashMap; //collection Framework Data Structure
class p7{
	
		public static void main(String[] args){
			Scanner sc = new Scanner(System.in);
			String BASE_URL  = "https://wwww.facebook.com/";
			HashMap<String,String> pages = new HashMap<String,String>();
			pages.put("home","Home Page");
			pages.put("about","About Page");
			System.out.println(pages.toString());
			System.out.println("Enter the url(endpoint)");
			String page = sc.nextLine();
			//check if page exist or not.
			if(pages.containsKey(page.toLowerCase())){
				String content = pages.get(page.toLowerCase());
				System.out.println(BASE_URL+page.toLowerCase());
				System.out.println("Welcome to "+content);
			}else{
				System.out.println(BASE_URL+page.toLowerCase());
				System.out.println("OOPS !! 404 Page Not Found");
			}
			
			
		}
}