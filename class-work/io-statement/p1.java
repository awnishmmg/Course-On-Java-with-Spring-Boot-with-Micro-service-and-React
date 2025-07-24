class p1{
	
	public static void main(String[] args){
		System.out.println("Arg count:"+args.length);
		
		int argc = args.length;
		
		for(int i=0;i<argc;i++){
			System.out.println("Arguments:"+args[i]);
		}
	}

}