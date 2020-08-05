// Find the button with id="add-time"
document.querySelector("#add-time")
//When click the button
.addEventListener('click', cloneField)


//Perform a action
function cloneField() {
    //Duplicate the fields, which fields?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// boolean = true ou false.

    //take the fields. Which fields?
    const fields = newFieldContainer.querySelectorAll('input')

    //For each field, clear
    fields.forEach(function(field) {
        //take the field of the moment and clean it
        field.value = ""
    });

    //Put on page. Where?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

