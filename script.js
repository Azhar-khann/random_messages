const msg_1 = ['are capable.', 'matter','can do it', 'are not alone','are enough','have potential','are unique',
    'are loved','make a difference','are worthy', 'are strong', ' are resilient', 'have a purpose','can overcome','are amazing']

function produce_random_message(msg_array){
    let random_num = Math.floor(Math.random()*15)
    return 'You ' + msg_array[random_num]
}

function print_random_messages(){
    let message_1 = produce_random_message(msg_1)
    let message_2 = produce_random_message(msg_1)  
    let message_3 = produce_random_message(msg_1)

    while (message_1 === message_2 || message_2 === message_3 || message_1 === message_3){
        message_1 = produce_random_message(msg_1)
        message_2 = produce_random_message(msg_1)  
        message_3 = produce_random_message(msg_1)
    }

    return `${message_1} \n${message_2} \n${message_3}`
}

console.log(print_random_messages())