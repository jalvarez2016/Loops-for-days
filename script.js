 TinyTurtle.apply(window);
          self.penStyle= 'green';

        function hexagon(){
         forward(50);
         right(60);
         forward(50);
         right(60);
         forward(50);
         right(60);
         forward(50);
         right(60);
         forward(50);
         right(60);
         forward(50);
         right(60);
        }


        function hexagonWithLoop(){
            for(var i = 0; i < 6; i = i + 1){
                forward(30);
                right(60);
        
            }
        }
        
        
        function hexagonfractal(x){
            for(var i = 0; i < x; i = i + 1){
              hexagonWithLoop(x);
              right(x);
            }
            
        }



        function pentagon(y){
            for(var i = 0; i < 5; i = i + 1){
                forward(y);
                right(72);
            }
        }
    
        function pentagonfractal(x,y){
            for(var i = 0; i < x; i = i + 1){
              pentagon(y);
              right(x);
            }
            
        }
    
        
        function star(x){
            for(var i = 0; i < x; i = i + 1){
                
                right(72);
                forward(30);
                right(72);
                
        
            }
 
    
        }
        
        pentagonfractal(50,9);
      
        stamp();
        

