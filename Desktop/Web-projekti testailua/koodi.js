const questions = ['Question one', 'Question two', 'Question tree', 'Question one', 'Question one', 'Question one', 'Question one', 'Question one', 'Question one', 'Question one'];
const answers = ['a', 'a', 'b', 'a', 'b', 'b', 'a', 'a', 'b', 'b'];
const index = 0;

const images = document.getElementsByTagName('img');
const questionHeader = document.getElementById('question');

images[0].addEventListener('click', imageClicked);
images[1].addEventListener('click', imageClicked);
images[2].addEventListener('click', imageClicked);
images[3].addEventListener('click', imageClicked);
images[4].addEventListener('click', imageClicked);
images[5].addEventListener('click', imageClicked);
images[6].addEventListener('click', imageClicked);
images[7].addEventListener('click', imageClicked);
images[8].addEventListener('click', imageClicked);
images[9].addEventListener('click', imageClicked);

setImages();
setQuestion();

function setImages(){
    images[0].src = './images/' + index + 'a.png';
    images[1].src = './images/' + index + 'b.png';
}

function setQuestion(){
    questionHeader.textContent = questions[index];
}

function imageClicked(event){
    if(event.currentTarget.name == answers[index]){
        console.log('Oikea vastaus!');
    }else{
        console.log('Väärä vastaus!');
    }
}