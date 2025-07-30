//wap in Java for cyclic  inheritance
public class P3{
	
	public static void main(String[] args){
		System.out.println("Main Execution");
		
		Child child = new Child();
		Parent parent = new Parent();
		parent.child.sahara();
		
	}
}
//Has Relations
class Parent{
	
   public static Child child;
   public String eyes = "blue";
   
   public Parent(){
	  if(this.child == null){
		  this.child = new Child();
	  }
   } 
   
   
   public void care(){
		System.out.println("Parent will care child");
   }
   
   public String getEyes(){
	  return this.eyes;
   }
	
}
//is Relationship
class Child extends Parent{
	
	public Child(){
		System.out.println("Eyes:"+this.getEyes());
	}
	
	public void features(){
		this.care();
	}
	
	public void sahara(){
		System.out.println("Child gives Sahara to Parent");
	}
}