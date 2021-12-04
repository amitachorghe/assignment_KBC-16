var kbc={
    // 6 questions in total.  worth total= 2Lac

    'question_list':[
        {
            'text': "Which type of JavaScript language is ___",
            'options': ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
            'correct_answer': "Object-Based",
            'price_amount': 1000
        },
        {
            'text': "Which one of the following also known as Conditional Expression?",
            'options': ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
            'correct_answer': "immediate if",
            'price_amount': 5000



        },
        {
            'text': "Who wrote the introduction to the English translation of Rabindranath Tagore’s Gitanjali?",
            'options': ["P.B. Shelley", "Alfred Tennyson", "W.B. Yeats", "T.S. Elliot"],
            'correct_answer': "W.B. Yeats",
            'price_amount': 10000

        },{
            'text': "Which one of the following is the correct way for calling the JavaScript code?",
            'options': ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
            'correct_answer': "Function/Method",
            'price_amount': 20000
        },
        {
            'text': "In the JavaScript, which one of the following is not considered as an error:",
            'options': ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
            'correct_answer': "Division by zero",
            'price_amount': 50000
        }],    
        
        
    'winning_prize': function(question_list,current){
        var price=this.question_list[current].price_amount;
        return price;
    }, //The total amount which the player has won. //need to calculate.

    'current_question_no': function(num){
        return num;
    },
    'print_question': function (question_list,val) {

        console.log(this.question_list[val].text);
        document.write(this.question_list[val].text,"<br>");
        console.log(this.question_list[val].options);
        document.write(this.question_list[val].options,"<br>");

     },

    'select_answer': function(real_ans,answer) {
        if(real_ans==answer){

            console.log("correct answer");
            document.write("correct answer","<br>");
            return true;

        }
        else{
            console.log("Wrong answer");
            document.write("Wrong answer","<br>");
            return false;
        }
        
    }, //This function will check whether the selected answer for the current question is correct or not.
    //If correct, increment the counter (That means, move on to the next question),
    //If incorrect. then show message saying you have lost and end the game.

    'main_fun':function(){
        var final_price=0;

        for(var i=0;i<kbc.question_list.length;i++){
            var val=kbc.current_question_no(i);
            
            var answer=prompt(kbc.print_question(kbc.question_list,val));
            var bool=kbc.select_answer(kbc.question_list[i].correct_answer,answer);
            if(bool==true){
                final_price+=kbc.winning_prize(kbc.question_list,val);
                console.log('Prize money till now',final_price);
                document.write('Prize money till now',final_price,"<br>");

                if(i==kbc.question_list.length-1){
                    console.log("Congratulations!!! You have won",final_price);
                    document.write("Congratulations!!! You have won",final_price,"<br>");
                }
            }
            else{
                console.log("Better Luck next time ");
                document.write("Better Luck next time ","<br>");
                break;
            }

    



        }

    }

}



console.log('--Welcome to Kaun Banega Crorepati--');
