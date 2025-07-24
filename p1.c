int printf(const char *format,...);
#include<conio.h>

void main(){
 
 if(0){
	 else_label:
		printf("Hi \n");
	 goto if_label;
 }else{
	 if_label:
		printf("Hello \n");
	 goto else_label;
 }


}


