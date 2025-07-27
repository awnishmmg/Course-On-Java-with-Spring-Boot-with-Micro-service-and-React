//wap in Java : Single Level Inheritence
public class P16{
	public static void main(String[] args){
	
	Child child = new Child();
	child.bike();
	child.car();
	

	}
}

class Papa{
	public void car(){
		System.out.println("Papa ki Car");
	}
	
}

class Child extends Papa{
	public void bike(){
		System.out.println("Beta ki Bike");
	}
}
