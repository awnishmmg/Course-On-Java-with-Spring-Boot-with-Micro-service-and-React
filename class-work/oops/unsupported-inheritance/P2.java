
public class P2{
	
	public static void main(String[] args){
		System.out.println("Main Execution");
		
		
		System.out.println("=======Feature of Car1=======");
		Car1 a = new Car1();
		a.features();
		
		System.out.println("=======Feature of Car2=======");
		Car2 b = new Car2();
		b.features();
		
		System.out.println("=======Feature of SmartCar=======");
		SmartCar smc = new SmartCar();
		smc.features();
		
	}
}

class AudioPlayer{
	
	
	public void playMusic(){
		System.out.println("Music playing...");
	}
	
}

class GPS{
	
	public void myLocation(){
		System.out.println("Your Location : Sector 63 Noida");
	}
}

class Car1 extends GPS{
	
	public void features(){
		this.myLocation();
	}
}

class Car2 extends AudioPlayer{
	
	public void features(){
		this.playMusic();
	}
}

class SmartCar extends GPS{
	
	private AudioPlayer audio;
	
	public SmartCar(){
		this.audio = new AudioPlayer();
	}
	
	
	public void features(){
		this.audio.playMusic();
		this.myLocation();
	}
}