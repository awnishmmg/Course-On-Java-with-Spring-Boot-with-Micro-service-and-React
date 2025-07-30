//wap in java for Hierarichal Inheritance
public class P20{
	public static void main(String[] args){
		
		Papa papa = new Papa();
		System.out.println("Money :"+papa.money());
		
		
		Beti beti = new Beti();
		
		beti.coaching();
		beti.market();
		
		Beta beta = new Beta();
		beta.movie();
		beta.market();
		
		
		
		
	}
}


class Papa{
	
  private void car(){
	  System.out.println("Car Fortuner Papa Personal Car");
  }
  public void skooty(){
	  System.out.println("Activa Scooty");
  }
  
  public int money(){
	  System.out.println("Money from Papa");
	  return 500;
  }
  
  }
  
class Beta extends Papa{
	
  private int petrol=0;
  private void bike(){
	  
	  if(petrol == 0){
		 System.out.println("KTM : No Petrol");
	  }else{
		 System.out.println("KTM : Running..");
	  }
	  
  }
  
  public void movie(){
	  this.bike();
  }
	
  public void market(){
	  this.petrol = this.money();
	  System.out.println("Papa ka Para will goto market via:");
	  this.bike();
  }
}

class Beti extends Papa{
	
  private void cycle(){
	  System.out.println("Lady Bird Cycle");
  }
  
  public void coaching(){
	  this.cycle();
	   System.out.println("Going to Coaching...");
  }
  public void market(){
	  System.out.println("Papa ki Pari will goto market via:");
	  this.skooty();
  }
}
