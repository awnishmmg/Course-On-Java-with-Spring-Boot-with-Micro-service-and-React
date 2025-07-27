//wap in Java  How to create this instance in Main class 
// Encapsulation : wrapping of data memeber and memeber function with access rule.
// access Rule : Public 
// access Rule : private 

public class P7{

	public static void main(String[] args){
		
		Car car = new Car();
		
		car.model = "Maruti Alto 800";
		car.color = "white";
		//car.mf_date = "20-Aug-2025";
		
		car.start();
		car.meterDisplay();
		car.accelerate(1);
		car.meterDisplay();
		car.accelerate(2);
		car.meterDisplay();
		car.brake();
		car.accelerate(3);
		//car.mf_date = "20-Aug-2025";
		car.meterDisplay();
		car.accelerate(4);
		car.meterDisplay();
		car.brake();
		car.brake();
		car.stop();
		
		
	}
}

class Car{
	
	public String model;
	public String color;
	private String mf_date = "20-Aug-2022";
	
	public int speed = 0;

	public void start(){
		System.out.println("Broom Broom Car started.");
		this.speed = 50;
	}
	
	public void stop(){
		System.out.println("Broom Broom Card stop.");
		this.speed = 0;
	}
	
	public void meterDisplay(){
		
		System.out.println("Model :"+this.model);
		System.out.println("color :"+this.color);
		System.out.println("Manufactured Date :"+this.mf_date);
		
		System.out.println("Speed:"+this.speed);
	}
	
	public void accelerate(int gear){
		if(gear == 1){
			this.speed = this.speed + 10;
		}else if(gear == 2){
			this.speed = this.speed + 20;
		}else if(gear == 3){
			this.speed = this.speed + 30;
		}else if(gear == 4){
			this.speed = this.speed + 40;
		}
	}
	
	public void brake(){
		this.speed = this.speed - 20;
	}
	
}
