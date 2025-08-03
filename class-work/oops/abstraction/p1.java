class P1{
	public static void main(String[] args){
		Papa papa = new Papa();
		papa.makeSchool();
		papa.property();
		papa.bike();
		
	}
	
}

abstract class Dada{
	
	//Non Abstract
	public void sikaar(){
		System.out.println("Sikari Dada..");
	}
	
	//Non Abstract
	public void property(){
		System.out.println("House of the Dada...");
	}
	
	//Abstract
	public abstract void makeSchool();
	
}

class Papa extends Dada{
	
	public void bike(){
		System.out.println("Speldor Bike Papa..");
	}
	
	
	@Override 
	//No Abstract
	public void makeSchool(){
		System.out.println("Dada Ka school");
	}
	
}


