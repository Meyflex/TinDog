const dogs = [
  {
    name: "Rex",
    avatar: "images/dog-rex.jpg",
    age: 25,
    bio: "Art. Literature. Natural wine. Yoga.",
    hasBeenSwiped: false,
    hasBeenLiked: false
  },{
    name: "Bella",
    avatar: "images/dog-bella.jpg",
    age: 43,
    bio: "Yup, that's my owner. U can meet him if you want",
    hasBeenSwiped: false,
    hasBeenLiked: false
  },
  {
    name: "Teddy",
    avatar: "images/dog-teddy.jpg",
    age: 30,
    bio: "How you doin?",
    hasBeenSwiped: false,
    hasBeenLiked: false
  }
]
class  dog {
  constructor(data) {
    Object.assign(this,data)
  }
  renderHTML(){
    return `<div class="image-box" >
            <img src="../${this.avatar}" alt="image 1" class="image-1">
          </div>
          <div class="text">
          <h1 class="dog-name">
            ${this.name} , ${this.age}
          </h1>
          <p class="para">${this.bio}</p>
          </div> `

  }



}


let picture = document.getElementById('picture');
let dislike = document.getElementById('buttons')
let like = document.getElementById('buttons2')
function renderHTML(dog) {
  let a = dog.renderHTML() ;
  picture.innerHTML = a;
  dog.hasBeenSwiped = true;
}

dislike.addEventListener('click', function(){
  let dog2 = new dog(dogs[0]);

  dogs.push(dogs[0])
  renderHTML(dog2);

  dogs.shift();
} )



like.addEventListener('click', function(){
  let dog2 = new dog(dogs[0]);

  dogs.push(dogs[0])

  renderHTML(dog2);
  dog2.hasBeenLiked = true;

  dogs.shift();

})



