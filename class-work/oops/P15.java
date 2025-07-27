//wap in Java  :has Relationship
public class P15{
	public static void main(String[] args){
	Child child = new Child();
	child.friend.getMoney();
	child.payFees();
	
	}
}

class Papa{
	public void getMoney(){
		System.out.println("Say Papa Take Money");
	}
}

class Child{
	Papa friend;
	public Child(){	
		this.friend = new Papa();
	}
	public void payFees(){
		System.out.println("Needed Money to Pay Fees");
	}
}
