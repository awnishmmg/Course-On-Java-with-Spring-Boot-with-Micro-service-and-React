//wap in Java : getter and setter
// Tighlty Encapsulated Class.

public class P9{

	public static void main(String[] args){
		
		Total t = new Total();
		t.setX(10);
		t.setY(20);
		
		System.out.println("value of x : "+t.getX());
		System.out.println("value of y : "+t.getY());
		
		System.out.println("Result : "+t.getResult(1));
	
	}
}

class Total{
	
	private int x;
	private int y;
	
	private int result;
	
	//setter : x : for setting the value
	public void setX(int x){
		this.x = x;
	}
	
	//setter : y
	public void setY(int y){
		this.y = y;
	}
	
	//Getter : return keyword : for getting the value.
	public int getX(){
		return this.x;
	}
	
	public int getY(){
		return this.y;
	}
	
	public int getResult(int op){
		if(op == 1){
			this.add();
			return this.result;
		}
		return 0;
		
	}
	
	private void add(){
	     this.result = this.x + this.y;
	}
	
		

}