import React, { Component } from 'react'

 class Quiz extends Component {
     constructor(props){
         super(props);
         this.state={
             result:0,
             num1: 0, 
             num2: 0,
            //  answered:false,
             answer:0,
             resultArray: []
         }
         
     }
    //   generateRandom(){
    //       let rand = Math.floor(Math.random()*10);
    //       return rand;
          
          

    //  }
     componentDidMount(){
         let num1 = Math.floor(Math.random()*10);
         let num2 = Math.floor(Math.random()*10);

         let resultArray = this.genrateArray();
        console.log(resultArray, '1')
         let resultPosition = Math.floor(Math.random()*3);
        console.log(resultPosition, '2')
         resultArray[resultPosition] = num1 + num2;
        console.log(resultArray, '3')
         this.setState({
             num1: num1,
             num2: num2,
             result:num1+num2,
             resultArray: resultArray
            
         })
     }
     genrateArray(){
       
         var randoms = [...Array(4)].map(() => Math.floor(Math.random() * 9));
         return randoms;
     }
     checkAns(item){
         this.setState({
            //  answered:true,
             answer:item
         })

         
     }
    render() {
        return (
            <div className="quiz">
                <div className="quiz-content">
                  <p className="question"> what is the sum of <span className="text-info">{this.state.num1}</span> and <span className="text-info">{this.state.num2}</span>?
                  </p> 
                  <div className="options">
                  {
                      this.state.resultArray.map((item, index) => {
                          return(
                            <div onClick={()=>this.checkAns(item)} className="fields" key={index} style={{backgroundColor: this.state.answer == item ? item == this.state.result ? "green" : "red" : null}} >
                            <div className="field-block">{item}</div>
                        </div>
                          )
                      })
                  }
                  </div>
                </div>
                
            </div>
        )
    }
}
export default Quiz;