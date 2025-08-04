public class P1 implements MyInterface{
	
	public static void main(String[] args){
	
		// we cannot make the object of the Interface it is not physical entity and is completly 
		// abstract.
	
		//MyInterface myinf = new MyInterface(); 
		System.out.println("Main Method executing After implementing the Interface");
	
		P1 p1 = new P1();
		p1.sleep();
		
		MyInterface.enjoy();
		//P1.enjoy();
	
	
	
	}
	
	public void dance(){
		System.out.println("Dancing");
	}
	
	public void sing(){
		System.out.println("Singing");
	}
	
	public void drink(){
		System.out.println("Drinking 90 ml daily");
	}
}


interface MyInterface{
	
		public abstract void drink();
		public abstract void sing();
		public abstract void dance();
		
		//Non Abstract with Non static context and object level method.
		default void sleep(){
			System.out.println("Sleeping 8-9 Hours");
			this.meTime();
		}
		
		//Non Abstract with static context and class level method.
		public static void enjoy(){
			System.out.println("Enjoy your personal Space & time");
		}
		
		// //Non Abstract with Non static context and object level method.
		private void meTime(){
			System.out.println("Me time");
		}
		//Non Abstract with static Context and class level method
		private static void familyTime(){
			System.out.println("Talk to Maa and Papa");
		}
	}