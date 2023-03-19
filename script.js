const msg_1 = ['are capable.', 'matter.','can do it', 'are not alone','are enough','have potential','are unique',
    'are loved','make a difference','are worthy']

function produce_random_message(msg_array){
    random_num = Math.floor(Math.random())*10
    return 'You' + msg_array[random_num]
}

