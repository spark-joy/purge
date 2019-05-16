function scoreKept(user) {
    if(user <= 0) {
        return 'none';
    } else if(user < 3){
        return 'some';
    } 
    return 'all';
}

export default scoreKept;
