//wap in Java : overwrite 
// @overriding
// this scope -> overwrite -> (parent,child)
// super : is used to parent class method or properties when child is @overriding the Parent Properties or methods.
public class P7{
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
	
	@Override //Java Annotation => Docorator
	// Annotator: it gives useful information about current activity (metadata)
	public void calling(String name){
		System.out.println(name+" calling ..");
		System.out.println("Call coming in mobile "+this.phone+ " model= "+this.model);
		System.out.println("phone got cut...");
		super.calling("Richa");
	}
}