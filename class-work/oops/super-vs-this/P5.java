//wap in Java : overwrite 
//Overwrite : Over Ride

public class P5{
	public static void main(String[] args){
		
	Child awnish = new Child();
	awnish.calling("Richa");
	

	}
}

class Papa{
	
	String phone = "Nokia";
	String model = "1100 classic";
	
	public void calling(String name){
		System.out.println(name+" calling ..");
		System.out.println("Call coming in mobile "+this.phone+ " model= "+this.model);
	}
	
	
}

class Child extends Papa{
	String phone = "Nokia";
	String model = "C2-03 Touch-Type";
	
	public void calling(String name){
		System.out.println(name+" calling ..");
		System.out.println("Call coming in mobile "+this.phone+ " model= "+this.model);
	}
}