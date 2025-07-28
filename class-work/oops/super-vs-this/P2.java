//wap in Java : this()
//constructor chaining.

public class P2{
	public static void main(String[] args){
	
		A a = new A();

	}
}

class A{
	
	public A(){
		this(10);
		System.out.println("A with Param : 0");
		//this(10); This is Invalid because, this() should be first line of the constructor.
		
		
	}
	// overloaded : constructor : A(int)
	public A(int x){
		this(10,20);
		System.out.println("A with Param : 1"+x);
		System.out.println("operation Square of A"+x*x);
	}
	// overloaded : constructor :A(int,int)
	public A(int x,int y){
		System.out.println("A with Param : 2 where x="+x+" and y ="+y);
		System.out.println("cross product of A : "+x*y);
	}
}
