function solution() {
    //base Post class
    class Post {
        constructor (title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    // SocialMediaPost class (inherits from Post) 
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            //get the base string from the parent class
            let result = super.toString();

            //calculate rating and append it
            let rating = this.likes - this.dislikes;
            result += `\nRating: ${rating}`;

            //only append comments if the array is not empty
            if (this.comments.length > 0) {
                result += `\nComments:\n`;
                //format each comment with " * " and join them with newlines 
                result += this.comments.map(c => ` * ${c}`).join('\n');
            }
            return result;
        }
    }
    //BlogPost Class (inherits from post)
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this; // return the object instance to allow method chaining
        }
        toString() {
            //get the base string from the parent class and append views
            return super.toString() + `\nViews: ${this.views}`;
        }
    }
    //return the revealing module containing all classe
    return {
        Post, SocialMediaPost, BlogPost
    };

    }

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
