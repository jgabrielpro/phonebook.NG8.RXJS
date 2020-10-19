import { CapitalizePipe } from './capitalize.pipe';
fdescribe ('Capitalize pipe', ()=>{

  fit('should display capitalize the letter', ()=>{

    //arrange
      let pipe = new CapitalizePipe();

      //**

      //act assert
      expect(pipe.transform("joseph")).toEqual('Joseph');


  })
})
