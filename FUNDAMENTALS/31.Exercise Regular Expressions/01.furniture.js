function solve(input) {


    let pattern = />>([A-Za-z]+)<<(\d+(?:\.\d+)?)!(\d+)/;


    while (input[0] != `Purchase`) {
        let line = input.shift()
        let match = pattern.exec(line);
        if (match != `null`) {
            let { name, price, qty } = match;
        }


    }

}
solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']

)   