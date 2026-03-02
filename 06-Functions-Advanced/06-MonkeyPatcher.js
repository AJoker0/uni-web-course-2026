function solution(command) {
    // Processing simple commands of voice changes
    if (command === 'upvote') {
        this.upvote++;
    } else if (command === 'downvote') {
        this.downvotes++;
    }

    // processing complex command 'score'
    else if (command === 'score') {
        let totalVotes = this.upvotes + this.downvotes;
        let balance = this.upvotes - this.downvotes;

        //Initially, output values are equal to real
        let reportedUpvotes = this.upvotes;
        let reportedDownvotes = this.downvotes;

        // logic for obfuscating (distortion of real numbers)
        if (totalVotes > 50) {
            // find bigger number of votes (likes and dislikes) 
            let greaterNumber = Math.max(this.upvotes, this.downvotes);
            // count 25% amd round it up
            let addedAmount = Math.ceil(greaterNumber * 0.25);

            // add fake votes
            reportedUpvotes += addedAmount;
            reportedDownvotes += addedAmount;
        }
        // logic for rating
        let rating = '';

        // The order of inspections is important! First check for < 10
        if (totalVotes < 10) {
            rating = 'new';

        } else if ((this.upvotes / totalVotes) > 0.66) {
            rating = 'hot';
        } else if (balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            // if nothing is suitable 
            rating = 'new';
        }
        return [reportedUpvotes, reportedDownvotes, balance, rating];
    }



} 
    

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};


solution.call(post, 'upvote');
solution.call(post, 'downvote');


let score = solution.call(post, 'score'); 
console.log('Первый запрос:', score); 

for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}

score = solution.call(post, 'score');     
console.log('После 50 дизлайков:', score);

/* function solution(command) {
    const { upvotes, downvotes } = this;

    const commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            const total = this.upvotes + this.downvotes;
            const balance = this.upvotes - this.downvotes;

            const obfuscator = total > 50 ? Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25) : 0;
            const getRating = () => {
                if (total < 10) return 'new';
                if (this.upvotes / total > 0.66) return 'hot';
                if (balance >= 0 && total > 100) return 'controversial';
                if (balance < 0) return 'unpopular';
                return 'new';
            };

            return [
                this.upvotes + obfuscator,
                this.downvotes + obfuscator,
                balance,
                getRating()
            ];
        }
    };
    return commands[command]();
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};


solution.call(post, 'upvote');
solution.call(post, 'downvote');


let score = solution.call(post, 'score'); 
console.log('Первый запрос:', score); 

for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}

score = solution.call(post, 'score');     
console.log('После 50 дизлайков:', score); */