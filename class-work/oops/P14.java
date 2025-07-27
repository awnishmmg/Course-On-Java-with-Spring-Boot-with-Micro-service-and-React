//wap in Java  : Constructor Overloading.
//concept remains same for compile time polymorphism = method overloading
public class P14{
	public static void main(String[] args){
		
		Area circleArea = new Area(3.0f);
		System.out.println("Circle Area = "+circleArea.getArea());
		
		Area squareArea = new Area(4);
		System.out.println("Square Area = "+squareArea.getArea());
		
		Area reactangleArea = new Area(3,4);
		System.out.println("Reactangle Area = "+reactangleArea.getArea());		

	}
}

class Area{
	
	private double area =  0.0f;
	//constructor : radius 
	public Area(float radius){
		this.circleArea(radius);
	}
	private void circleArea(float radius){
		System.out.println("Circle Area Calculated with radius:"+radius);
		this.area = Math.PI*radius*radius;
	}
	//constructor : side
	public Area(int side){
		this.squareArea(side);
	}
	private void squareArea(int side){
		System.out.println("Square Area Calculated with side="+side);
		this.area = side*side;
	}
	
	//constructor : height and width
	public Area(int height,int width){
		this.rectangleArea(height,width);
	}

	private void rectangleArea(int height,int width){
		System.out.println("Rectange Area Calculated with height="+height+" and width="+width);
		this.area = height*width;
	}
	
	public double getArea(){
		return this.area;
	}
	
	
}