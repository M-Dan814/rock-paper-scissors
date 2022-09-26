function getComputerChoice(){
    choices = [/rock/i, /scissors/i, /paper/i]
    comp_choice = Math.floor(Math.random() * choices.length)
    return comp_choice
}

