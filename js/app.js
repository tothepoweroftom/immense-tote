let solutions = [{
        id: "i1",
        value: "2009"
    },
    {
        id: "i2",
        value: "in the name of humankind"
    },
    {
        id: "i3",
        value: "rigourous testing"
    },
    {
        id: "i4",
        value: "keen eye"
    },
    {
        id: "i5",
        value: "freedom of expression"
    },
    {
        id: "i6",
        value: "bleeding edge"
    },
    {
        id: "i7",
        value: "tip of the spear"
    },
    {
        id: "i8",
        value: "innovative methodology"
    },
    {
        id: "i9",
        value: "top products"
    },
    {
        id: "i10",
        value: "unite us"
    },
    {
        id: "i11",
        value: "Friday rituals"
    },
    {
        id: "i12",
        value: "beer time "
    },
    {
        id: "i13",
        value: "tuesday soundgarden"
    },
    {
        id: "i14",
        value: "unique parties"
    },
    {
        id: "i15",
        value: "core culture"
    }

]

window.myData = [];
console.log(window.sessionStorage.clear());

function submitData() {
    let forms = document.getElementsByClassName("borderless_input");
    let formsArray = [].slice.call(forms);
    let storage = window.sessionStorage;
  

    let counter = 0;
    formsArray.forEach(element => {
        let inputText = element.value.toLowerCase();
        
        // get solution based on id
        let solution = solutions.find(x=>x.id === element.id);

        //compare solutions
        if(solution.value === inputText){
            console.log("Correct");
            storage.setItem(element.id, true);
        } else {
            console.log("Wrong");

        }

        if(counter < 14) {
            counter+=1;
        } else if(counter === 14) {
            window.location.pathname = '/code.html'
        }

    });

}