//Selecting all the elements in the class section
const sections = document.querySelectorAll('.section');
//Selecting all the elements in the class controlls
const sectButtons = document.querySelectorAll('.controlls');
//Selecting all the elements in the class control
const sectButton = document.querySelectorAll('.control');
//Selecting all the elements in the body in the class main-content
const allSections = document.querySelector('.main-content');

/* Function for the click of the active button (Changes the color */
function pageTransitions() {

    //Button click active-class
    for(let i = 0; i < sectButton.length; ++i){
        sectButton[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-button');
            //Deletes the class active-button
            currentButton[0].className = currentButton[0].className.replace('active-button', '');
            this.className += ' active-button';
        });
    }

    //Sections active-class
    allSections.addEventListener('click', (e) => {
        //console.log(e.target);
        //Getting the data-id of the current element
        const id = e.target.dataset.id;
        if(id){
            //Remove selected (active) from the other buttons
            sectButtons.forEach((button) => {
                button.classList.remove('active')
            })
            e.target.classList.add('active');

            //Hides the other sections
            sections.forEach(section => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    //Theme button
    const thmeButton = document.querySelector('.theme-button');
    thmeButton.addEventListener('click', () => {
        
        //When the button is clicked, a class 'light-mode' is added to the body and it removes when is clicked again
        const element = document.body;
        element.classList.toggle('light-mode');

    });
}

pageTransitions();