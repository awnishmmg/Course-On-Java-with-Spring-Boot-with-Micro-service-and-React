//wap in java for multi-level inheritance without constructor.
public class P19{
	public static void main(String[] args){
		
		System.out.println("==================== Dada Information=============");
		Dada dada = new Dada();
		
		dada.setName("Dada Vijay Deena nath Chauhan");
		dada.setAge(70);
		dada.setRole("wife");
		
		dada.khet();
		dada.tractor();
		dada.wife();
		
		System.out.println("==================== Papa Information=============");
		
		Papa papa = new Papa();		
		papa.setName("Papa Vijay Deena nath Chauhan");
		papa.setAge(50);
		papa.setRole("Amma");
		
		papa.car();
		
		papa.khet();
		papa.tractor();
		papa.wife();
		
		System.out.println("==================== Beta Information=============");
		
		Beta beta = new Beta();		
		beta.setName("Beta Vijay Deena nath Chauhan");
		beta.setAge(20);
		beta.setRole("Dadi");
		
		beta.bike(); 
		beta.car(); //From Papa
		
		beta.khet(); //From dada
		beta.tractor(); //From dada
		beta.wife(); //From dada
		
		
	}
}

class Dada{
	
  public String name;
  public int age;
  public String role;
  
  public void setName(String name){
	  System.out.println("Dada Name Setter");
	  this.name = name;
  }
  
   public void setAge(int age){
	  System.out.println("Dada Age Setter");
	  this.age = age;
   }
  
  public void setRole(String role){
	  System.out.println("Dada Role Setter");
	  this.role = role;
  }
  
  //derive
  public void khet(){
	   System.out.println("20 Acre Khet.");
  }
  
  //derive
  public void tractor(){
	  System.out.println("John Deer Tractor.");
  }
  
  public void wife(){
	  System.out.println("Role of Faguniya for "+this.name+" :"+this.role);
  }
	
}
class Papa extends Dada{
  public String name;
  public int age;
  public String role;
  
  public void setName(String name){
	  super.setName(name);
	  System.out.println("Papa Name Setter");
	  this.name = name;
  }
  
   public void setAge(int age){
	   System.out.println("Papa Age Setter");
	  this.age = age;
   }
  
  public void setRole(String role){
	  
	   super.setRole(role);
	   System.out.println("Papa Role Setter");
	   this.role = role;
	  
  }
  
   // @Override
   // public void wife(){
	  // System.out.println("Role of Faguniya for "+this.name+" :"+this.role);
   // }
  
  public void car(){
	System.out.println("Car of "+this.name+" Baleno");
  }
	
}
class Beta extends Papa{
  public String name;
  public int age;
  public String role;
  
  public void setName(String name){
	  super.setName(name);
	  System.out.println("Beta Name Setter");
	  this.name = name;
  }
  
   public void setAge(int age){
	   System.out.println("Beta Age Setter");
	  this.age = age;
   }
  
  public void setRole(String role){
	  
	   super.setRole(role);//super chaining. super.super.setRole();
	   System.out.println("Beta Role Setter");
	   this.role = role;
	  
  }
  

  public void bike(){
	System.out.println("Bike of "+this.name+" KTM");
  }
}
